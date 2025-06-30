"use client"

import { motion } from "framer-motion"
import { CardWrapper } from "./card-wrapper"
import { AlertTriangle, BrainCircuit, Clock, Target, Lock, Coins, Database, Zap } from "lucide-react"

export function Problem() {
  return (
    <div className="container py-16 md:py-24 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-8 md:mb-12"
      >
        <h2 id="problem-title" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          The Enterprise AI Problem
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px]">Individual AI agents are insufficient for enterprise-grade applications</p>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          {
            icon: BrainCircuit,
            title: "Limited Context Window",
            description:
              "Single agents have restricted context windows, limiting their ability to process comprehensive information and maintain conversation history.",
            metric: "8K-32K",
            metricLabel: "token limit",
          },
          {
            icon: Target,
            title: "Low Accuracy",
            description:
              "Individual agents often produce inconsistent results and struggle with complex reasoning tasks that require multiple perspectives.",
            metric: "67%",
            metricLabel: "average accuracy",
          },
          {
            icon: Clock,
            title: "Single-Task Execution",
            description:
              "Traditional agents can only handle one task at a time, creating bottlenecks in complex workflows that require parallel processing.",
            metric: "1x",
            metricLabel: "processing capacity",
          },
          {
            icon: Lock,
            title: "Security Vulnerabilities",
            description:
              "Single agents lack cross-verification mechanisms, making them more susceptible to prompt injections and adversarial attacks.",
            metric: "High",
            metricLabel: "risk exposure",
          },
          {
            icon: Coins,
            title: "Cost Inefficiency",
            description:
              "Relying on high-end models for all tasks is expensive and wasteful when many subtasks could be handled by smaller, specialized models.",
            metric: "3-5x",
            metricLabel: "higher costs",
          },
          {
            icon: Database,
            title: "Knowledge Limitations",
            description:
              "Single agents are constrained by their training data and struggle to incorporate specialized domain expertise across multiple fields.",
            metric: "Limited",
            metricLabel: "domain coverage",
          },
          {
            icon: Zap,
            title: "Scalability Constraints",
            description:
              "Individual agents face performance degradation when handling large-scale tasks or high request volumes in production environments.",
            metric: "Poor",
            metricLabel: "horizontal scaling",
          },
          {
            icon: AlertTriangle,
            title: "Reliability Issues",
            description:
              "Single points of failure in individual agents lead to complete system outages rather than graceful degradation when problems occur.",
            metric: "99.0%",
            metricLabel: "uptime (at best)",
          },
        ].map((problem, index) => {
          const Icon = problem.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <CardWrapper className="h-full">
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="mb-3 sm:mb-4 flex items-center gap-2">
                    <div className="relative">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
                      <div className="absolute -inset-1 bg-red-500/10 blur-sm rounded-full -z-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{problem.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    {problem.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                      <span className="text-xs sm:text-sm text-muted-foreground">Enterprise Risk</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-red-500">{problem.metric}</div>
                      <div className="text-xs text-muted-foreground">{problem.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
