import { Children, Fragment, isValidElement, type ReactNode } from "react"
import { Card, PageIntro, StatGrid } from "@/components/workspace/primitives"
import { ContextHeader, FinancialOverview, AttentionRequired, ActivityFeed, QyxaiPanel, QuickActions } from "@/components/dashboard/panels"
import { WorkspaceShell } from "./workspace-shell"
import type { Scene } from "@/components/viewport/scene-deck"

type SceneProps = { children?: ReactNode; title?: string; className?: string }
const LABELS = new Map<unknown, string>([
  [PageIntro, "Overview"], [StatGrid, "Metrics"], [ContextHeader, "Workspace context"],
  [FinancialOverview, "Financial overview"], [AttentionRequired, "Attention required"],
  [ActivityFeed, "Recent activity"], [QyxaiPanel, "QYXai"], [QuickActions, "Quick actions"],
])

function collectScenes(children: ReactNode, prefix = "scene"): Scene[] {
  return Children.toArray(children).flatMap((node, index): Scene[] => {
    if (!isValidElement<SceneProps>(node)) return []
    const id = `${prefix}-${index}`
    if (node.type === Fragment) return collectScenes(node.props.children, id)
    if (node.type === "div") {
      const nested = Children.toArray(node.props.children)
      const containsCards = nested.some(child => isValidElement(child) && typeof child.type !== "string")
      if (containsCards && !node.props.className?.includes("flex-wrap")) return collectScenes(node.props.children, id)
    }
    const label = node.props.title || LABELS.get(node.type) || (node.props.className?.includes("flex-wrap") ? "Categories" : "Details")
    return [{ id, label, content: typeof node.type === "string" ? <Card title={label}>{node}</Card> : node }]
  })
}

export function QYXShell({ children, contextPanel, title = "QYX20" }: { children: ReactNode; contextPanel?: ReactNode; title?: string }) {
  return <WorkspaceShell title={title} scenes={collectScenes(children)} contextPanel={contextPanel ? <Card title="Context · illustrative">{contextPanel}</Card> : undefined} />
}
