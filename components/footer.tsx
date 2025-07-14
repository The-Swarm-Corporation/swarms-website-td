import Link from "next/link"
import {
  Twitter,
  MessageCircle,
  FileText,
  BookOpen,
  Send,
  ArrowRight,
  Github,
  Package,
  Code,
  Rocket,
  Sparkles,
  Award,
  DollarSign,
  GraduationCap,
  Users,
  Calendar,
  Phone,
  Cloud,
  Activity,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-red-900/30 bg-black text-white">
      <div className="relative">
        {/* Glowing red line at the top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="container mx-auto px-4 py-8">
          {/* Mission Statement Section */}
          <div className="mb-8 flex items-center gap-3">
            <img src="/logo.svg" alt="Swarms Logo" className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-bold text-white">Swarms</h2>
              <p className="text-sm text-gray-400">
                Enabling organizations to become fully autonomous through multi-agent collaboration.
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Products */}
            <div className="relative overflow-hidden rounded-md border border-red-900/20 bg-black p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Products
              </h3>

              <ul className="space-y-2">
                {[
                  { name: "Products Overview", icon: Package, url: "/products" },
                  { name: "Swarms Python", icon: Github, url: "https://github.com/kyegomez/swarms" },
                  {
                    name: "Swarms API",
                    icon: Code,
                    url: "https://docs.swarms.world/en/latest/swarms_cloud/swarms_api/",
                  },
                  { name: "Swarms RS", icon: Rocket, url: "https://github.com/The-Swarm-Corporation/swarms-rs" },
                  { name: "Swarms Marketplace", icon: Sparkles, url: "https://swarms.world" },
                ].map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={item.url}
                      target={item.url.startsWith("http") ? "_blank" : undefined}
                      rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between rounded border border-transparent bg-transparent p-2 text-sm transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/10 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-3.5 w-3.5 text-red-500" />
                        <div className="text-xs text-gray-300 transition-colors duration-300 group-hover:text-gray-100">{item.name}</div>
                      </div>
                      <ArrowRight className="h-3 w-0 transform opacity-0 transition-all duration-300 group-hover:w-3 group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="relative overflow-hidden rounded-md border border-red-900/20 bg-black p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Resources
              </h3>

              <div className="grid gap-2">
                {[
                  { name: "Documentation", icon: BookOpen, url: "https://docs.swarms.world" },
                  { name: "Ecosystem Hub", icon: BookOpen, url: "https://ecosystem.swarms.world" },
                  { name: "Cloud Platform", icon: Cloud, url: "https://cloud.swarms.ai" },
                  { name: "Status Page", icon: Activity, url: "https://status.swarms.ai" },
                  { name: "Swarms Course", icon: GraduationCap, url: "https://course.swarms.world" },
                  { name: "Contributors Portal", icon: Users, url: "https://contributors.swarms.world" },
                  { name: "Open Source", icon: Github, url: "/open-source" },
                  { name: "Applications", icon: Sparkles, url: "/applications" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded border border-transparent bg-transparent p-2 text-sm transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/10 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-red-950/30 transition-colors duration-300 group-hover:bg-red-950/60">
                        <item.icon className="h-3.5 w-3.5 text-red-500" />
                      </div>
                      <span className="text-xs text-gray-300 transition-colors duration-300 group-hover:text-gray-100">{item.name}</span>
                    </div>
                    <ArrowRight className="h-3 w-0 transform opacity-0 transition-all duration-300 group-hover:w-3 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div className="relative overflow-hidden rounded-md border border-red-900/20 bg-black p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Programs
              </h3>

              <div className="grid gap-2">
                {[
                  { name: "Research Program", icon: Award, url: "/programs" },
                  { name: "Startup Program", icon: Rocket, url: "https://www.swarms.ai/programs/startups" },
                  { name: "Grants Program", icon: DollarSign, url: "https://grants.swarms.world", isNew: true },
                  { name: "Investors Portal", icon: DollarSign, url: "https://investors.swarms.world" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded border border-transparent bg-transparent p-2 text-sm transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/10 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-red-950/30 transition-colors duration-300 group-hover:bg-red-950/60">
                        <item.icon className="h-3.5 w-3.5 text-red-500" />
                      </div>
                      <span className="text-xs text-gray-300 transition-colors duration-300 group-hover:text-gray-100">{item.name}</span>
                      {item.isNew && (
                        <span className="text-xs px-1.5 py-0.5 bg-red-500/20 text-red-500 rounded-full">New</span>
                      )}
                    </div>
                    <ArrowRight className="h-3 w-0 transform opacity-0 transition-all duration-300 group-hover:w-3 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Community & Contact */}
            <div className="relative overflow-hidden rounded-md border border-red-900/20 bg-black p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Community & Contact
              </h3>

              <div className="grid gap-2">
                {[
                  { name: "Discord Community", icon: MessageCircle, url: "https://discord.gg/jM3Z6M9uMq" },
                  { name: "Telegram", icon: Send, url: "http://t.me/swarmsgroupchat" },
                  { name: "Events Calendar", icon: Calendar, url: "https://lu.ma/swarms_calendar" },
                  { name: "Book a Call", icon: Phone, url: "https://cal.com/swarms" },
                  { name: "Blog", icon: FileText, url: "https://medium.com/@kyeg" },
                  { name: "Swarms Twitter", icon: Twitter, url: "https://twitter.com/swarms_corp" },
                  { name: "Swarms Foundation", icon: Twitter, url: "https://twitter.com/swarmsfndn" },
                  { name: "Swarms Founder", icon: Twitter, url: "https://twitter.com/KyeGomezB" },
                  { name: "Swarms News", icon: Twitter, url: "https://twitter.com/SwarmsStatus" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded border border-transparent bg-transparent p-2 text-sm transition-all duration-300 hover:border-red-500/40 hover:bg-red-950/10 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded bg-red-950/30 transition-colors duration-300 group-hover:bg-red-950/60">
                        <item.icon className="h-3.5 w-3.5 text-red-500" />
                      </div>
                      <span className="text-xs text-gray-300 transition-colors duration-300 group-hover:text-gray-100">{item.name}</span>
                    </div>

                    <ArrowRight className="h-3 w-0 transform opacity-0 transition-all duration-300 group-hover:w-3 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom section with copyright */}
          <div className="relative mt-6 border-t border-red-900/30 pt-4 text-center">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div className="text-xs text-gray-500">© {new Date().getFullYear()} Swarms. All rights reserved.</div>
          </div>
        </div>

        {/* Decorative glowing line at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </div>
    </footer>
  )
}
