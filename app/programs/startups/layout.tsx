import type React from "react"
import type { Metadata } from "next"
import { siteConfig } from "../../metadata"

export const metadata: Metadata = {
  title: {
    default: "Startup Program | Swarms AI",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Accelerate your AI startup with technical support, go-to-market resources, and up to $10,000 in credits.",
}

export default function StartupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
