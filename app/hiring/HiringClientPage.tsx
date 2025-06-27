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
  Cpu,
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
} from "lucide-react"
import Link from "next/link"

export function HiringClientPage() {
  // Ensure dark theme is applied immediately
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
    document.documentElement.classList.add("dark")
  }, [])

  const roles = [
    {
      title: "Agent Researchers",
      icon: Brain,
      description:
        "We're looking for scientists and engineers passionate about building intelligent, autonomous agents. Ideal candidates have experience in building real-world agents.",
      details:
        "You'll be working closely with our core team to develop agents that learn, reason, and act in complex environments.",
      type: "Research",
      location: "Palo Alto, CA",
      commitment: "Full-time",
      priority: "High",
    },
    {
      title: "Infrastructure Engineers",
      icon: Server,
      description:
        "Help us build the backbone of cutting-edge agent research and deployment. We're hiring engineers to design and scale our distributed training, experiment tracking, and agent deployment infrastructure.",
      details:
        "Familiarity with cloud systems, GPU clusters, and high-throughput data pipelines is essential. You'll work closely with researchers to ensure fast iteration and reliability at scale.",
      type: "Engineering",
      location: "Palo Alto, CA",
      commitment: "Full-time",
      priority: "High",
    },
    {
      title: "Research Interns",
      icon: GraduationCap,
      description:
        "We're offering internship positions for Stanford students and other top-tier university affiliates in the Bay Area.",
      details:
        "Interns work directly with senior researchers on ambitious projects in areas like agent learning, multi-agent architectures, and multi-agent simulations. Expect hands-on mentorship, access to significant compute, and the opportunity to publish.",
      type: "Internship",
      location: "Stanford & Nearby",
      commitment: "Part-time/Summer",
      priority: "Medium",
    },
  ]

  const criteria = [
    {
      icon: Zap,
      title: "Hard Working",
      description: "Exceptional work ethic",
      details: "We're looking for individuals with relentless dedication to pushing boundaries",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      iconColor: "text-yellow-500",
    },
    {
      icon: BookOpen,
      title: "Research Background",
      description: "Extensive experience",
      details: "Strong academic or industry research experience in AI, ML, or related fields",
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
    },
    {
      icon: Github,
      title: "500+ GitHub Commits",
      description: "Proven contributions",
      details: "Active track record of open source development and community contributions",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
    },
    {
      icon: Trophy,
      title: "Proven Excellence",
      description: "Demonstrated results",
      details: "Track record of delivering high-quality work and driving impactful results",
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
    },
  ]

  const joinSteps = [
    {
      step: 1,
      icon: Phone,
      title: "Initial Call",
      description: "Schedule a call with our team to discuss your background and interests",
      details: "30-45 minute conversation about your experience, goals, and fit with our mission",
      action: "Book a Call",
      link: "https://cal.com/swarms",
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
      stepColor: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    },
    {
      step: 2,
      icon: Code,
      title: "Technical Assessment",
      description: "Demonstrate your skills through practical contributions to our framework",
      details: "Complete 3 high-quality pull requests on the Swarms framework to showcase your abilities",
      action: "View Repository",
      link: "https://github.com/kyegomez/swarms",
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
      stepColor: "bg-green-500/20 border-green-500/40 text-green-400",
    },
    {
      step: 3,
      icon: GitPullRequest,
      title: "Code Review",
      description: "Our team reviews your contributions for quality and innovation",
      details: "We evaluate code quality, problem-solving approach, and alignment with our standards",
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
      title: "Join Full-Time",
      description: "If your contributions meet our standards, join the team permanently",
      details: "Welcome to the world's first multi-agent research lab!",
      action: null,
      link: null,
      color: "from-red-500/10 to-pink-500/10",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
      stepColor: "bg-red-500/20 border-red-500/40 text-red-400",
    },
  ]

  const benefits = [
    {
      icon: Microscope,
      title: "World's First Multi-Agent Lab",
      description: "Join the pioneering research lab focused on multi-agent collaboration and coordination",
      color: "from-red-500/10 to-orange-500/10",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
    },
    {
      icon: Network,
      title: "Multi-Agent Systems",
      description: "Work on cutting-edge research in agent communication, coordination, and emergent behaviors",
      color: "from-blue-500/10 to-purple-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
    },
    {
      icon: Factory,
      title: "Industry Simulation",
      description: "Help simulate entire industries and economic systems using multi-agent frameworks",
      color: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
    },
    {
      icon: Globe,
      title: "Civilization-Scale Vision",
      description: "Contribute to our ultimate goal of simulating entire civilizations and complex societies",
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
    },
  ]

  const researchAreas = [
    {
      icon: Network,
      title: "Agent Coordination",
      description:
        "Developing sophisticated protocols for agents to communicate, negotiate, and collaborate effectively",
      color: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-500",
    },
    {
      icon: Factory,
      title: "Industry Modeling",
      description: "Creating digital twins of entire industries through coordinated multi-agent simulations",
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
    },
    {
      icon: Cpu,
      title: "Emergent Intelligence",
      description: "Studying how collective intelligence emerges from individual agent interactions",
      color: "from-purple-500/10 to-violet-500/10",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 lg:space-y-8">
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="border-red-500/30 text-red-400 bg-red-500/10 text-sm sm:text-base px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                We're Hiring Top Talent
              </Badge>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent leading-tight tracking-tight">
                Join Swarms
              </h1>
              <div className="max-w-5xl mx-auto space-y-4 lg:space-y-6">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                  The <span className="text-red-400 font-semibold">world's first multi-agent research lab</span> focused
                  on multi-agent collaboration
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
                  We're hiring exceptional researchers, infrastructure engineers, and innovators to help accelerate
                  humanity's transition to a fully autonomous and agentic world economy
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span>Palo Alto, California</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-gray-600 rounded-full" />
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span>Office-Based Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-red-950/5 via-black to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Our Vision
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
              Our Ultimate Vision
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We're building the future of multi-agent systems with an ambitious goal: to simulate entire industries and
              civilizations through coordinated autonomous agents
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12 lg:mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${benefit.color} backdrop-blur-sm border ${benefit.borderColor} hover:border-opacity-70 transition-all duration-500 text-center group hover:scale-105 shadow-xl hover:shadow-2xl h-full`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                  <div
                    className={`p-4 sm:p-5 lg:p-6 rounded-xl bg-gradient-to-br ${benefit.color} border ${benefit.borderColor} w-fit mx-auto mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <benefit.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${benefit.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 group-hover:text-gray-100 transition-colors leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Focus */}
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">Why This Matters</h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Multi-agent collaboration is the key to unlocking truly autonomous systems that can work together to solve
              complex, real-world problems at unprecedented scale
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${area.color} backdrop-blur-sm border ${area.borderColor} hover:border-opacity-70 transition-all duration-500 text-center group hover:scale-105 shadow-xl hover:shadow-2xl`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-8 sm:p-10 lg:p-12">
                  <div
                    className={`p-5 lg:p-6 rounded-xl bg-gradient-to-br ${area.color} border ${area.borderColor} w-fit mx-auto mb-8 lg:mb-10 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <area.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${area.iconColor}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 group-hover:text-gray-100 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-6">
              <Star className="w-4 h-4 mr-2" />
              What We're Looking For
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
              Ideal Candidates
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We seek exceptional individuals who combine technical excellence with relentless drive
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((criterion, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${criterion.color} backdrop-blur-sm border ${criterion.borderColor} hover:border-opacity-70 transition-all duration-500 text-center group hover:scale-105 shadow-xl hover:shadow-2xl h-full`}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                  <div
                    className={`p-4 sm:p-5 lg:p-6 rounded-xl bg-gradient-to-br ${criterion.color} border ${criterion.borderColor} w-fit mx-auto mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <criterion.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${criterion.iconColor}`} />
                  </div>
                  <div className="flex-1 space-y-3 lg:space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-gray-100 transition-colors">
                      {criterion.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium">{criterion.description}</p>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">{criterion.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-red-950/5 via-black to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Requirements
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
              Minimum Requirements
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These are the baseline qualifications we expect from all candidates
            </p>
          </div>

          <Card
            className="bg-gradient-to-br from-red-950/10 via-black/40 to-red-950/10 border-red-500/30 backdrop-blur-sm shadow-2xl max-w-5xl mx-auto"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <CardContent className="p-8 sm:p-10 lg:p-12">
              <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
                {[
                  {
                    title: "Exceptional Work Ethic",
                    description:
                      "Demonstrated ability to work intensively on challenging problems with sustained focus and dedication",
                  },
                  {
                    title: "Research Excellence",
                    description:
                      "Strong background in AI/ML research with publications, significant projects, or industry experience",
                  },
                  {
                    title: "Open Source Contributions",
                    description:
                      "Minimum 500+ commits on GitHub demonstrating consistent, high-quality development work",
                  },
                  {
                    title: "Technical Excellence",
                    description:
                      "Proven track record of delivering high-quality, maintainable, and impactful code solutions",
                  },
                ].map((req, index) => (
                  <div key={index} className="flex items-start gap-4 lg:gap-6 group">
                    <div className="p-3 lg:p-4 rounded-lg bg-red-500/20 border border-red-500/30 mt-1 group-hover:bg-red-500/30 transition-colors flex-shrink-0">
                      <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3 lg:mb-4 group-hover:text-red-100 transition-colors">
                        {req.title}
                      </h4>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-6">
              <Target className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
              How to Join Our Team
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our hiring process is designed to identify exceptional talent through practical demonstration of skills
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 lg:gap-8">
              {joinSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Card */}
                  <Card
                    className={`bg-gradient-to-br ${step.color} backdrop-blur-sm border ${step.borderColor} hover:border-opacity-70 transition-all duration-500 group-hover:scale-[1.02] shadow-xl hover:shadow-2xl`}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                  >
                    <CardContent className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                        {/* Step Number and Icon */}
                        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
                          <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full ${step.stepColor} flex items-center justify-center font-bold text-xl sm:text-2xl lg:text-3xl border-2 transition-all duration-300 group-hover:scale-110`}
                          >
                            {step.step}
                          </div>
                          <div
                            className={`p-3 sm:p-4 lg:p-5 rounded-xl bg-gradient-to-br ${step.color} border ${step.borderColor} transition-all duration-300 group-hover:scale-110 shadow-lg`}
                          >
                            <step.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${step.iconColor}`} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 space-y-4 lg:space-y-6">
                          <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4 group-hover:text-gray-100 transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                              {step.description}
                            </p>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                              {step.details}
                            </p>
                          </div>

                          {/* Action Button */}
                          {step.action && step.link && (
                            <div className="pt-2">
                              <Button
                                asChild
                                size="lg"
                                className={`${step.iconColor === "text-blue-500" ? "bg-blue-600 hover:bg-blue-700" : step.iconColor === "text-green-500" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-base sm:text-lg transform hover:scale-105`}
                              >
                                <a
                                  href={step.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3"
                                >
                                  {step.action}
                                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Arrow Connector */}
                  {index < joinSteps.length - 1 && (
                    <div className="flex justify-center my-6 lg:my-8">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110">
                        <ArrowDown className="w-5 h-5 lg:w-6 lg:h-6 text-red-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 lg:mt-16">
              <Card
                className="bg-gradient-to-br from-red-950/20 via-black/40 to-red-950/20 border-red-500/30 backdrop-blur-sm"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
                    Ready to Get Started?
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-10 leading-relaxed max-w-3xl mx-auto">
                    The best way to show us your skills is through code. We believe in practical assessment over
                    traditional interviews.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center max-w-lg mx-auto">
                    <Button
                      asChild
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-lg transform hover:scale-105"
                    >
                      <a
                        href="https://cal.com/swarms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        Start with a Call
                        <Phone className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-red-500/30 text-red-300 hover:bg-red-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg hover:scale-105"
                    >
                      <a
                        href="https://github.com/kyegomez/swarms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3"
                      >
                        Explore Framework
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-red-950/5 via-black to-red-950/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-500/10 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Open Roles
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
              Open Positions
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our mission to build the future of autonomous agent technology
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10 max-w-6xl mx-auto mb-12 lg:mb-16">
            {roles.map((role, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-black/60 via-red-950/20 to-black/60 backdrop-blur-sm border-red-900/30 hover:border-red-500/50 transition-all duration-500 group hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <CardHeader className="pb-6 lg:pb-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
                    <div className="flex items-start gap-4 lg:gap-6 flex-1">
                      <div className="p-4 lg:p-5 rounded-xl bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-all duration-300 flex-shrink-0 shadow-lg">
                        <role.icon className="w-8 h-8 lg:w-10 lg:h-10 text-red-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-4">
                          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-red-100 transition-colors">
                            {role.title}
                          </CardTitle>
                          {role.priority === "High" && (
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-sm px-3 py-1">
                              High Priority
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                          <Badge
                            variant="secondary"
                            className="bg-red-500/20 text-red-300 border-red-500/30 text-sm px-3 py-1"
                          >
                            {role.type}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm lg:text-base text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {role.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm lg:text-base text-gray-400">
                            <Calendar className="w-4 h-4" />
                            {role.commitment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6 pt-0">
                  <CardDescription className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                    {role.description}
                  </CardDescription>
                  <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">{role.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Roles CTA */}
          <Card
            className="bg-gradient-to-br from-red-950/20 via-black/40 to-red-950/20 border-red-500/30 backdrop-blur-sm shadow-2xl"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">...and More</h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-10 leading-relaxed max-w-4xl mx-auto">
                We're always open to world-class talent across all levels and disciplines. Our office is located in Palo
                Alto, and all roles are office-based to foster maximum collaboration in our research environment.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg text-lg transform hover:scale-105"
              >
                <a
                  href="https://cal.com/swarms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  Book a call with us to learn more
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <Card
            className="bg-gradient-to-br from-red-950/20 via-black/40 to-red-950/20 border-red-500/30 backdrop-blur-sm shadow-2xl overflow-hidden"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />
            <CardContent className="relative p-10 sm:p-12 lg:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 lg:mb-10">
                Ready to Shape the Future?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join us in building the infrastructure and intelligence that will power the next generation of
                autonomous agents and multi-agent systems that can simulate and optimize entire civilizations
              </p>
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center max-w-2xl mx-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 hover:shadow-lg text-xl transform hover:scale-105 flex-1 sm:flex-none"
                >
                  <a
                    href="https://cal.com/swarms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    Schedule an Interview
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-red-500/30 text-red-300 hover:bg-red-500/10 px-10 py-5 rounded-xl font-bold transition-all duration-300 text-xl hover:scale-105 flex-1 sm:flex-none"
                >
                  <Link href="https://docs.swarms.world" className="flex items-center justify-center gap-3">
                    Learn More About Swarms
                    <ExternalLink className="w-6 h-6" />
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
