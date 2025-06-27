import type React from "react"
import type { Metadata } from "next"
import { siteConfig } from "../metadata"

export const metadata: Metadata = {
  title: {
    default: "Research Programs | Swarms AI",
    template: `%s | ${siteConfig.name}`,
  },
  description: "Accelerate cutting-edge multi-agent research with limitless swarms credits and comprehensive support.",
}

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
