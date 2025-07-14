"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CardWrapper } from "./card-wrapper"
import { motion } from "framer-motion"
import { BookOpen, Code, FileText, ExternalLink, ArrowRight } from "lucide-react"

export function Cookbook() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  const cookbookResources = [
    {
      icon: BookOpen,
      title: "Examples Overview",
      description: "Complete examples directory with comprehensive guides and tutorials",
      link: "https://docs.swarms.world/en/latest/examples/",
      gradient: "from-red-600 to-red-700",
      badge: "GUIDES"
    },
    {
      icon: Code,
      title: "Cookbook Index",
      description: "Curated example collection with best practices and patterns",
      link: "https://docs.swarms.world/en/latest/examples/cookbook_index/",
      gradient: "from-red-500 to-red-600",
      badge: "COOKBOOK"
    },
    {
      icon: FileText,
      title: "Paper Implementations",
      description: "Research paper implementations and academic examples",
      link: "https://docs.swarms.world/en/latest/examples/paper_implementations/",
      gradient: "from-red-700 to-red-800",
      badge: "RESEARCH"
    },
    {
      icon: ExternalLink,
      title: "Templates & Applications",
      description: "Reusable templates and production-ready applications",
      link: "https://docs.swarms.world/en/latest/examples/templates/",
      gradient: "from-red-600 to-red-700",
      badge: "TEMPLATES"
    }
  ]

  return (
    <div className="container py-20 md:py-32 px-4 sm:px-6 bg-black relative">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-400 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-red-600 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center space-y-6 mb-16 md:mb-20 relative z-10"
      >
        <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl text-white font-orbitron">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
            Cookbook & Templates
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto" />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light font-orbitron">
          Get started quickly with curated examples, templates, and implementation guides
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cookbookResources.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div key={index} variants={item}>
              <CardWrapper className="h-full transition-all duration-500 hover:translate-y-[-8px] hover:scale-[1.02] group">
                <Card className="border-2 border-red-500/20 bg-black/50 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-red-500/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full">
                        <span className="text-xs font-orbitron text-red-400 tracking-wider">{item.badge}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-2xl text-white font-black mb-2 tracking-wider font-orbitron">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed text-base font-orbitron">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="p-6 pt-0 relative z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 font-orbitron tracking-wider"
                      asChild
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <span>EXPLORE</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500" />
                </Card>
              </CardWrapper>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 font-bold text-lg px-8 py-6 border-2 border-red-500 shadow-lg shadow-red-500/25 font-orbitron"
          asChild
        >
          <a
            href="https://docs.swarms.world/en/latest/examples/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3"
          >
            <span>BROWSE ALL EXAMPLES</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
} 