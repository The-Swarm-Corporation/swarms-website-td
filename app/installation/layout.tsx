import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation - Swarms Framework",
  description:
    "Complete installation guide for the Swarms framework. Learn how to install using pip, uv, conda, or from source.",
}

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
