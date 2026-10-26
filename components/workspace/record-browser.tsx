"use client"

import { Children, isValidElement, useId, useState, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FitContent, contentItems, type ContentItem } from "@/components/viewport/fit-content"

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children)
  return Children.toArray(node).map(textOf).join(" ")
}

export function DataTable({ columns, rows, notes }: { columns: string[]; rows: ReactNode[][]; notes?: ReactNode }) {
  const records = rows.map((cells, index) => ({ id: textOf(cells[0]) || `record-${index}`, cells }))
  const [selectedId, setSelectedId] = useState(records[0]?.id ?? "")
  const index = Math.max(0, records.findIndex(record => record.id === selectedId))
  const record = records[index]
  const id = useId()
  return (
    <div className="record-browser">
      <div className="record-toolbar">
        <button className="icon-button" type="button" aria-label="Previous record" disabled={index === 0} onClick={() => setSelectedId(records[index - 1].id)}><ChevronLeft size={18} /></button>
        <label className="sr-only" htmlFor={id}>Select record</label>
        <select id={id} aria-label="Select record" value={record?.id ?? ""} onChange={event => setSelectedId(event.target.value)}>
          {records.map((item, i) => <option key={item.id} value={item.id}>{i + 1} · {item.id}</option>)}
        </select>
        <button className="icon-button" type="button" aria-label="Next record" disabled={index >= records.length - 1} onClick={() => setSelectedId(records[index + 1].id)}><ChevronRight size={18} /></button>
      </div>
      <FitContent label="Fields" items={record ? record.cells.map((cell, field): ContentItem => {
        let content = cell
        if (isValidElement<{ href?: string; children?: ReactNode; onClick?: unknown }>(cell)) {
          if (cell.props.href === "#") content = <span className="text-text-muted">Record shown above · demo only</span>
          if (cell.type === "button" && !cell.props.onClick) content = <span className="text-text-muted">{textOf(cell)} unavailable · prototype</span>
        }
        return { id: `${record.id}/${field}`, content: <dl className="record-field"><dt>{columns[field] || "Action"}</dt><dd>{content}</dd></dl> }
      }).concat(contentItems(notes, "notes")) : []} />
      <span className="sr-only" aria-live="polite">{records.length ? `Record ${index + 1} of ${records.length}` : "No records"}</span>
    </div>
  )
}
