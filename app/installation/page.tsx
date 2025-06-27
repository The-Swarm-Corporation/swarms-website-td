import type { Metadata } from "next"
import { InstallationClientPage } from "./InstallationClientPage"

export const metadata: Metadata = {
  title: "Installation - Swarms Framework",
  description:
    "Learn how to install the Swarms framework using pip, uv, conda, or from source. Get started with multi-agent AI orchestration in minutes.",
  keywords: [
    "swarms installation",
    "pip install swarms",
    "uv install",
    "conda install",
    "python package",
    "AI framework",
  ],
}

export default function InstallationPage() {
  return <InstallationClientPage />
}
