import { NextRequest, NextResponse } from "next/server"
import { MercadoPagoConfig, Preference } from "mercadopago"

interface RequestBody {
  id: string
  title: string
  quantity: string
  price: string
  stageId: string
  stockToRemove: number
}

const access_token = process.env.MP_ACCESS_TOKEN

if (!access_token) {
  throw new Error("Missing MERCADO_PAGO_ACCESS_TOKEN environment variable")
}

const client = new MercadoPagoConfig({
  accessToken: access_token,
})

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RequestBody

    if (!body.title || !body.quantity || !body.price || !body.id) {
      return NextResponse.json({
        status: 400,
        message: "Bad Request: Missing required fields",
      })
    }

    const preferenceBody = {
      items: [
        {
          id: body.id,
          title: body.title,
          quantity: 1,
          unit_price: Number(body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: `https://actualmente.com.ar/orders/success?price=${body.price}&quantity=${body.quantity}`,
        failure: `https://actualmente.com.ar/orders/failure?price=${body.price}`,
        pending: "https://actualmente.com.ar/orders/pending",
      },
      auto_return: "approved",
      external_reference: `${body.id}-${Date.now()}`,
      metadata: {
        requestId: `${body.id}-${Date.now()}`,
      },
    }

    const preference = new Preference(client)
    const result = await preference.create({ body: preferenceBody })

    console.log(result)

    return NextResponse.json({
      status: 200,
      id: result.id,
      init_point: result.init_point,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    })
  }
}
