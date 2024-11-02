import { Toaster } from "sonner"
import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
// import { ContactSchema } from '@/lib/validations/Schema'
// import axios from 'axios'
// import { z } from 'zod'


const Contact = () => {

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   const values = Object.fromEntries(formData.entries())

  //   if (Object.values(values).some((value) => value === "")) {
  //     toast.error("Please fill in all fields")
  //     return
  //   }

  //   try {
  //     const result = ContactSchema.parse(values)

  //     await axios
  //       .post("/api/emails", result)
  //       .then(() => {
  //         toast.success("Message sent successfully")
  //       })
  //       .catch((error) => {
  //         toast.error("An error occurred, please try again later")
  //         console.log(error)
  //       })
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       const errors = error.errors.map((err) => err.message)
  //       errors.forEach((err) => toast.error(err))
  //       return
  //     } else {
  //       toast.error("An error occurred, please try again later")
  //       console.log(error)
  //     }
  //   }
  // }

  return (
    <section id='contact' className="relative bg-blue py-16 text-white scroll-m-10">
      <Toaster position="top-center" duration={3000} richColors />
      <div className="md:px-20 px-5">
        <div className="flex flex-col items-stretch justify-between gap-12 lg:flex-row">
          {/* Left column: Form */}
          <div className="flex-1">
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Querés anotarte en algún curso?</h2>
            <p className="mb-8">
              Contactate con nosotros si querés información sobre nuestras formaciones y novedades.
            </p>
            <form
              action="https://formspree.io/f/xvgokwdv"
              method="POST"
              className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  name='name'
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name='email'
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  name='phone'
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
              </div>
              <textarea
                name='message'
                placeholder="Mensaje"
                rows={4}
                className="w-full rounded-3xl bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
              ></textarea>
              <div className="flex items-center">
                <input type="checkbox" id="accept" className="mr-2" />
                <label htmlFor="accept">Acepto recibir más información.</label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-2/3 h-12 flex items-center justify-center bg-red text-white text-base font-normal hover:opacity-95 outline-none transition-colors duration-200 mb-12 sm:w-1/3 rounded-2xl"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          {/* Right column: Contact info and social links */}
          <div className="flex flex-col lg:w-1/3">
            <div className="mb-8">
              {/* Placeholder for logo */}
              <div className="h-16 w-16 rounded-full bg-white"></div>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold">Contacto</h3>
              <p className='text-[14px]'>Juramento 1475, Bs As.</p>
              <p className='text-[14px]'>info@actualmente.com.ar</p>
              <p className='text-[14px]'>11 4033-6320</p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold">Seguinos</h3>
              <div className="flex md:space-x-4 flex-col md:flex-row justify-start items-start gap-3">
                <Link href="https://www.facebook.com/cursosactualmente" className="flex items-center justify-center font-thin text-[14px] hover:underline">
                  <Facebook className="mr-2 h-5 w-5" />
                  @cursosactualmente
                </Link>
                <Link href="https://www.instagram.com/actualmennte/" className="flex items-center justify-center font-thin text-[14px] hover:underline">
                  <Instagram className="mr-2 h-5 w-5" />
                  @actualmente
                </Link>
              </div>
            </div>
            <Link href="#" className="text-sm hover:underline ">
              POLÍTICA DE PRIVACIDAD
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact