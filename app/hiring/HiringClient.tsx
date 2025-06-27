"use client"

import type React from "react"

export default function HiringClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <style jsx global>{`
        html {
          background-color: #000000 !important;
        }
        body {
          background-color: #000000 !important;
        }
        #__next {
          background-color: #000000 !important;
        }
      `}</style>
      {children}
    </div>
  )
}
