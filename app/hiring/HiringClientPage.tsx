"use client";

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Brain, 
  Users, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Github, 
  BookOpen,
  CheckCircle,
  Phone,
  Code,
  UserCheck,
  ArrowRight,
  Rocket,
  Award,
  Target,
  Server,
  GraduationCap,
  Network,
  Globe,
  Star,
  ChevronDown,
  Mail
} from 'lucide-react';

const HiringClientPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visionItems = [
    {
      icon: Brain,
      title: "Multi-Agent Lab",
      description: "World's first research lab focused on agent collaboration",
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Network,
      title: "Agent Networks",
      description: "Developing sophisticated communication protocols",
      gradient: "from-red-400/20 to-orange-500/20"
    },
    {
      icon: Server,
      title: "Industry Simulation",
      description: "Digital twins of entire industries through agents",
      gradient: "from-red-600/20 to-red-400/20"
    },
    {
      icon: Globe,
      title: "Civilization Scale",
      description: "Simulating complex societies and civilizations",
      gradient: "from-pink-500/20 to-red-500/20"
    }
  ];

  const qualities = [
    {
      icon: Zap,
      title: "Exceptional Drive",
      description: "Relentless pursuit of breakthrough solutions"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Published work or significant technical contributions"
    },
    {
      icon: Github,
      title: "Open Source Impact",
      description: "500+ commits demonstrating consistent quality"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of transformative implementations"
    }
  ];

  const positions = [
    {
      title: "Senior Agent Researcher",
      icon: Brain,
      type: "Research",
      location: "Palo Alto, CA",
      priority: "Critical",
      description: "Lead groundbreaking research in autonomous agent development and multi-agent coordination systems.",
      requirements: ["PhD in CS/AI/ML", "Published research", "Multi-agent systems experience"]
    },
    {
      title: "Agent Engineer",
      icon: Code,
      type: "Engineering",
      location: "Palo Alto, CA",
      priority: "Critical",
      description: "Build and optimize autonomous agents, implement advanced coordination protocols, and scale multi-agent systems.",
      requirements: ["Strong Python/TypeScript", "Distributed systems", "ML/AI experience"]
    },
    {
      title: "Rust Engineer",
      icon: Server,
      type: "Engineering",
      location: "Palo Alto, CA",
      priority: "High",
      description: "Develop high-performance, memory-safe infrastructure for agent communication and coordination systems.",
      requirements: ["Expert Rust skills", "Systems programming", "Performance optimization"]
    },
    {
      title: "DevReal Lead",
      icon: Rocket,
      type: "Engineering",
      location: "Palo Alto, CA",
      priority: "Critical",
      description: "Lead the development of DevReal platform - our revolutionary agent development and deployment infrastructure.",
      requirements: ["Full-stack expertise", "Platform architecture", "Team leadership"]
    },
    {
      title: "Infrastructure Engineer",
      icon: Server,
      type: "Engineering",
      location: "Palo Alto, CA",
      priority: "High",
      description: "Build and scale computational infrastructure powering multi-agent research and deployment.",
      requirements: ["Cloud infrastructure", "Distributed systems", "DevOps experience"]
    },
    {
      title: "Research Intern",
      icon: GraduationCap,
      type: "Internship",
      location: "Bay Area",
      priority: "Medium",
      description: "Exceptional students working on ambitious multi-agent research with senior mentorship.",
      requirements: ["Strong academic record", "Programming skills", "Research interest"]
    }
  ];

  const requirements = [
    "500+ GitHub commits with consistent contribution history",
    "PhD in CS/AI/ML or equivalent industry experience",
    "Experience with multi-agent systems or distributed computing",
    "Published research or significant open-source contributions",
    "Exceptional work ethic and collaborative mindset"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-red-900/5" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 mb-8 backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Automate the Global Economy</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-white via-red-100 to-red-300 bg-clip-text text-transparent leading-tight tracking-tight">
            Advance
            <br />
            Humanity
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto font-light">
            Join the world's first <span className="text-red-400 font-semibold">multi-agent research lab</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're building autonomous agents that collaborate to simulate entire industries and civilizations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Palo Alto, CA</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5 text-red-500" />
              <span>In-Person Collaboration</span>
            </div>
          </div>
          
          <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <a href="https://cal.com/swarms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </button>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-red-400" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-red-950/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              Our Vision
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">The Future We're Building</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Creating autonomous agents that work together to solve humanity's greatest challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionItems.map((item, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-red-500/20 rounded-2xl hover:border-red-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-6 group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              Who We Seek
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Exceptional Individuals</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We seek those who combine deep technical expertise with the drive to push boundaries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-red-950/20 to-black border border-red-500/20 rounded-2xl hover:border-red-500/40 transition-all duration-500 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                    <quality.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{quality.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{quality.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-950/5 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              Requirements
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">What It Takes</h2>
            <p className="text-xl text-gray-400">
              We maintain exceptionally high standards for complex AI research challenges
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-950/10 to-black border border-red-500/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="space-y-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg mt-1 group-hover:bg-red-500/30 transition-colors flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              Open Positions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build the future of autonomous agent technology with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-red-950/10 to-black border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden"
              >
                {/* Priority Badge */}
                <div className="absolute top-4 right-4">
                  {position.priority === "Critical" && (
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-sm font-bold animate-pulse">
                      Critical
                    </span>
                  )}
                  {position.priority === "High" && (
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full text-sm font-bold">
                      High Priority
                    </span>
                  )}
                  {position.priority === "Medium" && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-bold">
                      Medium Priority
                    </span>
                  )}
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl group-hover:bg-red-500/20 transition-colors flex-shrink-0">
                    <position.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-300 text-lg leading-relaxed">{position.description}</p>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    Key Requirements
                  </h4>
                  <div className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-end">
                  <button className="group/btn bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                    <a href="https://cal.com/swarms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-950/5 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              How to Join
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Your Path Forward</h2>
            <p className="text-xl text-gray-400">
              Our process focuses on practical demonstration over traditional interviews
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-blue-500/10 to-black border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Initial Conversation</h3>
                <p className="text-gray-400">Schedule a deep dive into your background and research interests</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105">
                <a href="https://cal.com/swarms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Book Call
                  <Phone className="w-4 h-4" />
                </a>
              </button>
            </div>
            
            <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-green-500/10 to-black border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Technical Demonstration</h3>
                <p className="text-gray-400">Complete meaningful contributions to our framework</p>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105">
                <a href="https://github.com/kyegomez/swarms" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Explore
                  <Code className="w-4 h-4" />
                </a>
              </button>
            </div>
            
            <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-purple-500/10 to-black border border-purple-500/20 rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Technical Review</h3>
                <p className="text-gray-400">Comprehensive evaluation of your contributions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-8 bg-gradient-to-br from-red-500/10 to-black border border-red-500/20 rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Welcome to the Team</h3>
                <p className="text-gray-400">Begin your journey shaping the future of AI</p>
              </div>
              <UserCheck className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-500/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Make History?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in building the infrastructure that will power the next generation of autonomous agents and multi-agent systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <a href="https://cal.com/swarms" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5" />
                </a>
              </button>
              <button className="border border-red-500/30 text-red-300 hover:bg-red-500/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
                <a href="https://docs.swarms.world" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  Explore Research
                  <ExternalLink className="w-5 h-5" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringClientPage;