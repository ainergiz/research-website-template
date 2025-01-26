'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function ToggleableSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-serif text-l mb-8 tracking-wide uppercase text-zinc-700 hover:text-zinc-900 transition-colors duration-300"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      <div className={`space-y-12 ${isOpen ? '' : 'hidden'}`}>{children}</div>
    </section>
  )
} 