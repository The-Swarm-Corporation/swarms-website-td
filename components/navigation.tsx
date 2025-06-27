"use client"

import * as React from "react"
import Link from "next/link"
import {
  MoonIcon,
  SunIcon,
  Menu,
  ChevronDown,
  Twitter,
  DiscIcon as Discord,
  Github,
  Calendar,
  BookOpen,
  Phone,
  FileText,
  Cloud,
  GraduationCap,
  Users,
  Sparkles,
  DollarSign,
  Award,
  Code,
  Rocket,
  Package,
  Activity,
  Download,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import the LanguageSwitcher and useLanguage hook
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

// Import the EasterNotification component at the top with other imports
import { EasterNotification } from "@/components/easter-notification"

export function Navigation() {
  const { setTheme, theme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const { t } = useLanguage() // Add this line to use the translation function
  const [activeTab, setActiveTab] = React.useState("ecosystem")

  const NavLink = ({
    href,
    children,
    className = "",
    external = false,
  }: {
    href: string
    children: React.ReactNode
    className?: string
    external?: boolean
  }) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-all hover:text-red-500 hover:shadow-red-500/50 hover:text-shadow-glow ${className}`}
      onClick={() => setIsOpen(false)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  )

  const SocialButton = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <Button
      variant="ghost"
      size="icon"
      className="hidden md:inline-flex hover:bg-red-500/10 hover:text-red-500"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon className="h-5 w-5" />
      </a>
    </Button>
  )

  // Custom menu item with enhanced hover effects
  const FuturisticMenuItem = ({
    icon: Icon,
    href,
    children,
    isNew = false,
  }: { icon: any; href: string; children: React.ReactNode; isNew?: boolean }) => (
    <DropdownMenuItem asChild className="p-0 focus:bg-transparent focus:text-foreground">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer items-center w-full px-2 py-1.5 rounded-md transition-all duration-200 hover:bg-red-500/10 hover:backdrop-blur-sm group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="mr-2 h-8 w-8 flex items-center justify-center rounded-md bg-background/50 border border-red-500/20 group-hover:border-red-500/40 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.3)] transition-all duration-300">
          <Icon className="h-4 w-4 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium group-hover:text-red-500 transition-colors duration-300">
            {children}
          </span>
        </div>
        {isNew && <span className="ml-2 text-xs px-1.5 py-0.5 bg-red-500/20 text-red-500 rounded-full">New</span>}
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="h-3 w-3 text-red-500" />
        </div>
      </a>
    </DropdownMenuItem>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-500/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <EasterNotification />
      <div className="container flex h-14 items-center">
        <div className="mr-6 flex">
          <Link href="/" className="flex items-center group">
            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="https://raw.githubusercontent.com/kyegomez/swarms/1899c807eb3874e095b677fbd6b9c877e7746918/swarms_logo_svg.svg"
                alt="Swarms Logo"
                width={32}
                height={32}
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:space-x-6">
          <NavLink href="https://docs.swarms.world" external>
            {t("docs")}
          </NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-all hover:text-red-500">
              {t("products")}
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[240px] backdrop-blur-md bg-background/95 border border-red-500/30"
            >
              <DropdownMenuItem asChild>
                <Link href="/products" className="flex cursor-pointer items-center">
                  <Package className="mr-2 h-4 w-4 text-red-500" />
                  Products Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://github.com/kyegomez/swarms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center"
                >
                  <Github className="mr-2 h-4 w-4 text-red-500" />
                  Swarms Python
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://docs.swarms.world/en/latest/swarms_cloud/swarms_api/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center"
                >
                  <Code className="mr-2 h-4 w-4 text-red-500" />
                  Swarms API
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://github.com/The-Swarm-Corporation/swarms-rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center"
                >
                  <Rocket className="mr-2 h-4 w-4 text-red-500" />
                  Swarms RS
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://swarms.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center"
                >
                  <Sparkles className="mr-2 h-4 w-4 text-red-500" />
                  Swarms Marketplace
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-all hover:text-red-500">
              {t("programs")}
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[200px] backdrop-blur-md bg-background/95 border border-red-500/30"
            >
              <DropdownMenuItem asChild>
                <Link href="/programs" className="flex cursor-pointer items-center">
                  <Award className="mr-2 h-4 w-4 text-red-500" />
                  Research Program
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://www.swarms.ai/programs/startups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center"
                >
                  <Rocket className="mr-2 h-4 w-4 text-red-500" />
                  Startup Program
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="https://grants.swarms.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center"
                >
                  <DollarSign className="mr-2 h-4 w-4 text-red-500" />
                  Grants Program
                  <span className="ml-2 text-xs px-1.5 py-0.5 bg-red-500/20 text-red-500 rounded-full">New</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-all hover:text-red-500 group">
              <span className="group-hover:text-shadow-glow">{t("resources")}</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[320px] backdrop-blur-md bg-background/80 border border-red-500/30 p-3 shadow-lg shadow-red-500/5 rounded-lg overflow-hidden"
              sideOffset={8}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-background/0 to-background/0 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>

              <Tabs defaultValue="ecosystem" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-3 bg-background/30 backdrop-blur-md border border-red-500/20 p-1 rounded-lg">
                  {[
                    { id: "ecosystem", label: "Ecosystem" },
                    { id: "community", label: "Community" },
                    { id: "tutorials", label: "Tutorials" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`
                        data-[state=active]:bg-red-500/10 
                        data-[state=active]:text-red-500 
                        data-[state=active]:shadow-[0_0_10px_rgba(239,68,68,0.2)] 
                        data-[state=active]:border-red-500/30
                        data-[state=active]:backdrop-blur-md
                        transition-all duration-300 ease-in-out
                        border border-transparent
                        rounded-md
                        relative
                        overflow-hidden
                        text-xs
                      `}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabsContent value="ecosystem" className="space-y-1 mt-2 relative">
                      <FuturisticMenuItem icon={BookOpen} href="https://ecosystem.swarms.world">
                        Ecosystem Hub
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Cloud} href="https://cloud.swarms.ai">
                        Cloud Platform
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Activity} href="https://status.swarms.ai">
                        Status Page
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Github} href="https://github.com/kyegomez/swarms">
                        Main Repository
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Code} href="https://github.com/The-Swarm-Corporation">
                        Organization
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={DollarSign} href="https://grants.swarms.world" isNew={true}>
                        Grants Program
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Code} href="/open-source">
                        Open Source
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Sparkles} href="/applications">
                        Applications
                      </FuturisticMenuItem>
                    </TabsContent>

                    <TabsContent value="community" className="space-y-1 mt-2 relative">
                      <FuturisticMenuItem icon={Discord} href="https://discord.gg/jM3Z6M9uMq">
                        Discord Community
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Twitter} href="https://x.com/swarms_corp">
                        Twitter/X
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Calendar} href="https://lu.ma/swarms_calendar">
                        Events Calendar
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Phone} href="https://cal.com/swarms">
                        Book a Call
                      </FuturisticMenuItem>
                    </TabsContent>

                    <TabsContent value="tutorials" className="space-y-1 mt-2 relative">
                      <FuturisticMenuItem icon={FileText} href="https://docs.swarms.world">
                        Documentation
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Download} href="/installation">
                        Installation Guide
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={GraduationCap} href="https://course.swarms.world">
                        Swarms Course
                      </FuturisticMenuItem>
                      <FuturisticMenuItem icon={Users} href="https://contributors.swarms.world">
                        Contributors Portal
                      </FuturisticMenuItem>
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            className="hidden md:inline-flex hover:bg-red-500/10 hover:text-red-500 transition-colors"
            asChild
          >
            <a href="https://swarms.world" target="_blank" rel="noopener noreferrer">
              {t("marketplace")}
            </a>
          </Button>

          <Button
            variant="ghost"
            className="hidden md:inline-flex hover:bg-red-500/10 hover:text-red-500 transition-colors"
            asChild
          >
            <Link href="/hiring">Careers</Link>
          </Button>

          <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700 neon-glow" asChild>
            <a href="https://github.com/kyegomez/swarms" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>

          {/* Social Links */}
          <SocialButton href="https://x.com/swarms_corp" icon={Twitter} label="Follow us on Twitter" />
          <SocialButton href="https://discord.gg/jM3Z6M9uMq" icon={Discord} label="Join our Discord" />

          {/* Language Switcher */}
          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:inline-flex hover:bg-red-500/10"
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-red-500/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80vw] sm:w-[385px] border-red-500/20 bg-background/95 backdrop-blur-md"
            >
              <SheetHeader>
                <SheetTitle className="cyber-text">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="https://docs.swarms.world"
                  className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {t("docs")}
                </Link>
                <div className="space-y-2">
                  <div className="text-sm font-medium px-2 flex items-center">
                    <span>{t("products")}</span>
                    <div className="ml-2 h-px flex-1 bg-gradient-to-r from-red-500/20 to-transparent"></div>
                  </div>
                  <Link
                    href="/products"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Package className="mr-2 h-4 w-4 text-red-500" />
                    Products Overview
                  </Link>
                  <Link
                    href="https://github.com/kyegomez/swarms"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Github className="mr-2 h-4 w-4 text-red-500" />
                    Swarms Python
                  </Link>
                  <Link
                    href="https://docs.swarms.world/en/latest/swarms_cloud/swarms_api/"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Code className="mr-2 h-4 w-4 text-red-500" />
                    Swarms API
                  </Link>
                  <Link
                    href="https://github.com/The-Swarm-Corporation/swarms-rs"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Rocket className="mr-2 h-4 w-4 text-red-500" />
                    Swarms RS
                  </Link>
                  <Link
                    href="https://swarms.world"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Sparkles className="mr-2 h-4 w-4 text-red-500" />
                    Swarms Marketplace
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium px-2 flex items-center">
                    <span>{t("programs")}</span>
                    <div className="ml-2 h-px flex-1 bg-gradient-to-r from-red-500/20 to-transparent"></div>
                  </div>
                  <Link
                    href="/programs"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Award className="mr-2 h-4 w-4 text-red-500" />
                    Research Program
                  </Link>
                  <Link
                    href="https://www.swarms.ai/programs/startups"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Rocket className="mr-2 h-4 w-4 text-red-500" />
                    Startup Program
                  </Link>
                  <Link
                    href="https://grants.swarms.world"
                    className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <DollarSign className="mr-2 h-4 w-4 text-red-500" />
                    Grants Program
                    <span className="ml-2 text-xs px-1.5 py-0.5 bg-red-500/20 text-red-500 rounded-full">New</span>
                  </Link>
                </div>
                <Link
                  href="https://swarms.world"
                  className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {t("marketplace")}
                </Link>

                <Link
                  href="/hiring"
                  className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>

                {/* Mobile Resources Section with Tabs */}
                <div className="space-y-2">
                  <div className="text-sm font-medium px-2 flex items-center">
                    <span>{t("resources")}</span>
                    <div className="ml-2 h-px flex-1 bg-gradient-to-r from-red-500/20 to-transparent"></div>
                  </div>

                  <Tabs defaultValue="ecosystem" className="w-full">
                    <TabsList className="w-full grid grid-cols-3 bg-background/30 backdrop-blur-sm border border-red-500/20 rounded-md mb-2">
                      <TabsTrigger
                        value="ecosystem"
                        className="text-xs data-[state=active]:bg-red-500/10 data-[state=active]:text-red-500"
                      >
                        Ecosystem
                      </TabsTrigger>
                      <TabsTrigger
                        value="community"
                        className="text-xs data-[state=active]:bg-red-500/10 data-[state=active]:text-red-500"
                      >
                        Community
                      </TabsTrigger>
                      <TabsTrigger
                        value="tutorials"
                        className="text-xs data-[state=active]:bg-red-500/10 data-[state=active]:text-red-500"
                      >
                        Tutorials
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="ecosystem" className="space-y-1 mt-0">
                      <Link
                        href="https://ecosystem.swarms.world"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <BookOpen className="mr-2 h-4 w-4 text-red-500" />
                        Ecosystem Hub
                      </Link>
                      <Link
                        href="https://status.swarms.ai"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Activity className="mr-2 h-4 w-4 text-red-500" />
                        Status Page
                      </Link>
                      <Link
                        href="https://github.com/kyegomez/swarms"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Github className="mr-2 h-4 w-4 text-red-500" />
                        Main Repository
                      </Link>
                      <Link
                        href="https://github.com/The-Swarm-Corporation"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Code className="mr-2 h-4 w-4 text-red-500" />
                        Organization
                      </Link>
                      <Link
                        href="https://grants.swarms.world"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <DollarSign className="mr-2 h-4 w-4 text-red-500" />
                        Grants Program
                        <span className="ml-2 text-xs px-1.5 py-0.5 bg-red-500/20 text-red-500 rounded-full">New</span>
                      </Link>
                      <Link
                        href="/open-source"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Code className="mr-2 h-4 w-4 text-red-500" />
                        Open Source
                      </Link>
                      <Link
                        href="/applications"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Sparkles className="mr-2 h-4 w-4 text-red-500" />
                        Applications
                      </Link>
                    </TabsContent>

                    <TabsContent value="community" className="space-y-1 mt-0">
                      <Link
                        href="https://discord.gg/jM3Z6M9uMq"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Discord className="mr-2 h-4 w-4 text-red-500" />
                        Discord Community
                      </Link>
                      <Link
                        href="https://x.com/swarms_corp"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Twitter className="mr-2 h-4 w-4 text-red-500" />
                        Twitter/X
                      </Link>
                      <Link
                        href="https://lu.ma/swarms_calendar"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Calendar className="mr-2 h-4 w-4 text-red-500" />
                        Events Calendar
                      </Link>
                      <Link
                        href="https://cal.com/swarms"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Phone className="mr-2 h-4 w-4 text-red-500" />
                        Book a Call
                      </Link>
                    </TabsContent>

                    <TabsContent value="tutorials" className="space-y-1 mt-0">
                      <Link
                        href="https://docs.swarms.world"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <FileText className="mr-2 h-4 w-4 text-red-500" />
                        Documentation
                      </Link>
                      <Link
                        href="/installation"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Download className="mr-2 h-4 w-4 text-red-500" />
                        Installation Guide
                      </Link>
                      <Link
                        href="https://course.swarms.world"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <GraduationCap className="mr-2 h-4 w-4 text-red-500" />
                        Swarms Course
                      </Link>
                      <Link
                        href="https://contributors.swarms.world"
                        className="text-sm font-medium hover:text-red-500 transition-colors hover:bg-red-500/10 p-2 rounded-md flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Users className="mr-2 h-4 w-4 text-red-500" />
                        Contributors Portal
                      </Link>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="border-t border-red-500/20 pt-4">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://x.com/swarms_corp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://discord.gg/jM3Z6M9uMq"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Join our Discord"
                      >
                        <Discord className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://github.com/kyegomez/swarms"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  {/* Add Language Switcher to mobile menu */}
                  <div className="flex justify-center">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
