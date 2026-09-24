"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { Reveal } from "./reveal"
import { SectionLabel } from "./ui"

type Status = "idle" | "loading" | "success" | "error"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setMessage("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus("error")
        setMessage(data.error ?? "Something went wrong. Please try again.")
        return
      }
      setStatus("success")
      setMessage(data.message)
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <section className="border-t border-border py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <SectionLabel>Newsletter</SectionLabel>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated with QYX20</h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Subscribe to our newsletter for the latest updates, announcements, and exclusive insights.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status !== "idle") setStatus("idle")
                }}
                aria-invalid={status === "error"}
                className="w-full rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground placeholder:text-chrome focus:border-gold/50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-gold-foreground transition-all duration-300 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Subscribing
                </>
              ) : status === "success" ? (
                <>
                  <Check className="h-4 w-4" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 min-h-5 text-sm ${
              status === "error" ? "text-red-400" : status === "success" ? "text-success" : "text-transparent"
            }`}
          >
            {message || "placeholder"}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
