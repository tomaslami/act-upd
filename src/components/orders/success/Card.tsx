"use client"

import Image from "next/image"
import {
  CheckCircle2,
  Calendar,
  Download,
  Mail,
  ArrowRight,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PaymentSuccess() {
  // Generate a random transaction ID
  const transactionId = "ACT-" + Math.floor(100000 + Math.random() * 900000)
  const paymentDate = new Date().toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="bg-[#1e56a0] text-white p-6 flex flex-col items-center rounded-t-lg">
            <CheckCircle2 className="w-16 h-16 mb-4 text-white" />
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              ¡Pago Exitoso!
            </h1>
            <p className="text-center mt-2 text-blue-100">
              Tu inscripción al curso ha sido confirmada
            </p>
          </CardHeader>

          <CardContent className="p-6">
            <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6 flex items-start">
              <div className="mr-3 mt-1">
                <Mail className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-green-800">
                  Hemos enviado un correo electrónico con los detalles de tu
                  compra a <strong>maria.gonzalez@email.com</strong>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg text-[#1e56a0] mb-3">
                  Detalles del Curso
                </h3>
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
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Horario: 09:00 - 13:00 hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg text-[#1e56a0] mb-3">
                  Información del Pago
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">ID de Transacción</p>
                      <p className="font-mono">{transactionId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fecha</p>
                      <p>{paymentDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Método de Pago</p>
                      <p>Tarjeta de Crédito</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Estado</p>
                      <p className="text-green-600 font-medium">Completado</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Pagado</span>
                    <span className="font-bold text-lg">$100.000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg text-[#1e56a0] mb-3">
                  Próximos Pasos
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ol className="space-y-3">
                    <li className="flex">
                      <span className="bg-[#1e56a0] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        1
                      </span>
                      <p>
                        Recibirás un correo con los datos de acceso a la
                        plataforma Zoom para el curso.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-[#1e56a0] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        2
                      </span>
                      <p>
                        Prepara los materiales necesarios que se indican en el
                        correo de confirmación.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-[#1e56a0] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        3
                      </span>
                      <p>
                        Conéctate 10 minutos antes del inicio del curso para
                        verificar tu conexión.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 flex flex-col sm:flex-row gap-3 border-t">
            <Button className="w-full sm:w-auto bg-[#1e56a0] hover:bg-[#164584]">
              <Download className="mr-2 h-4 w-4" />
              Descargar Comprobante
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-[#1e56a0] text-[#1e56a0] hover:bg-blue-50"
            >
              Ir a Mis Cursos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6">
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
