"use server"

import { PaymentService } from "@/service/payment-service"
import { CreatePreferenceValues } from "@/types/types"

const paymentService = new PaymentService()

export async function createPayment(body: CreatePreferenceValues) {
  try {
    const result = await paymentService.createPreference(body)

    return result
  } catch (error) {
    return {
      status: 500,
      message: error,
      userMessage: "Hubo un error al crear el pago",
    }
  }
}