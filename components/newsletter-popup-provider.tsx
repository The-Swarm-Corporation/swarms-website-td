"use client"

import type React from "react"
import { NewsletterPopup } from "./newsletter-popup"
import { useNewsletterPopup } from "@/hooks/use-newsletter-popup"

interface NewsletterPopupProviderProps {
  children: React.ReactNode
}

export function NewsletterPopupProvider({ children }: NewsletterPopupProviderProps) {
  const { isOpen, closePopup } = useNewsletterPopup()

  return (
    <>
      {children}
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </>
  )
}
