"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardWrapper } from "./card-wrapper"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Mermaid from "react-mermaid2"
import { motion } from "framer-motion"

export function ArchitectureDiagrams() {
  const mermaidConfig = {
    theme: "base",
    themeVariables: {
      background: "#000000",
      primaryColor: "#ef4444",
      primaryTextColor: "#ffffff",
      primaryBorderColor: "#ef4444",
      lineColor: "#ef4444",
      secondaryColor: "#171717",
      tertiaryColor: "#262626",
    },
  }

  const diagrams = {
    sequential: `
      %%{init: ${JSON.stringify(mermaidConfig)}}%%
      graph TB
        A["Agent 1<br/>(Blog Generator)"] --> B["Agent 2<br/>(Editor)"]
        B --> C["Agent 3<br/>(Optimizer)"]
        
        classDef default fill:#000000,stroke:#ef4444,color:#ffffff,stroke-width:2px;
        classDef flow stroke:#ef4444,stroke-width:2px;
    `,
    parallel: `
      %%{init: ${JSON.stringify(mermaidConfig)}}%%
      graph TB
        D["Director Agent"] --> E["Worker 1"]
        D --> F["Worker 2"]
        D --> G["Worker 3"]
        E & F & G --> H["Aggregator"]
        
        classDef default fill:#000000,stroke:#ef4444,color:#ffffff,stroke-width:2px;
        classDef flow stroke:#ef4444,stroke-width:2px;
    `,
    mixture: `
      %%{init: ${JSON.stringify(mermaidConfig)}}%%
      graph TB
        I["Controller"] --> J["Team A"]
        I --> K["Team B"]
        
        J --> L["Agent A1"]
        J --> M["Agent A2"]
        
        K --> N["Agent B1"]
        K --> O["Agent B2"]
        
        L & M & N & O --> P["Result Aggregator"]
        
        classDef default fill:#000000,stroke:#ef4444,color:#ffffff,stroke-width:2px;
        classDef flow stroke:#ef4444,stroke-width:2px;
    `,
  }

  const examples = {
    sequential: `from swarms import Agent, SequentialWorkflow

workflow = SequentialWorkflow(
  agents=[blog_generator, editor, optimizer],
  max_loops=1
)

result = workflow.run("Write about AI trends")`,
    parallel: `from swarms import Agent, ParallelSwarm

swarm = ParallelSwarm(
  director=director_agent,
  workers=[worker1, worker2, worker3],
  aggregator=result_aggregator
)

results = swarm.run("Analyze market data")`,
    mixture: `from swarms import Agent, MixtureOfAgents

mixture = MixtureOfAgents(
  name="Cross-Functional Team",
  agents=[agent_a1, agent_a2, agent_b1, agent_b2],
  layers=2
)

result = mixture.run("Solve complex problem")`,
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
        <h2 id="architecture-title" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Architecture Overview
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px]">
          Understand how Swarms orchestrates multiple agents to solve complex problems
        </p>
      </motion.div>

      <Tabs defaultValue="sequential" className="relative">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="sequential">Sequential Flow</TabsTrigger>
          <TabsTrigger value="parallel">Parallel Processing</TabsTrigger>
          <TabsTrigger value="mixture">Agent Mixture</TabsTrigger>
        </TabsList>

        <div className="mt-8">
          {Object.entries({
            sequential: {
              title: "Sequential Workflow",
              description:
                "Agents work in a pipeline, where each agent's output becomes the input for the next agent. Perfect for tasks that require step-by-step processing.",
              docLink: "https://docs.swarms.world/en/latest/swarms/architectures/sequential.html",
            },
            parallel: {
              title: "Parallel Processing",
              description:
                "Multiple agents work simultaneously on different aspects of a task, with results combined by an aggregator. Ideal for complex tasks that can be broken down into independent subtasks.",
              docLink: "https://docs.swarms.world/en/latest/swarms/architectures/parallel.html",
            },
            mixture: {
              title: "Mixture of Agents",
              description:
                "Organize agents into teams with different specializations, working together under a controller. Perfect for complex tasks requiring different types of expertise.",
              docLink: "https://docs.swarms.world/en/latest/swarms/architectures/mixture.html",
            },
          }).map(([key, { title, description, docLink }]) => (
            <TabsContent key={key} value={key}>
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <CardWrapper className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold cyber-text">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>

                    <div className="mt-4 p-4 rounded-lg bg-black border border-red-500/20">
                      <Mermaid chart={diagrams[key]} />
                    </div>

                    <div className="mt-4">
                      <pre className="text-sm bg-black p-4 rounded-lg overflow-auto border border-red-500/20">
                        <code className="text-red-400">{examples[key]}</code>
                      </pre>
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10" asChild>
                        <a href={docLink} target="_blank" rel="noopener noreferrer">
                          Learn more in our docs
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
