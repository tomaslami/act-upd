import Image from 'next/image'
import React from 'react'
import silviaTedesco from '/public/icons/licenciada.png'
import Link from 'next/link'


const AboutUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#6758c7b4] to-[#6158a0] min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 mb-8 md:mb-0">
        <div className="space-y-2 pt-[75px]">
          <div className="inline-block bg-white text-[#7266c6] px-4 py-4 rounded-full text-lg sm:text-3xl font-semibold">
            Hola, soy
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-4xl font-extrabold text-white">
            <span className="inline-block bg-white text-[#7266c6] px-4 py-2 rounded-full">
              Silvia Tedesco
            </span>
          </h1>
        </div>
        <p className="text-white text-base sm:text-lg md:text-lg max-w-2xl">
          Soy Licenciada en Fonoaudiología con abordaje Neurolingüístico de la
          Facultad del Museo Social Argentino (UMSA) y Máster en Autismo,
          otorgado por la Universidad de España. Actualmente, estoy finalizando la
          carrera de Psicología.
        </p>
        <Link
          href="#"
          className="bg-white text-[#7266c6] px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          Conocé más
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-screen flex justify-center items-end">
        <Image
          src={silviaTedesco}
          alt="Silvia Tedesco"
          width={340}
          height={340}
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default AboutUs