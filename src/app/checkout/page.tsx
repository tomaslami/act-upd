"use client"

import { Suspense, useState } from "react"
import Image from "next/image"
import { Check, CreditCard, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation"
import CustomLoader from "@/components/loader/custom-loader"

const CheckoutSummaryContent = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const router = useRouter()

  const searchParams = useSearchParams()

  const init_point = searchParams.get("init_point")
  const total = searchParams.get("total")

  if (!init_point) return

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1e56a0] mb-8">
          Resumen de Compra
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Course Summary */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1e56a0]">
                  Detalles del Curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-full md:w-32 h-24 bg-gray-200 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=96&width=128"
                          alt="Curso"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">
                          Escala de Desarrollo MP
                        </h3>
                        <p className="text-orange-500">
                          Capacitación para Profesionales de la Salud
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>FECHA: 28 de Febrero - 1 de Marzo</span>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Check className="w-4 h-4 mr-1 text-green-500" />
                          <span>Modalidad online a través de Zoom</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      Información del Participante
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Nombre Completo</p>
                        <p>María González Pérez</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p>maria.gonzalez@email.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Teléfono</p>
                        <p>+56 9 1234 5678</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Profesión</p>
                        <p>Psicóloga</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e56a0]">
                  Método de Pago
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div
                    className={`flex items-center space-x-3 border p-4 rounded-lg ${
                      paymentMethod === "credit-card"
                        ? "border-[#1e56a0] bg-blue-50"
                        : ""
                    }`}
                  >
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label
                      htmlFor="credit-card"
                      className="flex items-center cursor-pointer"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      <span>Mercado Pago</span>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-3 border p-4 rounded-lg ${
                      paymentMethod === "bank-transfer"
                        ? "border-[#1e56a0] bg-blue-50"
                        : ""
                    }`}
                  >
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer" className="cursor-pointer">
                      Transferencia Bancaria
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Serás redirigido a nuestra plataforma de pago seguro para
                      completar la transacción.
                    </p>
                  </div>
                )}

                {paymentMethod === "bank-transfer" && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium mb-2">Datos Bancarios:</p>
                    <p className="text-sm">Banco: Banco de Chile</p>
                    <p className="text-sm">Cuenta Corriente: 123-456-789</p>
                    <p className="text-sm">Titular: Actualmente SpA</p>
                    <p className="text-sm">RUT: 76.543.210-K</p>
                    <p className="text-sm">Email: pagos@actualmente.cl</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Una vez realizada la transferencia, envía el comprobante a
                      pagos@actualmente.cl
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e56a0]">
                  Resumen del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Escala de Desarrollo MP</span>
                    <span>$120.000</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Descuento</span>
                    <span>-$20.000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => router.push(init_point)}
                  className="w-full bg-[#1e56a0] hover:bg-[#164584]"
                >
                  Confirmar y Pagar
                </Button>
              </CardFooter>
              <div className="px-6 pb-6">
                <p className="text-xs text-center text-gray-500 mt-4">
                  Al confirmar, aceptas nuestros Términos y Condiciones y
                  Política de Privacidad
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-[#1e56a0] font-bold text-xl">
                Actualmente
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Capacitación para Profesionales de la Salud
              </p>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Actualmente. Todos los derechos
              reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function CheckoutSummary() {
  return (
    <Suspense fallback={<CustomLoader message="Cargando Resumen de Compra" />}>
      <CheckoutSummaryContent />
    </Suspense>
  )
}
