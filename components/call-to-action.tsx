"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypingEffect } from "./typing-effect"

export function CallToAction() {
  return (
    <div className="container py-24">
      <motion.div
        className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 px-6 py-24 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Glowing orb effect with animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            className="w-[600px] h-[600px] rounded-full bg-red-500/10 blur-[128px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to{" "}
            <TypingEffect
              texts={[
                "Transform Your AI",
                "Scale Agent Systems",
                "Solve Complex Problems",
                "Build the Future",
              ]}
              className="text-red-500"
            />
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start building enterprise-grade AI systems with Swarms today
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a
                href="https://docs.swarms.world/en/latest/swarms/install/install/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600/10 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://docs.swarms.world" target="_blank" rel="noopener noreferrer">
                View Documentation
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
