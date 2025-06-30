"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Database } from "lucide-react"
import { CardWrapper } from "./card-wrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export function Cloud() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-12"
      >
        <h2 id="cloud-title" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Swarms Cloud API
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px]">Deploy and manage your agent swarms in the cloud with enterprise-grade infrastructure</p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-3 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          {
            icon: Zap,
            title: "High-Performance",
            description: "Process thousands of agent interactions with optimized infrastructure",
          },
          {
            icon: Shield,
            title: "Enterprise Security",
            description: "SOC 2 compliant with end-to-end encryption and access controls",
          },
          {
            icon: Database,
            title: "Managed Infrastructure",
            description: "Zero maintenance with automatic scaling and high availability",
          },
        ].map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <CardWrapper>
                <Card className="border-0 bg-transparent h-full">
                  <CardHeader>
                    <div className="relative mb-2">
                      <Icon className="h-10 w-10 text-red-500 relative z-10 animate-pulse-glow" />
                      <div className="absolute -inset-2 bg-red-500/10 blur-lg rounded-full" />
                    </div>
                    <CardTitle className="text-xl cyber-text">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground/80">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </CardWrapper>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Start Example</CardTitle>
            <CardDescription>Create and run a financial analysis swarm with just a few lines of code</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="python" className="w-full">
              <TabsList>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              </TabsList>
              <TabsContent value="python">
                <pre className="rounded-lg bg-black p-4 overflow-x-auto">
                  <code className="text-sm text-red-400">
                    {`import requests

API_KEY = "your-api-key"
BASE_URL = "https://swarms-api-285321057562.us-east1.run.app"

headers = {"x-api-key": API_KEY, "Content-Type": "application/json"}

payload = {
  "name": "Financial Analysis Swarm",
  "agents": [
      {
          "agent_name": "Market Analyst",
          "description": "Analyzes market trends",
          "system_prompt": "You are a financial analyst expert.",
          "model_name": "gpt-4o",
          "role": "worker"
      },
      {
          "agent_name": "Economic Forecaster",
          "description": "Predicts economic trends",
          "system_prompt": "You are an expert in economic forecasting.",
          "model_name": "gpt-4o",
          "role": "worker"
      }
  ],
  "swarm_type": "HiearchicalSwarm",
  "task": "What are the best ETFs for AI and tech?"
}

response = requests.post(
  f"{BASE_URL}/v1/swarm/completions",
  headers=headers,
  json=payload
)

print(response.json())`}
                  </code>
                </pre>
              </TabsContent>
              <TabsContent value="javascript">
                <pre className="rounded-lg bg-black p-4 overflow-x-auto">
                  <code className="text-sm text-red-400">
                    {`const API_KEY = 'your-api-key';
const BASE_URL = 'https://swarms-api-285321057562.us-east1.run.app';

const headers = {
'x-api-key': API_KEY,
'Content-Type': 'application/json'
};

const payload = {
name: 'Financial Analysis Swarm',
agents: [
  {
    agent_name: 'Market Analyst',
    description: 'Analyzes market trends',
    system_prompt: 'You are a financial analyst expert.',
    model_name: 'gpt-4o',
    role: 'worker'
  },
  {
    agent_name: 'Economic Forecaster',
    description: 'Predicts economic trends',
    system_prompt: 'You are an expert in economic forecasting.',
    model_name: 'gpt-4o',
    role: 'worker'
  }
],
swarm_type: 'HiearchicalSwarm',
task: 'What are the best ETFs for AI and tech?'
};

fetch(\`\${BASE_URL}/v1/swarm/completions\`, {
method: 'POST',
headers,
body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => console.log(data));`}
                  </code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

      <div className="mt-12 text-center">
        <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
          <a href="https://cloud.swarms.ai" target="_blank" rel="noopener noreferrer">
            Try Swarms Cloud
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}
