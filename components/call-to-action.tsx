"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Github } from "lucide-react"
import { motion } from "framer-motion"
import { TypingEffect } from "./typing-effect"

export function CallToAction() {
  return (
    <div className="container py-24 md:py-32 px-4 sm:px-6 bg-black relative">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-red-500/5 blur-[150px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        <div className="absolute top-1/4 left-1/4 w-1 h-16 bg-gradient-to-b from-red-500 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-12 bg-gradient-to-b from-red-500 to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div
        className="relative overflow-hidden rounded-2xl border-2 border-red-500/20 bg-black/50 backdrop-blur-sm px-8 py-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h2
            className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-white">READY TO </span>
            <TypingEffect
              texts={[
                "TRANSFORM YOUR ENTERPRISE",
                "BUILD AGENT SWARMS", 
                "AUTOMATE EVERYTHING",
                "SCALE BEYOND LIMITS"
              ]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 font-black font-orbitron"
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenTexts={3000}
            />
          </motion.h2>
          
          <motion.p
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed font-orbitron"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of developers building the future of AI with the most advanced multi-agent framework ever created
          </motion.p>
          
          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transform transition-all duration-300 font-bold text-lg px-8 py-6 border-2 border-red-500 shadow-lg shadow-red-500/25 font-orbitron"
              asChild
            >
              <a
                href="https://github.com/kyegomez/swarms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <Zap className="h-5 w-5" />
                <span>GET STARTED NOW</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-500 hover:scale-105 transform transition-all duration-300 font-orbitron text-lg px-8 py-6 bg-black/50 backdrop-blur-sm"
              asChild
            >
              <a 
                href="https://docs.swarms.world" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <Github className="h-5 w-5" />
                <span>VIEW DOCUMENTATION</span>
              </a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { value: "30K+", label: "Github Stars" },
              { value: "1.9Billion+", label: "Agents Deployed" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-red-500 mb-2 font-orbitron">{stat.value}</div>
                <div className="text-sm text-gray-400 font-orbitron tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
