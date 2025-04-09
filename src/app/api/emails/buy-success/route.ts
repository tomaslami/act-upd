import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not defined in environment variables")
}
const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      {
        error: "Server configuration error: Missing API key",
        details: "Please contact the administrator",
      },
      { status: 500 }
    )
  }

  try {
    const body = await req.json()

    const { title, price, paymentId } = body

    const { data, error } = await resend.emails.send({
      from: "compras@actualmente.com.ar",
      to: ["tomaslamiguralnik@gmail.com"],
      subject: "Se ha realizado una reserva! - Actualmente",
      html: `
        <h2>Nueva reserva del curso ${title}</h2>
        <p>Se ha realizado una reserva del curso ${title} por un total de $${price}</p>
        <p>El ID de pago es ${paymentId}</p>
        <p>Por favor, verifica la información y procede con el seguimiento correspondiente.</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data,
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
