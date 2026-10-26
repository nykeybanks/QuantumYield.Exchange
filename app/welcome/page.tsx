import type { Metadata } from "next"
import { WelcomeFlow } from "@/components/site/welcome-flow"

export const metadata: Metadata = {
  title: "Welcome to QuantumYield",
  description: "Choose a QYX20 prototype workspace and starting view. A guided introduction with no account creation, wallet connection or live transactions.",
}

export default function WelcomePage() {
  return <WelcomeFlow />
}
