import type React from "react"
import type { Metadata } from "next"
import HiringClient from "./HiringClient"

export const metadata: Metadata = {
  title: "Careers - Join Swarms | World's First Multi-Agent Research Lab",
  description:
    "Join the world's first multi-agent research lab. We're hiring researchers, engineers, and innovators to build the future of autonomous agent technology.",
  keywords: ["careers", "jobs", "hiring", "multi-agent", "AI research", "machine learning", "autonomous agents"],
  openGraph: {
    title: "Careers - Join Swarms",
    description: "Join the world's first multi-agent research lab focused on multi-agent collaboration.",
    type: "website",
  },
}

export default function HiringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <HiringClient>{children}</HiringClient>
}
