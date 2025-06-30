import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "./metadata"
import "./globals.css"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { translations } from "@/translations"
import { Footer } from "@/components/footer"
import { NewsletterPopupProvider } from "@/components/newsletter-popup-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.company.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Swarms AI - Enterprise Multi-Agent Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@swarms_corp",
    site: "@swarms_corp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider translations={translations}>
            <NewsletterPopupProvider>
              {children}
              <Footer />
            </NewsletterPopupProvider>
          </LanguageProvider>
        </ThemeProvider>

        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}/#organization`,
                  name: siteConfig.company.name,
                  url: siteConfig.url,
                  description: siteConfig.company.description,
                  foundingDate: siteConfig.company.foundingDate,
                  founder: {
                    "@type": "Person",
                    name: siteConfig.company.founders[0].name,
                    url: siteConfig.company.founders[0].url,
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: siteConfig.company.address.addressCountry,
                  },
                  sameAs: [siteConfig.links.github, "https://twitter.com/swarms_corp", "https://discord.gg/jM3Z6M9uMq"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  publisher: {
                    "@id": `${siteConfig.url}/#organization`,
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: siteConfig.name,
                  description: siteConfig.description,
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Any",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  author: {
                    "@id": `${siteConfig.url}/#organization`,
                  },
                  keywords: siteConfig.keywords.join(", "),
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
