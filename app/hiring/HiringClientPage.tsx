"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MapPin,
  Calendar,
  ExternalLink,
  Brain,
  Server,
  GraduationCap,
  Building,
  Globe,
  ArrowRight,
  Microscope,
  Network,
  Factory,
  Github,
  BookOpen,
  Zap,
  CheckCircle,
  Phone,
  Code,
  GitPullRequest,
  UserCheck,
  ArrowDown,
  Star,
  Target,
  Trophy,
  Rocket,
  Eye,
  Award,
} from "lucide-react"
import Link from "next/link"

export function HiringClientPage() {
  // Ensure dark theme is applied immediately
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
    document.documentElement.classList.add("dark")
  }, [])

  const visionItems = [
    {
      icon: Microscope,
      title: "World's First Multi-Agent Lab",
      description: "Pioneering research lab focused on multi-agent collaboration and coordination",
      color: "from-red-500/10 to-orange-500/10",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
    },
    {
      icon: Network,
      title: "Agent Communication",
      description: "Developing sophisticated protocols for agents to communicate and collaborate",
      color: "from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
    },
    {
      icon: Factory,
      title: "Industry Simulation",
      description: "Creating digital twins of entire industries through multi-agent frameworks",
      color: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
    },
    {
      icon: Globe,
      title: "Civilization-Scale Vision",
      description: "Ultimate goal of simulating entire civilizations and complex societies",
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
    },
  ]

  const idealCandidate = [
    {
      icon: Zap,
      title: "Exceptional Work Ethic",
      description: "Relentless dedication",
      details: "Individuals who thrive on challenging problems and push boundaries consistently",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      iconColor: "text-yellow-500",
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Deep technical expertise",
      details: "Strong background in AI/ML research with publications or significant projects",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
    },
    {
      icon: Github,
      title: "Open Source Leader",
      description: "Active contributor",
      details: "500+ GitHub commits demonstrating consistent, high-quality development",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
    },
    {
      icon: Trophy,
      title: "Proven Impact",
      description: "Results-driven",
      details: "Track record of delivering transformative solutions and driving results",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
    },
  ]

  const requirements = [
    {
      title: "Technical Excellence",
      items: [
        "500+ GitHub commits with consistent contribution history",
        "Strong proficiency in Python, distributed systems, or ML frameworks",
        "Experience with multi-agent systems, reinforcement learning, or related fields",
        "Proven ability to work with large-scale systems and complex architectures",
      ],
    },
    {
      title: "Research Background",
      items: [
        "PhD in Computer Science, AI/ML, or equivalent industry experience",
        "Published research papers or significant open-source contributions",
        "Deep understanding of agent-based modeling and simulation",
        "Experience with cutting-edge AI/ML research and implementation",
      ],
    },
    {
      title: "Professional Qualities",
      items: [
        "Exceptional work ethic with ability to work intensively on complex problems",
        "Strong communication skills and ability to collaborate in a research environment",
        "Self-motivated with ability to drive projects from conception to completion",
        "Passion for pushing the boundaries of what's possible with AI",
      ],
    },
  ]

  const joinSteps = [
    {
      step: 1,
      icon: Phone,
      title: "Initial Conversation",
      description: "Schedule a call to discuss your background, interests, and alignment with our mission",
      details: "45-60 minute deep dive into your experience, research interests, and career goals",
      action: "Book Your Call",
      link: "https://cal.com/swarms",
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
      stepColor: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    },
    {
      step: 2,
      icon: Code,
      title: "Technical Demonstration",
      description: "Showcase your expertise through meaningful contributions to our framework",
      details:
        "Complete 3 substantial pull requests that demonstrate your technical skills and problem-solving approach",
      action: "Explore Framework",
      link: "https://github.com/kyegomez/swarms",
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
      stepColor: "bg-green-500/20 border-green-500/40 text-green-400",
    },
    {
      step: 3,
      icon: GitPullRequest,
      title: "Technical Review",
      description: "Our research team evaluates your contributions for technical excellence and innovation",
      details: "Comprehensive assessment of code quality, architectural thinking, and research potential",
      action: null,
      link: null,
      color: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
      stepColor: "bg-purple-500/20 border-purple-500/40 text-purple-400",
    },
    {
      step: 4,
      icon: UserCheck,
      title: "Welcome to the Team",
      description: "Join the world's first multi-agent research lab and help shape the future",
      details: "Begin your journey in advancing multi-agent collaboration and autonomous systems",
      action: null,
      link: null,
      color: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
      stepColor: "bg-red-500/20 border-red-500/40 text-red-400",
    },
  ]

  const roles = [
    {
      title: "Senior Agent Researchers",
      icon: Brain,
      description:
        "Lead groundbreaking research in autonomous agent development, multi-agent coordination, and emergent intelligence systems.",
      details:
        "Drive research initiatives in agent learning, reasoning, and collaboration. Work directly with our founding team to publish cutting-edge research and build the future of multi-agent systems.",
      type: "Research",
      location: "Palo Alto, CA",
      commitment: "Full-time",
      priority: "Critical",
      salary: "Competitive + Equity",
    },
    {
      title: "Infrastructure Engineers",
      icon: Server,
      description:
        "Build and scale the computational infrastructure that powers our multi-agent research and deployment systems.",
      details:
        "Design distributed training systems, experiment tracking platforms, and deployment infrastructure. Work with cutting-edge GPU clusters and high-throughput data pipelines.",
      type: "Engineering",
      location: "Palo Alto, CA",
      commitment: "Full-time",
      priority: "Critical",
      salary: "Competitive + Equity",
    },
    {
      title: "Research Interns",
      icon: GraduationCap,
      description:
        "Exceptional students from Stanford and top-tier universities working on ambitious multi-agent research projects.",
      details:
        "Direct mentorship from senior researchers, access to significant compute resources, and opportunities to publish in top-tier venues. Focus areas include agent learning and multi-agent simulations.",
      type: "Internship",
      location: "Stanford & Bay Area",
      commitment: "Summer/Part-time",
      priority: "High",
      salary: "Competitive Stipend",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8 lg:space-y-12">
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="border-red-500/30 text-red-400 bg-red-500/10 text-base sm:text-lg px-6 py-3 rounded-full backdrop-blur-sm font-medium"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Join the Future of AI Research
              </Badge>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent leading-tight tracking-tight">
                Shape Tomorrow
              </h1>
              <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 leading-relaxed font-light">
                  Join the <span className="text-red-400 font-semibold">world's first multi-agent research lab</span>
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-5xl mx-auto">
                  We're building the future where autonomous agents collaborate to simulate entire industries and
                  civilizations. Be part of the team that's defining the next era of artificial intelligence.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base sm:text-lg text-gray-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Palo Alto, California</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-gray-600 rounded-full" />
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-red-500" />
                <span>In-Person Collaboration</span>
              </div>
            </div>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg text-xl transform hover:scale-105"
              >
                <a
                  href="https://cal.com/swarms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  Start Your Journey
                  <ArrowRight className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 bg-gradient-to-r from-red-950/5 via-black to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-8">
              <Eye className="w-5 h-5 mr-2" />
              Our Vision
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
              The Future We're Building
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-6xl mx-auto leading-relaxed font-light">
              We're creating a world where autonomous agents work together to solve humanity's greatest challenges— from
              simulating entire industries to modeling complex civilizations
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16 lg:mb-20">
            {visionItems.map((item, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${item.color} backdrop-blur-sm border ${item.borderColor} hover:border-opacity-70 transition-all duration-500 text-center group hover:scale-105 shadow-xl hover:shadow-2xl h-full`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-8 sm:p-10 lg:p-12 flex flex-col h-full">
                  <div
                    className={`p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} w-fit mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <item.icon className={`w-12 h-12 lg:w-16 lg:h-16 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 group-hover:text-gray-100 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card
              className="bg-gradient-to-br from-red-950/20 via-black/60 to-red-950/20 border-red-500/30 backdrop-blur-sm shadow-2xl max-w-5xl mx-auto"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            >
              <CardContent className="p-10 sm:p-12 lg:p-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-10">
                  From Multi-Agent Systems to Civilization Simulation
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Our ultimate goal is ambitious: to create autonomous agent systems capable of simulating and
                  optimizing entire civilizations. This isn't just research—it's the foundation for humanity's next
                  evolutionary leap.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal Candidate Section */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-8">
              <Star className="w-5 h-5 mr-2" />
              Ideal Candidate
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
              Who We're Looking For
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              We seek exceptional individuals who combine deep technical expertise with the drive to push the boundaries
              of what's possible
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {idealCandidate.map((candidate, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${candidate.color} backdrop-blur-sm border ${candidate.borderColor} hover:border-opacity-70 transition-all duration-500 text-center group hover:scale-105 shadow-xl hover:shadow-2xl h-full`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-8 sm:p-10 lg:p-12 flex flex-col h-full">
                  <div
                    className={`p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${candidate.color} border ${candidate.borderColor} w-fit mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <candidate.icon className={`w-12 h-12 lg:w-16 lg:h-16 ${candidate.iconColor}`} />
                  </div>
                  <div className="flex-1 space-y-4 lg:space-y-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-gray-100 transition-colors">
                      {candidate.title}
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium">{candidate.description}</p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">{candidate.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 bg-gradient-to-r from-red-950/5 via-black to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-8">
              <Award className="w-5 h-5 mr-2" />
              Requirements
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
              What It Takes
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              We maintain exceptionally high standards because we're tackling some of the most complex challenges in AI
              research
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-red-950/10 via-black/60 to-red-950/10 border-red-500/30 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-500 h-full"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-8 sm:p-10 lg:p-12">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-10 text-center">
                    {req.title}
                  </h3>
                  <div className="space-y-6 lg:space-y-8">
                    {req.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4 lg:gap-6 group">
                        <div className="p-2 lg:p-3 rounded-lg bg-red-500/20 border border-red-500/30 mt-1 group-hover:bg-red-500/30 transition-colors flex-shrink-0">
                          <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-red-400" />
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-8">
              <Target className="w-5 h-5 mr-2" />
              Join Our Team
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
              Your Path to Impact
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Our hiring process focuses on practical demonstration of skills rather than traditional interviews
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 lg:gap-12">
              {joinSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <Card
                    className={`bg-gradient-to-br ${step.color} backdrop-blur-sm border ${step.borderColor} hover:border-opacity-70 transition-all duration-500 group-hover:scale-[1.02] shadow-xl hover:shadow-2xl`}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                  >
                    <CardContent className="p-8 sm:p-10 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                        <div className="flex items-center gap-6 lg:gap-8 flex-shrink-0">
                          <div
                            className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full ${step.stepColor} flex items-center justify-center font-bold text-2xl sm:text-3xl lg:text-4xl border-2 transition-all duration-300 group-hover:scale-110`}
                          >
                            {step.step}
                          </div>
                          <div
                            className={`p-4 sm:p-5 lg:p-6 rounded-2xl bg-gradient-to-br ${step.color} border ${step.borderColor} transition-all duration-300 group-hover:scale-110 shadow-lg`}
                          >
                            <step.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${step.iconColor}`} />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 space-y-6 lg:space-y-8">
                          <div>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 group-hover:text-gray-100 transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                              {step.description}
                            </p>
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed">
                              {step.details}
                            </p>
                          </div>

                          {step.action && step.link && (
                            <div className="pt-4">
                              <Button
                                asChild
                                size="lg"
                                className={`${step.iconColor === "text-blue-500" ? "bg-blue-600 hover:bg-blue-700" : step.iconColor === "text-green-500" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg text-xl transform hover:scale-105`}
                              >
                                <a
                                  href={step.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-4"
                                >
                                  {step.action}
                                  <ExternalLink className="w-6 h-6" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {index < joinSteps.length - 1 && (
                    <div className="flex justify-center my-8 lg:my-12">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110">
                        <ArrowDown className="w-6 h-6 lg:w-8 lg:h-8 text-red-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 bg-gradient-to-r from-red-950/5 via-black to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-8">
              <Users className="w-5 h-5 mr-2" />
              Open Positions
            </Badge>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-12">
              Available Roles
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Join our mission to build the future of autonomous agent technology
            </p>
          </div>

          <div className="space-y-10 lg:space-y-12 max-w-6xl mx-auto mb-16 lg:mb-20">
            {roles.map((role, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-black/80 via-red-950/20 to-black/80 backdrop-blur-sm border-red-900/30 hover:border-red-500/50 transition-all duration-500 group hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardHeader className="pb-8 lg:pb-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                    <div className="flex items-start gap-6 lg:gap-8 flex-1">
                      <div className="p-5 lg:p-6 rounded-2xl bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-all duration-300 flex-shrink-0 shadow-lg">
                        <role.icon className="w-10 h-10 lg:w-12 lg:h-12 text-red-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-6">
                          <CardTitle className="text-3xl sm:text-4xl lg:text-5xl text-white group-hover:text-red-100 transition-colors">
                            {role.title}
                          </CardTitle>
                          {role.priority === "Critical" && (
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-base px-4 py-2">
                              Critical Hire
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                          <Badge
                            variant="secondary"
                            className="bg-red-500/20 text-red-300 border-red-500/30 text-base px-4 py-2"
                          >
                            {role.type}
                          </Badge>
                          <div className="flex items-center gap-2 text-base lg:text-lg text-gray-400">
                            <MapPin className="w-5 h-5" />
                            {role.location}
                          </div>
                          <div className="flex items-center gap-2 text-base lg:text-lg text-gray-400">
                            <Calendar className="w-5 h-5" />
                            {role.commitment}
                          </div>
                          <div className="text-base lg:text-lg text-green-400 font-medium">{role.salary}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 lg:space-y-8 pt-0">
                  <CardDescription className="text-gray-300 text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                    {role.description}
                  </CardDescription>
                  <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl leading-relaxed">{role.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card
              className="bg-gradient-to-br from-red-950/20 via-black/60 to-red-950/20 border-red-500/30 backdrop-blur-sm shadow-2xl max-w-5xl mx-auto"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            >
              <CardContent className="p-10 sm:p-12 lg:p-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-10">
                  Don't See Your Role?
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto">
                  We're always open to exceptional talent across all disciplines. If you're passionate about multi-agent
                  systems and want to help build the future, we want to hear from you.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg text-xl transform hover:scale-105"
                >
                  <a
                    href="https://cal.com/swarms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    Let's Talk
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 lg:py-28 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <Card
            className="bg-gradient-to-br from-red-950/20 via-black/60 to-red-950/20 border-red-500/30 backdrop-blur-sm shadow-2xl overflow-hidden"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
            <CardContent className="relative p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 lg:mb-12">
                Ready to Make History?
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed font-light">
                Join us in building the infrastructure and intelligence that will power the next generation of
                autonomous agents and multi-agent systems. Help us simulate and optimize entire civilizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 justify-center max-w-3xl mx-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-xl font-bold transition-all duration-300 hover:shadow-lg text-2xl transform hover:scale-105 flex-1 sm:flex-none"
                >
                  <a
                    href="https://cal.com/swarms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4"
                  >
                    Begin Your Journey
                    <ArrowRight className="w-7 h-7" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-red-500/30 text-red-300 hover:bg-red-500/10 px-12 py-6 rounded-xl font-bold transition-all duration-300 text-2xl hover:scale-105 flex-1 sm:flex-none"
                >
                  <Link href="https://docs.swarms.world" className="flex items-center justify-center gap-4">
                    Explore Our Research
                    <ExternalLink className="w-7 h-7" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
