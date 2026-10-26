"use client"

import { useEffect, useId, useRef, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

export function BoundedDialog({ open, onClose, title, children, className = "", id: suppliedId }: { open: boolean; onClose: () => void; title: string; children: ReactNode; className?: string; id?: string }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const close = useRef(onClose)
  const id = useId()
  close.current = onClose
  useEffect(() => {
    const node = dialog.current
    if (!node || !open) return
    const trigger = document.activeElement as HTMLElement | null
    node.showModal()
    return () => { node.close(); if (trigger?.isConnected) trigger.focus({ preventScroll: true }) }
  }, [open])
  if (!open || typeof document === "undefined") return null
  return createPortal(
    <dialog ref={dialog} id={suppliedId} className={`bounded-dialog ${className}`} aria-labelledby={id} onKeyDown={event => {
      if (event.key !== "Tab") return
      const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')].filter(element => element.checkVisibility({ visibilityProperty: true }) && !element.closest('[inert], [hidden]'))
      const first = controls[0], last = controls.at(-1)
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }} onCancel={event => { event.preventDefault(); close.current() }} onClick={event => { if (event.target === event.currentTarget) close.current() }}>
      <div className="dialog-surface">
        <header className="dialog-heading"><h2 id={id}>{title}</h2><button type="button" className="icon-button" aria-label={`Close ${title.toLowerCase()}`} onClick={onClose}><X size={18} /></button></header>
        <div className="dialog-content">{children}</div>
      </div>
    </dialog>, document.body,
  )
}
