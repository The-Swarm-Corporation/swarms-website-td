"use client"

import { Features } from "@/components/features"
import { FeaturesGrid } from "@/components/features-grid"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Stats } from "@/components/stats"
import { Community } from "@/components/community"
import { CallToAction } from "@/components/call-to-action"
import { Ecosystem } from "@/components/ecosystem"
import { UseCases } from "@/components/use-cases"
import { ArchitectureDiagrams } from "@/components/architecture-diagrams"
import { Cloud } from "@/components/cloud"
import { siteConfig } from "./metadata"
import { ScrollingTicker } from "@/components/scrolling-ticker"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"

// Import the useLanguage hook
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage() // Add this line to use the translation function

  // Structured multilingual slogans for the ticker
  // Following the pattern: English -> Chinese -> Japanese
  const tickerAnnouncements = [
    // Slogan 1: Transform your Organization with Agents
    "Transform your Organization with Agents",
    "通过智能体转变您的组织",
    "エージェントで組織を変革する",

    // Slogan 2: Automate Operations with Swarms
    "Automate Operations with Swarms",
    "使用智能体群自动化运营",
    "スウォームで業務を自動化",

    // Slogan 3: Scale AI Systems Beyond Single Agents
    "Scale AI Systems Beyond Single Agents",
    "将人工智能系统扩展到单个智能体之外",
    "単一のエージェントを超えてAIシステムを拡張",

    // Slogan 4: Build Enterprise-Grade AI Solutions
    "Build Enterprise-Grade AI Solutions",
    "构建企业级人工智能解决方案",
    "エンタープライズグレードのAIソリューションを構築",

    // Slogan 5: Orchestrate Thousands of Agents in Harmony
    "Orchestrate Thousands of Agents in Harmony",
    "协调数千个智能体和谐运行",
    "数千のエージェントを調和して編成",

    // Product announcement
    "New Release: Swarms v2.0 is now available",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollingTicker
        announcements={tickerAnnouncements}
        className="py-2 bg-black/30 border-y border-red-600/20 backdrop-blur-sm"
      />
      <main id="main-content" role="main">
        <div className="sr-only">
          <h1>Swarms AI - Enterprise Multi-Agent Framework</h1>
          <p>Build, deploy, and scale autonomous AI agent swarms with unprecedented control and efficiency</p>
        </div>

        <Hero />
        <article>
          <Stats aria-label="Platform Statistics" />
          <section aria-labelledby="problem-title" role="region">
            <Problem />
          </section>
          <section aria-labelledby="solution-title" role="region">
            <Solution />
          </section>
          <section aria-labelledby="features-title" role="region">
            <Features />
          </section>
          <section aria-labelledby="use-cases-title" role="region">
            <UseCases />
          </section>
          <section aria-labelledby="features-grid-title" role="region">
            <FeaturesGrid />
          </section>
          <section aria-labelledby="architecture-title" role="region">
            <ArchitectureDiagrams />
          </section>
          <section aria-labelledby="cloud-title" role="region">
            <Cloud />
          </section>
          <section aria-labelledby="ecosystem-title" role="region">
            <Ecosystem />
          </section>
          <section aria-labelledby="community-title" role="region">
            <Community />
          </section>
        </article>
        <CallToAction />
      </main>
      <footer className="py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t("built_by")}{" "}
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Swarms AI
            </a>
            . {t("source_code")}{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
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
