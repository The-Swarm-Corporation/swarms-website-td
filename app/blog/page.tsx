"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { CardWrapper } from "@/components/card-wrapper"
import { 
  Calendar, Clock, ArrowRight, User, Tag, Eye,
  Search, Grid, List, ChevronLeft, ChevronRight,
  SlidersHorizontal
} from "lucide-react"
import { format, parseISO } from "date-fns"
import type { BlogPost } from "@/lib/blog"

type ViewMode = 'gallery' | 'table'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>('gallery')
  const [postsPerPage, setPostsPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        if (response.ok) {
          const posts = await response.json()
          setPosts(posts)
          setFilteredPosts(posts)
        } else {
          console.error('Failed to fetch blog posts')
          setPosts([])
          setFilteredPosts([])
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        setPosts([])
        setFilteredPosts([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredPosts(filtered)
    setCurrentPage(1)
  }, [searchTerm, posts])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Function to get random gradient for each post
  const getRandomGradient = () => {
    const gradients = [
      "from-red-500/20 via-purple-500/20 to-blue-500/20",
      "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      "from-orange-500/20 via-red-500/20 to-pink-500/20",
      "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      "from-purple-500/20 via-pink-500/20 to-red-500/20",
      "from-yellow-500/20 via-orange-500/20 to-red-500/20"
    ]
    return gradients[Math.floor(Math.random() * gradients.length)]
  }

  // Function to get random size class for each post
  const getRandomSize = (index: number) => {
    const patterns = [
      "col-span-2 row-span-2", // Large
      "col-span-1 row-span-2", // Tall
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1", // Normal
    ]
    return patterns[index % patterns.length]
  }

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-red-500 font-orbitron text-xl">LOADING BLOG...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
        <AnimatedBackground particleColor="rgba(239, 68, 68, 0.3)" className="opacity-30" />

        <div className="container relative px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white font-orbitron tracking-tighter mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
                SWARMS BLOG
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="container px-4 sm:px-6 py-8 bg-black">
        <motion.div
          className="max-w-8xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-orbitron tracking-wider backdrop-blur-sm"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex border border-red-500/30 rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'gallery' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('gallery')}
                  className={`font-orbitron tracking-wider ${
                    viewMode === 'gallery' 
                      ? "bg-red-600 hover:bg-red-700 border-red-500" 
                      : "border-red-500/30 text-red-400 hover:bg-red-500/10"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className={`font-orbitron tracking-wider ${
                    viewMode === 'table' 
                      ? "bg-red-600 hover:bg-red-700 border-red-500" 
                      : "border-red-500/30 text-red-400 hover:bg-red-500/10"
                  }`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Posts Per Page */}
              <select
                value={postsPerPage}
                onChange={(e) => setPostsPerPage(Number(e.target.value))}
                className="bg-black/50 border-2 border-red-500/30 rounded-lg text-white px-3 py-2 font-orbitron tracking-wider appearance-none cursor-pointer"
              >
                <option value={8}>8 per page</option>
                <option value={12}>12 per page</option>
                <option value={24}>24 per page</option>
              </select>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className={`border-red-500/30 text-red-400 hover:bg-red-500/10 font-orbitron tracking-wider ${
                  showFilters ? 'bg-red-500/10' : ''
                }`}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-400 font-sans text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
          </div>
        </motion.div>
      </div>

      {/* Blog Gallery */}
      <div className="container px-4 sm:px-6 py-12 bg-black">
        <motion.div
          className="max-w-8xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {viewMode === 'gallery' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[300px]">
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={item}
                  className={`group ${getRandomSize(index)}`}
                >
                  <CardWrapper className="h-full transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02]">
                    <Card className="border-2 border-red-500/20 bg-black/50 backdrop-blur-sm h-full relative overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${getRandomGradient()} opacity-30`} />
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-gray-400 font-sans">
                              {format(parseISO(post.date), "MMM dd, yyyy")}
                            </span>
                          </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-white font-black mb-4 tracking-wider font-orbitron group-hover:text-red-400 transition-colors duration-300 flex-grow">
                          {post.title}
                        </h2>

                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-orbitron text-red-400 tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400 font-sans">{post.author}</span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 font-orbitron tracking-wider"
                              asChild
                            >
                              <a href={`/blog/${post.slug}`} className="flex items-center space-x-2">
                                <span>READ</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500" />
                    </Card>
                  </CardWrapper>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border-2 border-red-500/20 bg-black/50 backdrop-blur-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-red-500/20">
                    <th className="px-6 py-4 text-left text-sm font-orbitron text-red-400">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-orbitron text-red-400">Author</th>
                    <th className="px-6 py-4 text-left text-sm font-orbitron text-red-400">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-orbitron text-red-400">Tags</th>
                    <th className="px-6 py-4 text-right text-sm font-orbitron text-red-400"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post) => (
                    <tr key={post.slug} className="border-b border-red-500/10 hover:bg-red-500/5 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <h3 className="text-white font-orbitron">{post.title}</h3>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-red-500" />
                          <span className="text-gray-400">{post.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-red-500" />
                          <span className="text-gray-400">{format(parseISO(post.date), "MMM dd, yyyy")}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-orbitron text-red-400 tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 font-orbitron tracking-wider"
                          asChild
                        >
                          <a href={`/blog/${post.slug}`} className="flex items-center space-x-2">
                            <span>READ</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="container px-4 sm:px-6 py-8 bg-black">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 font-orbitron tracking-wider"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={`font-orbitron tracking-wider min-w-[40px] ${
                  currentPage === page 
                    ? "bg-red-600 hover:bg-red-700 border-red-500" 
                    : "border-red-500/30 text-red-400 hover:bg-red-500/10"
                }`}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 font-orbitron tracking-wider"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
} 