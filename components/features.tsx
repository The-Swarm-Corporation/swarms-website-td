"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Network, Cloud, Zap } from "lucide-react"
import { CardWrapper } from "./card-wrapper"
import { motion } from "framer-motion"

export function Features() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container py-16 md:py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-8 md:mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Enterprise Features
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px]">
          Built for scale, security, and reliability in production environments
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {[
          {
            icon: Settings,
            title: "Agent Configuration",
            description: "Customize your agents with specialized roles, knowledge, and capabilities",
          },
          {
            icon: Network,
            title: "Multi-Agent Structures",
            description: "Build hierarchical, sequential, or parallel agent collaboration systems",
          },
          {
            icon: Cloud,
            title: "Swarm Deployment API",
            description: "Deploy and manage swarms at scale through our enterprise-ready API",
          },
          {
            icon: Zap,
            title: "And More",
            description: "Advanced memory systems, tool integration, and custom workflows",
          },
        ].map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div key={index} variants={item}>
              <CardWrapper className="h-full transition-all duration-300 hover:translate-y-[-8px]">
                <Card className="border-0 bg-transparent h-full">
                  <CardHeader>
                    <div className="relative">
                      <Icon className="h-10 w-10 text-red-500 relative z-10 animate-pulse-glow" />
                      <div className="absolute -inset-2 bg-red-500/10 blur-lg rounded-full" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground/80">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </CardWrapper>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
