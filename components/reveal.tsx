"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [pending, setPending] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || el.getBoundingClientRect().top < window.innerHeight) return
    setPending(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPending(false)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: "0px 0px 32px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal min-w-0 ${pending ? "is-pending" : ""} ${className}`}
      style={{ transitionDelay: `${Math.min(delay, 80)}ms` }}
    >
      {children}
    </Tag>
  )
}
