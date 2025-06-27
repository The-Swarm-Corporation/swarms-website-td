"use client"

import { useEffect, useState } from "react"
import { Star, Download, Users } from "lucide-react"
import CountUp from "react-countup"
import { motion } from "framer-motion"

export function Stats() {
  const [stats, setStats] = useState({
    stars: 0,
    downloads: 1700000,
    communityMembers: 16000,
  })

  useEffect(() => {
    // Fetch GitHub stats
    fetch("https://api.github.com/repos/kyegomez/swarms")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          stars: data.stargazers_count || 2800,
          downloads: 1700000,
          communityMembers: 16000,
        })
      })
      .catch(() => {
        // Fallback values if API fails
        setStats({
          stars: 2800,
          downloads: 1700000,
          communityMembers: 16000,
        })
      })
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`
    }
    return num.toString()
  }

  return (
    <div className="container py-12">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 p-8 backdrop-blur-sm"
        >
          <div className="absolute -right-2 -top-2">
            <Star className="h-16 w-16 text-red-500/10" />
          </div>
          <div className="relative">
            <h3 className="text-sm font-medium text-muted-foreground">GitHub Stars</h3>
            <div className="text-2xl font-bold text-red-500">
              <CountUp end={stats.stars} formattingFn={formatNumber} duration={2.5} />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 p-8 backdrop-blur-sm"
        >
          <div className="absolute -right-2 -top-2">
            <Download className="h-16 w-16 text-red-500/10" />
          </div>
          <div className="relative">
            <h3 className="text-sm font-medium text-muted-foreground">Downloads</h3>
            <div className="text-2xl font-bold text-red-500">
              <CountUp end={stats.downloads} formattingFn={formatNumber} duration={2.5} />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="relative overflow-hidden rounded-lg border border-red-900/20 bg-background/30 p-8 backdrop-blur-sm"
        >
          <div className="absolute -right-2 -top-2">
            <Users className="h-16 w-16 text-red-500/10" />
          </div>
          <div className="relative">
            <h3 className="text-sm font-medium text-muted-foreground">Community Members</h3>
            <div className="text-2xl font-bold text-red-500">
              <CountUp end={stats.communityMembers} formattingFn={formatNumber} duration={2.5} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
