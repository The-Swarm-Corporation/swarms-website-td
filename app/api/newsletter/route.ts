import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    console.log("Attempting to create contact with:", { email, firstName, lastName })

    // Create contact in Resend audience using the exact API format
    const contact = await resend.contacts.create({
      email: email,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      unsubscribed: false,
      audienceId: "6f8ca23c-e8e9-455b-8c64-d1dfe4f12211",
    })

    console.log("Contact created successfully:", contact)

    return NextResponse.json(
      {
        message: "Successfully subscribed to Swarms updates!",
        contact: contact,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Newsletter signup error:", error)

    // Log the full error details
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return NextResponse.json(
      {
        error: "Failed to subscribe. Please try again.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
