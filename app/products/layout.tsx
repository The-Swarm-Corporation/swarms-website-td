import type React from "react"
import type { Metadata } from "next"
import { siteConfig } from "../metadata"

export const metadata: Metadata = {
  title: {
    default: "Products | Swarms AI",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Explore the complete suite of Swarms AI products and SDKs for building enterprise-grade multi-agent systems.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
