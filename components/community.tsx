import { Button } from "@/components/ui/button"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export function Community() {
  return (
    <div className="container py-24">
      <div className="rounded-lg border border-red-900/20 bg-background/30 p-8 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
          <p className="mt-4 text-muted-foreground">
            Connect with other developers, share your projects, and help shape the future of AI agent orchestration
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90" asChild>
              <a href="https://twitter.com/swarms_corp" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Follow on Twitter
              </a>
            </Button>
            <Button className="bg-[#5865F2] hover:bg-[#5865F2]/90" asChild>
              <a href="https://discord.gg/jM3Z6M9uMq" target="_blank" rel="noopener noreferrer">
                <Discord className="mr-2 h-4 w-4" />
                Join Discord
              </a>
            </Button>
            <Button className="bg-[#24292E] hover:bg-[#24292E]/90" asChild>
              <a href="https://github.com/kyegomez/swarms" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
