"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-red-500/10">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t("select_language")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px] backdrop-blur-md bg-background/95">
        <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-red-500/10" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh")} className={language === "zh" ? "bg-red-500/10" : ""}>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ja")} className={language === "ja" ? "bg-red-500/10" : ""}>
          日本語
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ru")} className={language === "ru" ? "bg-red-500/10" : ""}>
          Русский
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")} className={language === "es" ? "bg-red-500/10" : ""}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")} className={language === "de" ? "bg-red-500/10" : ""}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")} className={language === "fr" ? "bg-red-500/10" : ""}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("hi")} className={language === "hi" ? "bg-red-500/10" : ""}>
          हिन्दी
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
