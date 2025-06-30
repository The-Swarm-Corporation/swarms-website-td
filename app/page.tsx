"use client"

import { Features } from "@/components/features"
import { FeaturesGrid } from "@/components/features-grid"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { CallToAction } from "@/components/call-to-action"
import { ScrollingTicker } from "@/components/scrolling-ticker"
import { Marketplace } from "@/components/marketplace"
import { Community } from "@/components/community"

export default function Home() {
  // Updated ticker announcements with the new messaging
  const tickerAnnouncements = [
    // Core benefits
    "BUILD MULTI-AGENT STRUCTURES",
    "构建多智能体结构",
    "マルチエージェント構造を構築",

    // Deployment
    "DEPLOY AGENTS INTO PRODUCTION",
    "将智能体部署到生产环境",
    "エージェントを本番環境にデプロイ",

    // Monitoring
    "MONITOR & OBSERVE YOUR AGENTS",
    "监控和观察您的智能体",
    "エージェントを監視・観察",

    // Automation
    "AUTOMATE YOUR ENTERPRISE",
    "自动化您的企业",
    "エンタープライズを自動化",

    // Product announcement
    "NEW: Swarms v2.0 - The First Multi-Agent Framework in Rust",
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ScrollingTicker
        announcements={tickerAnnouncements}
        className="py-3 bg-black/80 border-y border-red-600/30 backdrop-blur-sm"
      />
      <main id="main-content" role="main">
        <div className="sr-only">
          <h1>Swarms AI - Enterprise Multi-Agent Framework</h1>
          <p>Build, deploy, and scale autonomous AI agent swarms with unprecedented control and efficiency</p>
        </div>

        <Hero />
        <article>
          <section aria-labelledby="benefits-title" role="region">
            <Features />
          </section>
          <section aria-labelledby="swarms-stack-title" role="region">
            <FeaturesGrid />
          </section>
          {/* <section aria-labelledby="marketplace-title" role="region">
            <Marketplace />
          </section> */}
          {/* <section aria-labelledby="community-title" role="region">
            <Community />
          </section> */}
        </article>
        <CallToAction />
      </main>
      <footer className="py-8 md:py-12 bg-black border-t border-red-500/20">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            Built by{" "}
            <a
              href="https://swarms.ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
            >
              Swarms AI
            </a>
            . Source code available on{" "}
            <a
              href="https://github.com/kyegomez/swarms"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
