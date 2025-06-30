"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  BotIcon as Robot,
  Link,
  TrendingUp,
  Wrench,
  Shield,
  BarChart3,
  PlugIcon as Plugin,
  Boxes,
  Target,
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Building2,
    title: "Enterprise Architecture",
    description: "Production-ready infrastructure built for reliability",
    items: ["Production-Ready Infrastructure", "High Reliability Systems", "Modular Design", "Comprehensive Logging"],
    benefits: ["Reduced downtime", "Easier maintenance", "Better debugging", "Enhanced monitoring"],
  },
  {
    icon: Robot,
    title: "Agent Orchestration",
    description: "Advanced agent management and workflow systems",
    items: [
      "Hierarchical Swarms",
      "Parallel Processing",
      "Sequential Workflows",
      "Graph-based Workflows",
      "Dynamic Agent Rearrangement",
    ],
    benefits: ["Complex task handling", "Improved performance", "Flexible workflows", "Optimized execution"],
  },
  {
    icon: Link,
    title: "Integration Capabilities",
    description: "Extensive integration options and customization",
    items: ["Multi-Model Support", "Custom Agent Creation", "Extensive Tool Library", "Multiple Memory Systems"],
    benefits: ["Provider flexibility", "Custom solutions", "Extended functionality", "Enhanced memory management"],
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Built to scale with your needs",
    items: ["Concurrent Processing", "Resource Management", "Load Balancing", "Horizontal Scaling"],
    benefits: ["Higher throughput", "Efficient resource use", "Better performance", "Easy scaling"],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description: "Comprehensive toolkit for rapid development",
    items: ["Simple API", "Extensive Documentation", "Active Community", "CLI Tools"],
    benefits: ["Faster development", "Easy learning curve", "Community support", "Quick deployment"],
  },
  {
    icon: Shield,
    title: "Security Features",
    description: "Enterprise-grade security and monitoring",
    items: ["Error Handling", "Rate Limiting", "Monitoring Integration", "Audit Logging"],
    benefits: ["Improved reliability", "API protection", "Better monitoring", "Enhanced tracking"],
  },
  {
    icon: BarChart3,
    title: "Advanced Features",
    description: "Cutting-edge AI capabilities",
    items: ["SpreadsheetSwarm", "Group Chat", "Agent Registry", "Mixture of Agents"],
    benefits: ["Mass agent management", "Collaborative AI", "Centralized control", "Complex solutions"],
  },
  {
    icon: Plugin,
    title: "Provider Support",
    description: "Multiple provider integrations",
    items: ["OpenAI", "Anthropic", "ChromaDB", "Custom Providers"],
    benefits: ["Provider flexibility", "Storage options", "Custom integration", "Vendor independence"],
  },
  {
    icon: Boxes,
    title: "Production Features",
    description: "Built for production environments",
    items: ["Automatic Retries", "Async Support", "Environment Management", "Type Safety"],
    benefits: ["Better reliability", "Improved performance", "Easy configuration", "Safer code"],
  },
  {
    icon: Target,
    title: "Use Case Support",
    description: "Ready for any industry or use case",
    items: ["Task-Specific Agents", "Custom Workflows", "Industry Solutions", "Extensible Framework"],
    benefits: ["Quick deployment", "Flexible solutions", "Industry readiness", "Easy customization"],
  },
]

export function FeaturesGrid() {
  return (
    <div className="container py-16 md:py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-8 md:mb-12"
      >
        <h2 id="features-grid-title" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Key Capabilities
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px]">
          Swarms provides everything you need to build, deploy, and scale autonomous AI agent systems
        </p>
      </motion.div>
      <motion.div
        className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Card className="backdrop-blur-sm bg-background/30 border-red-900/20 hover:border-red-500/50 transition-colors hover:shadow-lg hover:shadow-red-500/10">
                <CardHeader className="space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-red-500 shrink-0" />
                    <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm md:text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-xs md:text-sm">Features</h4>
                      <ul className="text-xs md:text-sm text-muted-foreground space-y-2">
                        {feature.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2 mt-1.5 shrink-0" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-xs md:text-sm">Benefits</h4>
                      <ul className="text-xs md:text-sm text-muted-foreground space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-2 mt-1.5 shrink-0" />
                            <span className="leading-tight">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
