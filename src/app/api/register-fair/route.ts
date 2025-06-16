import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = [
      'universityName',
      'country',
      'website',
      'contactName',
      'email',
      'phone',
      'eventType',
      'preferredCities'
    ]

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate website format
    const websiteRegex = /^https?:\/\/.+/
    if (!websiteRegex.test(data.website)) {
      return NextResponse.json(
        { error: 'Invalid website URL' },
        { status: 400 }
      )
    }

    // Validate phone number format
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save the data to your database
    // 2. Send confirmation emails
    // 3. Notify administrators
    // 4. etc.

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 