"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  HeartPulse,
  LineChart,
  Megaphone,
  ShieldCheck,
  Truck,
  GraduationCap,
  Factory,
  Globe,
  Briefcase,
} from "lucide-react"
import { motion } from "framer-motion"

// Import the useLanguage hook
import { useLanguage } from "@/contexts/language-context"

const useCases = [
  {
    icon: LineChart,
    title: "Finance",
    description: "Transform financial operations with AI",
    applications: [
      "Automated trading strategies",
      "Risk assessment and management",
      "Fraud detection systems",
      "Portfolio optimization",
      "Market sentiment analysis",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    description: "Revolutionize insurance processes",
    applications: [
      "Claims processing automation",
      "Risk modeling and pricing",
      "Policy recommendation",
      "Fraud detection",
      "Customer service automation",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Enhance patient care with AI",
    applications: [
      "Medical diagnosis assistance",
      "Treatment planning",
      "Patient data analysis",
      "Drug discovery",
      "Healthcare workflow optimization",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Optimize marketing strategies",
    applications: [
      "Content generation",
      "Campaign optimization",
      "Customer segmentation",
      "Market trend analysis",
      "Personalized recommendations",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Transform property management",
    applications: [
      "Property valuation",
      "Market analysis",
      "Lead qualification",
      "Document processing",
      "Investment recommendations",
    ],
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Streamline supply chain operations",
    applications: [
      "Route optimization",
      "Inventory management",
      "Demand forecasting",
      "Fleet management",
      "Delivery scheduling",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Enhance learning experiences",
    applications: [
      "Personalized learning paths",
      "Content generation",
      "Student performance analysis",
      "Automated grading",
      "Course recommendations",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production processes",
    applications: [
      "Predictive maintenance",
      "Quality control",
      "Supply chain optimization",
      "Production scheduling",
      "Resource allocation",
    ],
  },
  {
    icon: Globe,
    title: "Environmental",
    description: "Support sustainability efforts",
    applications: [
      "Climate modeling",
      "Resource optimization",
      "Environmental monitoring",
      "Impact assessment",
      "Sustainability planning",
    ],
  },
  {
    icon: Briefcase,
    title: "Legal",
    description: "Streamline legal processes",
    applications: ["Document analysis", "Case research", "Contract review", "Legal research", "Compliance monitoring"],
  },
]

export function UseCases() {
  const { t } = useLanguage() // Add this line to use the translation function

  return (
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-8 md:mb-12"
      >
        <h2
          id="use-cases-title"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter px-4 text-foreground"
        >
          {t("industry_use_cases")}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-[800px] text-sm md:text-base px-4">
          {t("discover_how_swarms")}
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {useCases.map((useCase, index) => {
          const Icon = useCase.icon
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Card className="backdrop-blur-sm bg-background/30 border-red-900/20 hover:border-red-500/50 transition-colors group">
                <CardHeader className="space-y-1">
                  <div className="flex items-center gap-2 group-hover:text-red-500 transition-colors">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    <CardTitle className="text-base md:text-lg">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm md:text-base">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm md:text-base">
                    {useCase.applications.map((application, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mr-2 mt-1.5 shrink-0" />
                        <span className="text-muted-foreground">{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
