"use client"

import { useState } from "react"
import Link from "next/link"
import { toast, Toaster } from "sonner"
import { Facebook, Instagram } from "lucide-react"
import { handleSubmit } from "@/actions/contact-actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(formData: FormData) {
    setIsLoading(true)
    try {
      const res = await handleSubmit(formData)

      if (res.status === 200) {
        toast.success(res.message)
        // Reset the form
        const form = document.querySelector("form") as HTMLFormElement
        form?.reset()
      } else {
        const messages = Array.isArray(res.message)
          ? res.message
          : [res.message]
        messages.forEach((msg: string) => toast.error(msg))
      }
    } catch {
      toast.error("Error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-[#1b4da1] py-16 text-white scroll-m-20"
    >
      <Toaster position="top-center" duration={3000} richColors />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column: Form */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              Querés anotarte en algún curso?
            </h2>

            <p className="mb-8 text-white/90">
              Contactate con nosotros si querés información sobre nuestras
              formaciones y novedades.
            </p>

            <form action={onSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    required
                    className="rounded-lg bg-white text-[#1b4da1] placeholder:text-[#1b4da1]/70 border-none h-12 transition-all duration-150"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="rounded-lg bg-white text-[#1b4da1] placeholder:text-[#1b4da1]/70 border-none h-12 transition-all duration-150"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    name="phone"
                    required
                    className="rounded-lg bg-white text-[#1b4da1] placeholder:text-[#1b4da1]/70 border-none h-12 transition-all duration-150"
                  />
                </div>
              </div>

              <Textarea
                name="message"
                placeholder="Mensaje"
                required
                rows={4}
                className="rounded-lg bg-white text-[#1b4da1] placeholder:text-[#1b4da1]/70 border-none resize-none transition-all duration-150"
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="accept"
                  name="accept"
                  className="data-[state=checked]:bg-[#C73C20] border-white"
                />
                <Label htmlFor="accept" className="text-sm font-normal">
                  Acepto recibir más información.
                </Label>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-1/3 h-12 bg-[#C73C20] hover:bg-[#C73C20]/90 text-white rounded-2xl"
                >
                  {isLoading ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          </div>

          {/* Right column: Contact info and social links */}
          <Card className="lg:w-1/3 bg-[#1b4da1]/30 border-none text-white">
            <CardContent className="p-6">
              <div className="mb-8">
                <div className="h-16 w-16 rounded-full bg-white" />
              </div>

              <div className="mb-8 space-y-2">
                <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
                <p className="text-sm">Juramento 1475, Bs As.</p>
                <p className="text-sm">info@actualmente.com.ar</p>
                <p className="text-sm">11 4033-6320</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Seguinos</h3>
                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                  <Button
                    asChild
                    variant="link"
                    className="p-0 h-auto text-white justify-start hover:text-white/80"
                  >
                    <Link
                      href="https://www.facebook.com/cursosactualmente"
                      className="flex items-center"
                    >
                      <Facebook className="mr-2 h-5 w-5" />
                      <span className="text-sm">@cursosactualmente</span>
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="link"
                    className="p-0 h-auto text-white justify-start hover:text-white/80"
                  >
                    <Link
                      href="https://www.instagram.com/actualmennte/"
                      className="flex items-center"
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      <span className="text-sm">@actualmennte</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-white text-xs hover:text-white/80"
              >
                <Link  href="/docs/politica-privacidad.pdf" >POLÍTICA DE PRIVACIDAD</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
