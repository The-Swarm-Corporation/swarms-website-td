"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface EasterNotificationProps {
  className?: string
}

// Easter messages in different languages
const easterMessages = [
  { language: "English", message: "Christ is risen!" },
  { language: "Russian", message: "Христос воскрес!" },
  { language: "Greek", message: "Χριστός ἀνέστη!" },
  { language: "Spanish", message: "¡Cristo ha resucitado!" },
  { language: "French", message: "Christ est ressuscité!" },
  { language: "German", message: "Christus ist auferstanden!" },
  { language: "Italian", message: "Cristo è risorto!" },
  { language: "Arabic", message: "المسيح قام!" },
  { language: "Chinese", message: "基督复活了!" },
  { language: "Japanese", message: "キリストは復活した!" },
  { language: "Korean", message: "그리스도께서 부활하셨습니다!" },
  { language: "Hindi", message: "मसीह जी उठा है!" },
]

export function EasterNotification({ className = "" }: EasterNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [dismissed, setDismissed] = useState(false)

  // Function to check if today is during Easter period (Easter Sunday ± 3 days)
  const isEasterPeriod = () => {
    const today = new Date()
    const year = today.getFullYear()

    // Calculate Easter Sunday using the algorithm
    const a = year % 19
    const b = Math.floor(year / 100)
    const c = year % 100
    const d = Math.floor(b / 4)
    const e = b % 4
    const f = Math.floor((b + 8) / 25)
    const g = Math.floor((b - f + 1) / 3)
    const h = (19 * a + b - d - g + 15) % 30
    const i = Math.floor(c / 4)
    const k = c % 4
    const l = (32 + 2 * e + 2 * i - h - k) % 7
    const m = Math.floor((a + 11 * h + 22 * l) / 451)
    const month = Math.floor((h + l - 7 * m + 114) / 31)
    const day = ((h + l - 7 * m + 114) % 31) + 1

    const easterSunday = new Date(year, month - 1, day)

    // Calculate the range (Easter Sunday ± 3 days)
    const easterStart = new Date(easterSunday)
    easterStart.setDate(easterSunday.getDate() - 3)

    const easterEnd = new Date(easterSunday)
    easterEnd.setDate(easterSunday.getDate() + 3)

    // Check if today is within the Easter period
    return today >= easterStart && today <= easterEnd
  }

  // For testing purposes, you can uncomment this line to always show the notification
  // const isEasterTime = true;

  const isEasterTime = isEasterPeriod()

  useEffect(() => {
    // Check if notification was dismissed today
    const lastDismissed = localStorage.getItem("easterNotificationDismissed")
    const today = new Date().toDateString()

    if (isEasterTime && lastDismissed !== today && !dismissed) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [dismissed, isEasterTime])

  useEffect(() => {
    // Rotate through messages every 3 seconds
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % easterMessages.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem("easterNotificationDismissed", new Date().toDateString())
  }

  if (!isEasterTime || !isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`w-full bg-gradient-to-r from-black via-red-950 to-black border-b border-red-500/30 text-white py-2 relative overflow-hidden ${className}`}
        >
          <div className="container mx-auto flex items-center justify-center px-4">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="mr-2 text-red-500 font-bold animate-pulse">Happy Easter!</div>

            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className="text-white/90 mr-1">{easterMessages[currentMessageIndex].message}</span>
              <span className="text-xs text-red-400/80">({easterMessages[currentMessageIndex].language})</span>
            </motion.div>

            <button
              onClick={handleDismiss}
              className="ml-4 p-1 rounded-full hover:bg-red-500/20 transition-colors absolute right-4"
              aria-label="Dismiss Easter notification"
            >
              <X className="h-4 w-4 text-white/80" />
            </button>
          </div>

          {/* Futuristic animated border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
