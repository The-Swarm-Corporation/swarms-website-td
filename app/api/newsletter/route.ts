import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    console.log("Newsletter signup:", { email, firstName, lastName })

    // Since we don't have Resend API key in development, we'll simulate success
    // In production, you would use Resend or another email service
    return NextResponse.json(
      {
        message: "Successfully subscribed to Swarms updates!",
        contact: { email, firstName, lastName },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter signup error:", error)

    return NextResponse.json(
      {
        error: "Failed to subscribe. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
