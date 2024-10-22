import { Camera, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id='contact' className="relative bg-blue py-16 text-white scroll-m-10">
      <div className="md:px-20 px-5">
        <div className="flex flex-col items-stretch justify-between gap-12 lg:flex-row">
          {/* Left column: Form */}
          <div className="flex-1">
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Querés anotarte en algún curso?</h2>
            <p className="mb-8">
              Contactate con nosotros si querés información sobre nuestras formaciones y novedades.
            </p>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full rounded-full bg-white px-4 py-2 font-semibold text-blue placeholder:text-blue placeholder:font-semibold focus:outline-none"
                />
              </div>
              <textarea
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
                  className="rounded-full bg-red px-14 py-2 font-semibold text-white transition-colors hover:bg-red-600"
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
              <p className='text-[14px]'>11 4033.6320</p>
            </div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold">Seguinos</h3>
              <div className="flex md:space-x-4 flex-col md:flex-row justify-center md:justify-start items-center gap-3">
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