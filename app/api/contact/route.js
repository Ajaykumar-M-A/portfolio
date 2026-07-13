import { NextResponse } from 'next/server'
import { emailConfig, hasEmailProviderConfig } from '../../config/email/emailConfig'

function clean(value) {
  return String(value || '').trim()
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = clean(body.name)
    const email = clean(body.email)
    const subject = clean(body.subject) || 'Portfolio Contact'
    const message = clean(body.message)

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    if (!hasEmailProviderConfig()) {
      return NextResponse.json({ error: 'Email provider is not configured.' }, { status: 503 })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${emailConfig.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailConfig.from,
        to: emailConfig.to,
        reply_to: email,
        subject: `Portfolio: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!response.ok) {
      const providerError = await response.text()
      return NextResponse.json({ error: 'Email provider rejected the message.', providerError }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 })
  }
}
