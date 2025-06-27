import type React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
}

export function CardWrapper({ children, className = "" }: CardWrapperProps) {
  return (
    <div
      className={`
      relative overflow-hidden rounded-lg border border-red-900/20 
      bg-background/30 backdrop-blur-md 
      before:absolute before:inset-0 
      before:border-2 before:border-red-500/20 
      before:rounded-lg 
      hover:before:border-red-500/40 
      before:transition-colors
      hover:shadow-lg hover:shadow-red-500/10
      transition-all duration-300
      ${className}
    `}
    >
      {children}
    </div>
  )
}
