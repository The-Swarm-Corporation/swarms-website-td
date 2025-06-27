import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Boxes, Brain, Database, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Ecosystem() {
  return (
    <div className="container py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Complete Ecosystem</h2>
        <p className="text-muted-foreground mx-auto max-w-[600px]">
          A comprehensive suite of tools and libraries for building sophisticated AI systems
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-red-500" />
              <CardTitle className="text-foreground">Swarms Tools</CardTitle>
            </div>
            <CardDescription>
              The ultimate package for integrating cutting-edge APIs into Python functions with seamless multi-agent
              system compatibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600/10" asChild>
              <a href="https://github.com/The-Swarm-Corporation/swarms-tools" target="_blank" rel="noopener noreferrer">
                Explore Swarms Tools
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-red-500" />
              <CardTitle className="text-foreground">Swarm Models</CardTitle>
            </div>
            <CardDescription>
              A comprehensive collection of pre-trained models and model management utilities for AI agents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600/10" asChild>
              <a href="https://github.com/The-Swarm-Corporation/swarm-models" target="_blank" rel="noopener noreferrer">
                Explore Swarm Models
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-red-500" />
              <CardTitle className="text-foreground">Swarms Memory</CardTitle>
            </div>
            <CardDescription>
              Advanced memory management system for AI agents, enabling persistent storage and retrieval of information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600/10" asChild>
              <a
                href="https://github.com/The-Swarm-Corporation/swarms-memory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Swarms Memory
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Boxes className="h-6 w-6 text-red-500" />
              <CardTitle className="text-foreground">More Libraries</CardTitle>
            </div>
            <CardDescription>
              Discover our growing ecosystem of tools and libraries designed to enhance your AI development workflow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-gradient-to-br from-red-900/20 to-background p-4">
              <p className="text-sm text-muted-foreground">
                New libraries and tools coming soon to expand the Swarms ecosystem.
              </p>
            </div>
            <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600/10" asChild>
              <a href="https://ecosystem.swarms.world" target="_blank" rel="noopener noreferrer">
                View Full Ecosystem
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
