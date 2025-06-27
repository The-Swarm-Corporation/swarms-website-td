"use client"

import { useState, useEffect } from "react"
import { CardWrapper } from "@/components/card-wrapper"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Star, GitFork, ExternalLink, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
}

interface GitHubRepositoriesProps {
  organization: string
}

export function GitHubRepositories({ organization }: GitHubRepositoriesProps) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [filteredRepositories, setFilteredRepositories] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const repositoriesPerPage = 6

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Fetch all repositories for the organization
        const response = await fetch(
          `https://api.github.com/orgs/${organization}/repos?per_page=100&sort=stars&direction=desc`,
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`)
        }

        const data = await response.json()
        setRepositories(data)
        setFilteredRepositories(data)
        setTotalPages(Math.ceil(data.length / repositoriesPerPage))
      } catch (err) {
        console.error("Error fetching repositories:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchRepositories()
  }, [organization])

  useEffect(() => {
    // Filter repositories based on search query
    const filtered = repositories.filter(
      (repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (repo.topics && repo.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()))),
    )

    setFilteredRepositories(filtered)
    setTotalPages(Math.ceil(filtered.length / repositoriesPerPage))
    setCurrentPage(1) // Reset to first page when search changes
  }, [searchQuery, repositories])

  // Get current page repositories
  const indexOfLastRepo = currentPage * repositoriesPerPage
  const indexOfFirstRepo = indexOfLastRepo - repositoriesPerPage
  const currentRepositories = filteredRepositories.slice(indexOfFirstRepo, indexOfLastRepo)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top of repository section
    document.getElementById("repositories-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div id="repositories-section">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/50 border-red-500/20 focus:border-red-500/50 focus:ring-red-500/20"
          />
        </div>
      </div>

      {isLoading ? (
        // Loading state
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="rounded-lg border border-red-900/20 bg-background/30 p-6 backdrop-blur-sm">
              <div className="space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        // Error state
        <div className="text-center p-8 rounded-lg border border-red-900/20 bg-background/30 backdrop-blur-sm">
          <p className="text-red-500 mb-4">Failed to load repositories</p>
          <p className="text-muted-foreground">{error}</p>
        </div>
      ) : filteredRepositories.length === 0 ? (
        // No results state
        <div className="text-center p-8 rounded-lg border border-red-900/20 bg-background/30 backdrop-blur-sm">
          <p className="text-xl font-bold mb-2">No repositories found</p>
          <p className="text-muted-foreground">Try adjusting your search query</p>
        </div>
      ) : (
        // Results
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentRepositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CardWrapper className="h-full p-6 hover:border-red-500/50 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold mb-1 flex items-center">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors"
                        >
                          {repo.name}
                        </a>
                        <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground" />
                      </h3>
                      {repo.language && (
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-red-500/10 text-red-400 mb-2">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {repo.description || "No description provided"}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{repo.stargazers_count.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 text-red-500 mr-1" />
                          <span className="text-sm">{repo.forks_count.toLocaleString()}</span>
                        </div>
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ position: "relative", zIndex: 10 }}
                        className="cursor-pointer inline-flex items-center justify-center rounded-md text-xs font-medium border border-red-500/50 text-red-400 hover:bg-red-500/10 h-8 px-3 py-1"
                      >
                        View Repo
                      </a>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => handlePageChange(page)}
                    className={
                      currentPage === page
                        ? "bg-red-600 hover:bg-red-700"
                        : "border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
