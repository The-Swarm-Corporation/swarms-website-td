import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <div className="container py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Developers</h2>
        <p className="text-muted-foreground mx-auto max-w-[600px]">See what developers are saying about Swarms</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="backdrop-blur-sm bg-background/30 border-red-900/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: "Sarah Chen",
    title: "AI Research Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Swarms has revolutionized how we build and deploy AI agents. The architecture is incredibly flexible and powerful.",
  },
  {
    name: "Michael Rodriguez",
    title: "Senior Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The ability to orchestrate multiple agents seamlessly has dramatically improved our development workflow.",
  },
  {
    name: "Emily Taylor",
    title: "Tech Lead",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "We've reduced development time by 60% since implementing Swarms in our AI pipeline. It's a game-changer.",
  },
]
