import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

// Check if we have the API key
const RESEND_API_KEY = process.env.RESEND_API_KEY
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

// For development without Resend API key
const mockSubscribe = async (email: string, firstName?: string, lastName?: string) => {
  console.log("Mock subscribe:", { email, firstName, lastName })
  return {
    id: "mock_" + Date.now(),
    email,
    firstName,
    lastName,
    unsubscribed: false,
    created_at: new Date().toISOString(),
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    console.log("Attempting to create contact with:", { email, firstName, lastName })

    let contact
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY)
      contact = await resend.contacts.create({
        email: email,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        unsubscribed: false,
        audienceId: AUDIENCE_ID,
      })
    } else {
      // Use mock subscription in development
      contact = await mockSubscribe(email, firstName, lastName)
      console.log("Using mock subscription (no API key provided)")
    }

    console.log("Contact created successfully:", contact)

    return NextResponse.json(
      {
        message: "Successfully subscribed to Swarms updates!",
        contact: contact,
      },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
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
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    )
  }
}

// Handle CORS preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
