"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current text from array
        const fullText = texts[currentTextIndex]

        // Handle typing or deleting
        if (!isDeleting) {
          // While typing
          setCurrentText(fullText.substring(0, currentText.length + 1))

          // If we've typed the full text
          if (currentText.length === fullText.length) {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), delayBetweenTexts)
            return
          }
        } else {
          // While deleting
          setCurrentText(fullText.substring(0, currentText.length - 1))

          // If we've deleted everything
          if (currentText.length === 0) {
            setIsDeleting(false)
            // Move to next text
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
            return
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
