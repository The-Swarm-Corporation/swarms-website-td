import HiringClientPage from "./HiringClientPage"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - The Swarms Corporation",
  description:
    "Join The Swarms Corporation and help accelerate humanity's transition to a fully autonomous and agentic world economy. We're hiring researchers, engineers, and interns.",
  keywords: [
    "careers",
    "jobs",
    "hiring",
    "AI research",
    "agent research",
    "infrastructure engineering",
    "internships",
    "Stanford",
    "Palo Alto",
  ],
  openGraph: {
    title: "Careers - The Swarms Corporation",
    description:
      "Join The Swarms Corporation and help accelerate humanity's transition to a fully autonomous and agentic world economy.",
    type: "website",
  },
}

export default function HiringPage() {
  return (
    <>
      <Navigation />
      <HiringClientPage />
    </>
  )
}
