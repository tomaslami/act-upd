"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { v4 as UUIDv4 } from "uuid"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle2,
  Calendar,
  Download,
  ArrowRight,
  Camera,
} from "lucide-react"
import Image from "next/image"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { toast, Toaster } from "sonner"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function PaymentSuccess() {
  const router = useRouter()
  const cardRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const searchParms = useSearchParams()

  const title = searchParms.get("title")
  const subtitle = searchParms.get("subtitle")
  const date = searchParms.get("date")
  const modality = searchParms.get("modality")
  const paymentId = searchParms.get("payment_id")
  const price = searchParms.get("price")
  const course_avatar = searchParms.get("course_avatar")

  // Generamos un ID de transacción solo en el cliente
  const [transactionId, setTransactionId] = useState("")
  const [paymentDate, setPaymentDate] = useState("")

  useEffect(() => {
    setTransactionId(`ACT-${UUIDv4().toUpperCase().slice(0, 8)}`)
    setPaymentDate(
      new Date().toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  }, [])

  if (!title || !subtitle || !date || !modality || !price) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">No se encontraron datos</p>
      </div>
    )
  }

  const generateReceipt = async () => {
    if (!cardRef.current) return

    setIsGenerating(true)
    toast.loading("Generando comprobante...")

    try {
      // Capture the card as an image
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      })

      // Create PDF
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Calculate dimensions to fit the image properly on the page
      const imgWidth = 210 // A4 width in mm (portrait)
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Add company header
      pdf.setFillColor(30, 86, 160) // #1e56a0
      pdf.rect(0, 0, 210, 30, "F")
      pdf.setTextColor(255, 255, 255)
      pdf.setFontSize(20)
      pdf.text("Actualmente - Comprobante de Pago", 105, 15, {
        align: "center",
      })

      // Add image of the card
      pdf.addImage(imgData, "PNG", 10, 35, imgWidth - 20, imgHeight - 20)

      // Add footer
      pdf.setFillColor(240, 240, 240)
      pdf.rect(0, 280, 210, 17, "F")
      pdf.setTextColor(100, 100, 100)
      pdf.setFontSize(10)
      pdf.text(
        `Comprobante generado el ${new Date().toLocaleDateString()}`,
        105,
        287,
        { align: "center" }
      )
      pdf.text("Este documento es un comprobante de pago oficial", 105, 292, {
        align: "center",
      })

      // Save the PDF
      pdf.save(`Comprobante-${paymentId}-${title.replace(/\s+/g, "-")}.pdf`)

      toast.dismiss()
      toast.success("Comprobante descargado correctamente")
    } catch (error) {
      console.error("Error generating receipt:", error)
      toast.dismiss()
      toast.error("Error al generar el comprobante")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="top-center" richColors />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center mt-12">
        <Card className="w-full max-w-2xl shadow-lg" ref={cardRef}>
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
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg text-[#1e56a0] mb-3">
                  Detalles del Curso
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-44 h-44 bg-gray-200 rounded-md overflow-hidden">
                      <Image
                        src={course_avatar || "/images/placeholder.png"}
                        alt="Curso"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{title}</h3>
                      <p className="text-orange-500">{subtitle}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{date}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Camera className="w-4 h-4 mr-1" />
                        <span>{modality}</span>
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
                      <p>Mercado Pago</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Estado</p>
                      <p className="text-green-600 font-medium">{"Exitoso"}</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Pagado</span>
                    <span className="font-bold text-lg">{price}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#1e56a0] mb-3">
                  Próximos Pasos
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    Debes enviar este recibo a este numero de{" "}
                    <Link
                      className="text-[#1e56a0] font-bold underline"
                      href={`https://wa.me/5491140336320?text=${encodeURIComponent(
                        `Vengo del curso: ${title}, adjunto mi comprobante de pago para confirmar mi asistencia.`
                      )}`}
                    >
                      Whatsapp
                    </Link>{" "}
                    para confirmar tu asistencia.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 flex flex-col sm:flex-row gap-3 border-t">
            <Button
              className="w-full sm:w-auto bg-[#1e56a0] hover:bg-[#164584]"
              onClick={generateReceipt}
              disabled={isGenerating}
            >
              <Download className="mr-2 h-4 w-4" />
              {isGenerating ? "Generando..." : "Descargar Comprobante"}
            </Button>

            <Button
              onClick={() => router.push("/cursos")}
              variant="outline"
              className="w-full sm:w-auto border-[#1e56a0] text-[#1e56a0] hover:bg-blue-50"
            >
              Ver más cursos
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
