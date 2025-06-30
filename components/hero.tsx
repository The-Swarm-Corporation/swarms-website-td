"use client"

import { Button } from "@/components/ui/button"
import { Terminal, ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "./animated-background"
import { TypingEffect } from "./typing-effect"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" aria-hidden="true" />
      <AnimatedBackground particleColor="rgba(239, 68, 68, 0.3)" className="opacity-30" />

      {/* Dynamic cyberpunk elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-red-600/10 blur-[100px] animate-pulse"
          style={{ top: "10%", left: "5%" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-red-500/5 blur-[80px] animate-pulse"
          style={{ top: "70%", right: "10%", animationDelay: "1s" }}
        />
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-red-500 to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container relative px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-12 py-24 md:py-36 text-center">
          <motion.div
            className="space-y-8 md:space-y-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Glitch effect title */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <h1
                id="hero-title"
                className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl relative font-orbitron"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-pulse">
                  swarms
                </span>
                <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-pulse" style={{ animationDelay: "0.1s", filter: "blur(1px)" }}>
                  swarms
                </div>
              </h1>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" />
            </motion.div>

            <motion.div
              className="mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <TypingEffect
                texts={[
                  "BUILD MULTI-AGENT STRUCTURES",
                  "DEPLOY AGENTS INTO PRODUCTION", 
                  "MONITOR & OBSERVE YOUR AGENTS",
                  "AUTOMATE YOUR ENTERPRISE"
                ]}
                typingSpeed={60}
                deletingSpeed={40}
                delayBetweenTexts={2500}
                className="text-white font-orbitron tracking-wider"
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light font-orbitron"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              The Enterprise-Grade Multi-Agent Infrastructure Stack
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:space-x-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 w-full sm:w-auto font-bold text-lg px-8 py-6 border-2 border-red-500 shadow-lg shadow-red-500/25 font-orbitron"
              asChild
            >
              <a
                href="https://github.com/kyegomez/swarms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get started with Swarms AI on GitHub"
                className="flex items-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-500 text-red-500 hover:bg-red-500/10 hover:scale-105 transform transition-all duration-300 w-full sm:w-auto font-mono text-lg px-8 py-6 bg-black/50 backdrop-blur-sm font-orbitron"
            >
              <Terminal className="mr-3 h-5 w-5" aria-hidden="true" />
              <span aria-label="Installation command">pip install -U swarms</span>
            </Button>
          </motion.div>

          {/* Cyberpunk stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
          {[
            { value: "30K+", label: "Github Stars" },
            { value: "1.9Billion+", label: "Agents Deployed" },
            { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-red-500 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-sm text-gray-400 font-orbitron tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
