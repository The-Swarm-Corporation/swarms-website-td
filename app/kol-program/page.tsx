"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Users,
  Zap,
  Trophy,
  Target,
  MessageSquare,
  FileText,
  Network,
  TrendingUp,
  Calendar,
  Github,
  BookOpen,
  Globe,
  MessageCircle,
} from "lucide-react"

export default function KOLProgramPage() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 8)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const responsibilities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Brand Integration",
      description:
        "Add 'Swarms' or '🔠 Swarms' to your Twitter handle/bio. Publicly associate with Swarms across all channels.",
      details: ["Twitter handle modification", "Bio integration", "Cross-platform branding"],
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Social Amplification",
      description: "Retweet official announcements, quote tweet with insights, engage in high-visibility threads.",
      details: ["Strategic retweeting", "Quote tweet amplification", "Comment farming", "Timeline engagement"],
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Telegram & Discord Activation",
      description: "Promote Swarms on your channels, host discussions, convert audience to active community members.",
      details: ["Channel promotion", "Interactive discussions", "Community conversion", "Engagement hosting"],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Engineering",
      description: "Create infographics, reels, host Twitter Spaces, develop drip content strategies.",
      details: [
        "Visual content creation",
        "Twitter Spaces hosting",
        "Drip content strategy",
        "Technical writing",
        "Ghostwriting support",
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Funnel Creation",
      description: "Convert followers to Swarms community members, promote DAO, Marketplace, API, and channels.",
      details: ["Follower conversion", "Link promotion", "Community growth", "Platform integration"],
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Influence Network Expansion",
      description: "Introduce Swarms to developers, researchers, VCs. Enable partnerships through your network.",
      details: ["Developer outreach", "VC introductions", "Partnership facilitation", "Talent curation"],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Virality Loops",
      description: "Participate in timeline domination, KOL daisy chaining, coordinated amplification efforts.",
      details: ["Timeline coordination", "KOL chain reactions", "Viral content creation", "Engagement loops"],
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Exclusive Content",
      description: "Preview and amplify exclusive content drops, act as first-wave announcer for launches.",
      details: ["Early access content", "Launch amplification", "Exclusive previews", "First-wave promotion"],
    },
  ]

  const rewardTiers = [
    {
      tier: "Tier 1",
      title: "Swarm Ambassador",
      color: "from-red-600 to-red-800",
      perks: ["Governance access", "Monthly stipend", "Early investment rounds", "Executive briefings"],
      badge: "ELITE",
    },
    {
      tier: "Tier 2",
      title: "Lead Advocate",
      color: "from-red-500 to-red-700",
      perks: ["Content support", "Token airdrops", "Private KOL calls", "Partnership opportunities"],
      badge: "ADVANCED",
    },
    {
      tier: "Tier 3",
      title: "Swarm Shiller",
      color: "from-red-400 to-red-600",
      perks: ["Recognition", "NFT badge", "Community spotlight", "Retroactive rewards"],
      badge: "ACTIVE",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/20" />
        <div className="absolute inset-0 circuit-pattern" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Arasaka-style Header */}
      <div className="relative z-10 border-b border-red-500/30">
        <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-2xl font-bold">S</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-wider">SWARMS</h1>
                <p className="text-red-400 text-sm tracking-widest">KOL PROGRAM // CLASSIFIED</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-red-400 text-sm font-mono">ACCESS LEVEL: RESTRICTED</div>
              <div className="text-xs text-gray-400 font-mono">ARASAKA PROTOCOL ACTIVE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-6">
            <Badge className="bg-red-600 text-white px-6 py-2 text-lg font-bold tracking-wider">
              STRATEGIC INITIATIVE
            </Badge>
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
            KOL PROGRAM
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A strategic initiative designed to grow, amplify, and globalize the message of Swarms through a curated
            network of high-impact Key Opinion Leaders. Join the elite network of digital influencers shaping the future
            of decentralized intelligence.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold tracking-wider cyberpunk-border hover-glow"
              onClick={() => window.open("https://cal.com/swarms", "_blank")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              BOOK STRATEGIC CALL
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Part I: Responsibilities */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center mr-4">
              <span className="text-lg font-bold">I</span>
            </div>
            <h3 className="text-4xl font-bold tracking-wider">OPERATIONAL REQUIREMENTS</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {responsibilities.map((item, index) => (
              <Card
                key={index}
                className={`bg-black/80 border-red-500/30 hover:border-red-500 transition-all duration-300 cyber-card ${
                  activeSection === index ? "ring-2 ring-red-500 neon-glow" : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-red-400">{item.icon}</div>
                    <CardTitle className="text-white text-lg font-bold tracking-wide">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Part II: Rewards */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center mr-4">
              <span className="text-lg font-bold">II</span>
            </div>
            <h3 className="text-4xl font-bold tracking-wider">COMPENSATION MATRIX</h3>
          </div>

          {/* Recurring Rewards */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold mb-6 text-red-400">RECURRING REWARDS</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-black/80 border-red-500/30 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-red-400" />
                    Monthly Tokens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Swarms Tokens based on contribution tier and verified impact metrics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/80 border-red-500/30 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="w-5 h-5 mr-2 text-red-400" />
                    USDC Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">Stable compensation for consistent and active contributors.</p>
                </CardContent>
              </Card>
              <Card className="bg-black/80 border-red-500/30 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-red-400" />
                    Milestone Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    MCS / Create Tokens for special accomplishments and referrals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tier System */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold mb-6 text-red-400">PRESTIGE HIERARCHY</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rewardTiers.map((tier, index) => (
                <Card
                  key={index}
                  className="bg-black/80 border-red-500/30 hover:border-red-500 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-gradient-to-r ${tier.color}`}>
                    {tier.badge}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{tier.title}</CardTitle>
                    <p className="text-red-400 text-sm font-mono">{tier.tier}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tier.perks.map((perk, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                          {perk}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gamification */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold mb-6 text-red-400">GAMIFICATION PROTOCOL</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-black/80 border-red-500/30 text-center p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">PoC</div>
                <div className="text-sm text-gray-300">Proof-of-Contribution Score</div>
              </Card>
              <Card className="bg-black/80 border-red-500/30 text-center p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">XP</div>
                <div className="text-sm text-gray-300">Experience Points</div>
              </Card>
              <Card className="bg-black/80 border-red-500/30 text-center p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">LB</div>
                <div className="text-sm text-gray-300">Leaderboard Ranking</div>
              </Card>
              <Card className="bg-black/80 border-red-500/30 text-center p-6">
                <div className="text-3xl font-bold text-red-400 mb-2">AD</div>
                <div className="text-sm text-gray-300">Retroactive Airdrops</div>
              </Card>
            </div>
          </div>

          {/* DAO Program Access */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold mb-6 text-red-400">DAO PROGRAM ACCESS</h4>
            <Card className="bg-black/80 border-red-500/30 hover:border-red-500 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-gradient-to-r from-red-600 to-red-800">
                EXCLUSIVE
              </div>
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Users className="w-6 h-6 mr-3 text-red-400" />
                  Swarms DAO Membership
                </CardTitle>
                <p className="text-red-400 text-sm font-mono">dao.swarms.world</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-bold text-white mb-3">Governance Rights</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Shape product vision and roadmap
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Vote on protocol proposals
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Influence strategic decisions
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Access to governance token allocation
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-3">Founder Access</h5>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Direct meetings with Kye Gomez
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Strategic advisory sessions
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Product development insights
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <div className="w-1 h-1 bg-red-500 rounded-full mr-2" />
                        Early access to announcements
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded">
                  <div className="flex items-center justify-between">
                    <div>
                      <h6 className="text-white font-bold">Current DAO Stats</h6>
                      <div className="flex space-x-6 mt-2 text-sm">
                        <span className="text-gray-300">
                          TVL: <span className="text-red-400 font-bold">17M swarms</span>
                        </span>
                        <span className="text-gray-300">
                          Members: <span className="text-red-400 font-bold">30+</span>
                        </span>
                        <span className="text-gray-300">
                          Active Proposals: <span className="text-red-400 font-bold">31</span>
                        </span>
                      </div>
                    </div>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white font-bold tracking-wider"
                      onClick={() => window.open("https://dao.swarms.world", "_blank")}
                    >
                      JOIN DAO
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Part III: Next Steps */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center mr-4">
              <span className="text-lg font-bold">III</span>
            </div>
            <h3 className="text-4xl font-bold tracking-wider">ONBOARDING SEQUENCE</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Apply", desc: "Via team or direct invite" },
              { step: "02", title: "Join", desc: "Onboarding calls & private Telegram" },
              { step: "03", title: "Receive", desc: "Media kit & assets" },
              { step: "04", title: "Begin", desc: "Content creation & amplification" },
              { step: "05", title: "Track", desc: "Metrics & claim rewards" },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-black/80 border-red-500/30 text-center p-6 hover:border-red-500 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-red-400 mb-2">{item.step}</div>
                <div className="text-lg font-bold text-white mb-2">{item.title}</div>
                <div className="text-sm text-gray-300">{item.desc}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold mb-6 text-red-400">STRATEGIC ASSETS</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/kyegomez/swarms" },
              { icon: <BookOpen className="w-5 h-5" />, label: "API Docs", url: "https://docs.swarms.world" },
              { icon: <Globe className="w-5 h-5" />, label: "Marketplace", url: "https://swarms.world" },
              { icon: <Users className="w-5 h-5" />, label: "DAO", url: "https://dao.swarms.world" },
              { icon: <Target className="w-5 h-5" />, label: "Startup Page", url: "/programs/startups" },
              { icon: <MessageSquare className="w-5 h-5" />, label: "Discord", url: "https://discord.gg/jM3Z6M9uMq" },
              { icon: <MessageCircle className="w-5 h-5" />, label: "Telegram", url: "http://t.me/swarmsgroupchat" },
            ].map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-white h-16 flex flex-col items-center justify-center"
                onClick={() => window.open(link.url, "_blank")}
              >
                {link.icon}
                <span className="text-xs mt-1">{link.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-block p-8 border border-red-500/30 bg-black/80 rounded-lg">
            <h3 className="text-3xl font-bold mb-4 text-red-400">INITIATE PROTOCOL</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Together, we build the decentralized intelligence layer. Join the swarm and become part of the elite
              network shaping the future of AI orchestration.
            </p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold tracking-wider cyberpunk-border hover-glow"
              onClick={() => window.open("https://cal.com/swarms", "_blank")}
            >
              <Calendar className="w-6 h-6 mr-3" />
              SCHEDULE BRIEFING
              <ExternalLink className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </div>
  )
}
