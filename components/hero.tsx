"use client"

import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "./animated-background"
import { TypingEffect } from "./typing-effect"

// Import the useLanguage hook
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage() // Add this line to use the translation function

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced cyberpunk grid background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 cyber-gradient" aria-hidden="true" />
      <AnimatedBackground particleColor="rgba(239, 68, 68, 0.5)" className="opacity-40" />

      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-red-500/10 blur-[80px] animate-float"
          style={{ top: "15%", left: "10%" }}
        />
        <div
          className="absolute w-[250px] h-[250px] rounded-full bg-red-500/5 blur-[60px] animate-float"
          style={{ top: "60%", right: "5%", animationDelay: "2s" }}
        />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 py-20 md:py-32 text-center">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              id="hero-title"
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Swarms</span>
            </motion.h1>

            <motion.div
              className="mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <TypingEffect
                texts={[t("enterprise_multi_agent"), t("orchestrate_agents"), t("scale_systems"), t("build_swarms")]}
                typingSpeed={50}
                deletingSpeed={30}
                delayBetweenTexts={2000}
                className="text-foreground"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transform transition-all duration-200 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/kyegomez/swarms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get started with Swarms AI on GitHub"
              >
                {t("get_started")}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600/10 hover:scale-105 transform transition-all duration-200 w-full sm:w-auto"
            >
              <Terminal className="mr-2 h-4 w-4" aria-hidden="true" />
              <span aria-label="Installation command">pip install -U swarms</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
