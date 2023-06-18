"use client"

import { Italic } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  const handleToggle = () => {
    console.log("Toggle italic")
  }

  return (
    <span onClick={handleToggle}>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="w-4 h-4" />
      </Toggle>
    </span>
  )
}
