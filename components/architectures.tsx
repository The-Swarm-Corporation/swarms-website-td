import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Architectures() {
  return (
    <div className="container py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Swarm Architectures</h2>
        <p className="text-muted-foreground mx-auto max-w-[600px]">
          Choose from multiple swarm architectures to build sophisticated AI systems
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <CardTitle className="text-foreground">Sequential Workflow</CardTitle>
            <CardDescription>
              Chain multiple agents together where output from one becomes input for another
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-red-900/20 to-background p-6">
              <pre className="text-xs text-red-400">
                <code>{`workflow = SequentialWorkflow(
  agents=[agent1, agent2],
  max_loops=1
)`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <CardTitle className="text-foreground">Agent Rearrange</CardTitle>
            <CardDescription>Dynamically rearrange agents in parallel or sequential configurations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-red-900/20 to-background p-6">
              <pre className="text-xs text-red-400">
                <code>{`system = AgentRearrange(
  agents=[director, worker],
  flow="Director -> Worker"
)`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
        <Card className="backdrop-blur-sm bg-background/30 border-red-900/20">
          <CardHeader>
            <CardTitle className="text-foreground">Mixture of Agents</CardTitle>
            <CardDescription>Combine multiple agents working in parallel with result aggregation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square rounded-lg bg-gradient-to-br from-red-900/20 to-background p-6">
              <pre className="text-xs text-red-400">
                <code>{`swarm = MixtureOfAgents(
  name="Mixed Swarm",
  agents=agents,
  layers=3
)`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
