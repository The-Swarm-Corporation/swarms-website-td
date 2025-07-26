"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { CardWrapper } from "@/components/card-wrapper"
import { 
  Calendar, Clock, ArrowRight, Search, Filter, 
  BookOpen, Tag, User, Eye, Heart, Share2 
} from "lucide-react"
import { format, parseISO } from "date-fns"
import type { BlogPost } from "@/lib/blog"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch blog posts from API
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
    let filtered = posts

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags.some(tag => tag === selectedTag)
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedTag, posts])

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))

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
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
        <AnimatedBackground particleColor="rgba(239, 68, 68, 0.3)" className="opacity-30" />

        <div className="container relative px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white font-orbitron tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
                SWARMS BLOG
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light font-sans">
              Insights, tutorials, and cutting-edge developments in multi-agent AI systems
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container px-4 sm:px-6 py-12 bg-black">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search Bar */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
              <input
                type="text"
                placeholder="Search articles, tags, or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-black/50 border-2 border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none font-orbitron tracking-wider backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Tags Filter */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              variant={selectedTag === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag("")}
              className={`font-orbitron tracking-wider ${
                selectedTag === "" 
                  ? "bg-red-600 hover:bg-red-700 border-red-500" 
                  : "border-red-500/30 text-red-400 hover:bg-red-500/10"
              }`}
            >
              ALL
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={`font-orbitron tracking-wider ${
                  selectedTag === tag 
                    ? "bg-red-600 hover:bg-red-700 border-red-500" 
                    : "border-red-500/30 text-red-400 hover:bg-red-500/10"
                }`}
              >
                {tag}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Posts */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <div className="container px-4 sm:px-6 py-12 bg-black">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white font-orbitron tracking-tighter mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                FEATURED ARTICLES
              </span>
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {filteredPosts
                .filter(post => post.featured)
                .slice(0, 2)
                .map((post, index) => (
                  <motion.div
                    key={post.slug}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: index * 0.1 }}
                  >
                    <CardWrapper className="h-full transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02] group">
                      <Card className="border-2 border-red-500/30 bg-black/60 backdrop-blur-md h-full relative overflow-hidden">
                        {/* Animated border glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400 font-sans">
                                {format(parseISO(post.date), "MMM dd, yyyy")}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400 font-sans">{post.readTime}</span>
                            </div>
                          </div>
                          
                          <CardTitle className="text-2xl text-white font-black mb-4 tracking-wider font-orbitron group-hover:text-red-400 transition-colors duration-300">
                            {post.title}
                          </CardTitle>
                          
                          <CardDescription className="text-gray-300 leading-relaxed text-base font-sans mb-6">
                            {post.excerpt}
                          </CardDescription>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400 font-sans">{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Eye className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400 font-sans">Featured</span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="relative z-10">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-orbitron text-red-400 tracking-wider"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full border-2 border-red-500/50 text-red-400 hover:bg-red-500/20 hover:border-red-500 hover:text-white transition-all duration-300 font-orbitron tracking-wider group-hover:scale-105"
                            asChild
                          >
                            <a href={`/blog/${post.slug}`} className="flex items-center justify-center space-x-2">
                              <span>READ ARTICLE</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </Button>
                        </CardContent>
                        
                        {/* Animated progress bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500/20">
                          <motion.div
                            className="h-full bg-gradient-to-r from-red-500 to-red-600"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </Card>
                    </CardWrapper>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* All Posts Grid */}
      <div className="container px-4 sm:px-6 py-12 bg-black">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white font-orbitron tracking-tighter mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              ALL ARTICLES
            </span>
          </h2>
          
          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron text-white mb-2">No articles found</h3>
              <p className="text-gray-400 font-sans">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={item}
                  className="group"
                >
                  <CardWrapper className="h-full transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02]">
                    <Card className="border-2 border-red-500/20 bg-black/50 backdrop-blur-sm h-full relative overflow-hidden">
                      {/* Animated border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-gray-400 font-sans">
                              {format(parseISO(post.date), "MMM dd, yyyy")}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-gray-400 font-sans">{post.readTime}</span>
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl text-white font-black mb-4 tracking-wider font-orbitron group-hover:text-red-400 transition-colors duration-300">
                          {post.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-300 leading-relaxed text-sm font-sans mb-6">
                          {post.excerpt}
                        </CardDescription>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-gray-400 font-sans">{post.author}</span>
                          </div>
                          {post.featured && (
                            <div className="flex items-center space-x-2">
                              <Eye className="h-4 w-4 text-red-500" />
                              <span className="text-sm text-gray-400 font-sans">Featured</span>
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-orbitron text-red-400 tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 font-orbitron tracking-wider"
                          asChild
                        >
                          <a href={`/blog/${post.slug}`} className="flex items-center justify-center space-x-2">
                            <span>READ MORE</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        </Button>
                      </CardContent>
                      
                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500" />
                    </Card>
                  </CardWrapper>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Newsletter CTA */}
      <div className="container px-4 sm:px-6 py-20 bg-black">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-red-500/20 bg-black/50 backdrop-blur-sm px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-black text-white font-orbitron tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                STAY UPDATED
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-sans">
              Get the latest insights on multi-agent AI systems delivered to your inbox
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 font-bold text-lg px-8 py-6 border-2 border-red-500 shadow-lg shadow-red-500/25 font-orbitron"
            >
              <span>SUBSCRIBE TO NEWSLETTER</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 