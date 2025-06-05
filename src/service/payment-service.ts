import {
    CreatePreferenceResponse,
    CreatePreferenceValues,
    ErrorResponse,
  } from "@/types/types"
  import MercadoPagoConfig, { Preference } from "mercadopago"
  import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes"
  import { v4 as UUIDv4 } from "uuid"
  
  export class PaymentService {
    private readonly client: Preference
  
    constructor() {
      const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN as string
      if (!accessToken) {
        throw new Error("MERCADO_PAGO_ACCESS_TOKEN is not set")
      }
  
      const config = new MercadoPagoConfig({ accessToken })
  
      this.client = new Preference(config)
    }
  
    async createPreference(
      body: CreatePreferenceValues
    ): Promise<CreatePreferenceResponse | ErrorResponse> {
      const { price, title, quantity } = body
  
      if (!price || !title || !quantity) {
        return {
          status: 400,
          message: "Invalid request body",
          userMessage: "Hubo un error al crear el pago.",
        }
      }
  
      const id = `${title}-${UUIDv4()}-${Date.now()}`
  
      const request_id = `${id}-${Date.now()}`
      try {
        const result = (await this.client.create({
          body: {
            items: [
              {
                id: id,
                title: title,
                quantity: quantity,
                currency_id: "ARS",
                unit_price: price,
              },
            ],
            back_urls: {
              success: "https://actualmente.com.ar/payment/success",
              failure: "https://actualmente.com.ar/payment/failure",
              pending: "https://actualmente.com.ar/payment/pending",
            },
            auto_return: "approved",
            external_reference: request_id,
            metadata: { request_id },
          },
        })) as PreferenceResponse
  
        if (!result || !result.init_point || !result.id) {
          return {
            status: 500,
            message: "Error al crear la preferencia de pago",
            userMessage: "Hubo un error al crear el pago.",
          }
        }
  
        return {
          init_point: result.init_point,
        }
      } catch (error) {
        console.log(error)
        return {
          status: 500,
          message: "Error al crear la preferencia de pago",
          userMessage: "Hubo un error al crear el pago.",
     }
    }
    }
  }