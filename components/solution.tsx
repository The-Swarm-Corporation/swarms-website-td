"use client"

import { motion } from "framer-motion"
import { CardWrapper } from "./card-wrapper"
import { CheckCircle2, BrainCircuit, Clock, Target, ArrowRight, Lock, Coins, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import the useLanguage hook
import { useLanguage } from "@/contexts/language-context"

export function Solution() {
  const { t } = useLanguage() // Add this line to use the translation function

  return (
    <div className="container py-16 md:py-24 px-4 sm:px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px] animate-float"
          style={{ top: "10%", right: "5%" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-red-500/5 blur-[80px] animate-float"
          style={{ bottom: "10%", left: "5%", animationDelay: "2s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-8 md:mb-12 relative z-10"
      >
        <h2 id="solution-title" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          {t("swarms_solution")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px]">{t("multi_agent_improves")}</p>
      </motion.div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10">
        {[
          {
            icon: BrainCircuit,
            title: "Expanded Context Window",
            description:
              "Swarms distribute information across multiple agents, effectively expanding the total context window and enabling processing of massive documents and complex data.",
            metric: "100K+",
            metricLabel: "effective tokens",
            improvement: "10x increase",
          },
          {
            icon: Target,
            title: "Enhanced Accuracy",
            description:
              "Multiple specialized agents collaborate to verify each other's work, dramatically improving accuracy and reliability for mission-critical tasks.",
            metric: "94%",
            metricLabel: "average accuracy",
            improvement: "40% improvement",
          },
          {
            icon: Clock,
            title: "Parallel Task Execution",
            description:
              "Swarms process multiple tasks simultaneously, enabling complex workflows and dramatically reducing completion time for sophisticated operations.",
            metric: "8x",
            metricLabel: "processing capacity",
            improvement: "800% faster",
          },
          {
            icon: Lock,
            title: "Enhanced Security",
            description:
              "Multi-agent systems implement cross-verification and validation protocols, significantly reducing vulnerability to prompt injections and adversarial attacks.",
            metric: "Low",
            metricLabel: "risk exposure",
            improvement: "75% risk reduction",
          },
          {
            icon: Coins,
            title: "Cost Optimization",
            description:
              "Swarms intelligently allocate the right model for each subtask, using expensive models only when necessary and cheaper models for simpler tasks.",
            metric: "60%",
            metricLabel: "cost reduction",
            improvement: "Significant savings",
          },
          {
            icon: Database,
            title: "Comprehensive Knowledge",
            description:
              "Specialized agents combine their expertise, enabling systems that integrate knowledge across multiple domains and disciplines simultaneously.",
            metric: "Extensive",
            metricLabel: "domain coverage",
            improvement: "5x knowledge depth",
          },
          {
            icon: Zap,
            title: "Enterprise Scalability",
            description:
              "Distributed agent architecture enables horizontal scaling to handle massive workloads and high-volume requests in production environments.",
            metric: "Excellent",
            metricLabel: "horizontal scaling",
            improvement: "Linear scaling",
          },
          {
            icon: CheckCircle2,
            title: "High Reliability",
            description:
              "Redundant agent design ensures graceful degradation rather than complete failure, maintaining operation even when individual components experience issues.",
            metric: "99.99%",
            metricLabel: "uptime",
            improvement: "10x reliability",
          },
        ].map((solution, index) => {
          const Icon = solution.icon
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
                    <h3 className="text-lg sm:text-xl font-bold">{solution.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow">
                    {solution.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      <span className="text-xs sm:text-sm text-green-500">{solution.improvement}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-red-500">{solution.metric}</div>
                      <div className="text-xs text-muted-foreground">{solution.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </CardWrapper>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 md:mt-12 text-center relative z-10"
      >
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          asChild
        >
          <a href="https://docs.swarms.world" target="_blank" rel="noopener noreferrer">
            {t("learn_how_swarms_work")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
