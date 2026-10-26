import { NextResponse } from "next/server"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let email = ""
  try {
    const body = await request.json()
    email = typeof body?.email === "string" ? body.email.trim() : ""
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  if (!email) {
    return NextResponse.json({ error: "Please enter your email address." }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "That doesn't look like a valid email." }, { status: 422 })
  }

  // A subscription must not be acknowledged until it is durably stored.
  return NextResponse.json({ error: "Newsletter signup is not available yet. Your email has not been saved." }, { status: 503 })
}
