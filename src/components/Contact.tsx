"use client"

import { toast, Toaster } from "sonner"
import { Facebook, Instagram } from 'lucide-react'
import Link from "next/link"
import { handleSubmit } from "@/actions/contact-actions"
import { useState } from "react"

export default function Contact() {
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
        const messages = Array.isArray(res.message) ? res.message : [res.message]
        messages.forEach((msg: string) => toast.error(msg))
      }
    } catch {
      toast.error("Error al enviar el mensaje")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative bg-blue py-16 text-white scroll-m-10">
      <Toaster position="top-center" duration={3000} richColors />
      <div className="md:px-20 px-5">
        <div className="flex flex-col items-stretch justify-between gap-12 lg:flex-row">
          {/* Left column: Form */}
          <div className="flex-1">
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
              Querés anotarte en algún curso?
            </h2>
            <p className="mb-8">
              Contactate con nosotros si querés información sobre nuestras
              formaciones y novedades.
            </p>
            <form action={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  required
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  name="phone"
                  required
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Mensaje"
                required
                rows={4}
                className="w-full rounded-3xl bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
              />
              <div className="flex items-center">
                <input type="checkbox" id="accept" className="mr-2" />
                <label htmlFor="accept">
                  Acepto recibir más información.
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-2/3 h-12 flex items-center justify-center bg-red text-white text-base font-normal hover:opacity-95 disabled:opacity-50 outline-none transition-colors duration-200 mb-12 sm:w-1/3 rounded-2xl"
                >
                  {isLoading ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>

          {/* Right column: Contact info and social links */}
          <div className="flex flex-col lg:w-1/3">
            <div className="mb-8">
              <div className="h-16 w-16 rounded-full bg-white" />
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold">Contacto</h3>
              <p className="text-[14px]">Juramento 1475, Bs As.</p>
              <p className="text-[14px]">info@actualmente.com.ar</p>
              <p className="text-[14px]">11 4033-6320</p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold">Seguinos</h3>
              <div className="flex md:space-x-4 flex-col md:flex-row justify-start items-start gap-3">
                <Link
                  href="https://www.facebook.com/cursosactualmente"
                  className="flex items-center justify-center font-thin text-[14px] hover:underline"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  @cursosactualmente
                </Link>
                <Link
                  href="https://www.instagram.com/actualmennte/"
                  className="flex items-center justify-center font-thin text-[14px] hover:underline"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  @actualmente
                </Link>
              </div>
            </div>
            <Link href="#" className="text-sm hover:underline">
              POLÍTICA DE PRIVACIDAD
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}