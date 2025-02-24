import Image from "next/image"
import silviaTedesco from "/public/icons/licenciada.png"
import Link from "next/link"

const AboutUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#6758c7b4] to-[#6158a0] min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8 md:px-8 lg:px-16">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 mb-8 md:mb-0 md:pr-4">
        <div className="space-y-2 pt-[75px]">
          <div className="inline-block bg-white text-[#7266c6] px-3 py-2 sm:px-4 sm:py-3 rounded-full text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            Hola, soy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            <span className="inline-block bg-white text-[#7266c6] px-3 py-1 sm:px-4 sm:py-2 rounded-full">
              Silvia Tedesco
            </span>
          </h1>
        </div>
        <p className="text-white  sm:text-base md:text-lg max-w-2xl">
        Soy Licenciada en Fonoaudiología con abordaje Neurolingüístico por la Universidad del Museo Social Argentino (UMSA) y Máster en Autismo en España. Actualmente, estoy finalizando la carrera de Psicología.
        </p>
        <Link
          href="#"
          className="bg-white text-[#7266c6] px-4 py-2 sm:px-6 sm:py-2 rounded-full text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          Conocé más
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex justify-center items-end">
        <Image
          src={silviaTedesco || "/placeholder.svg"}
          alt="Silvia Tedesco"
          width={340}
          height={340}
          className="object-cover w-auto h-full max-h-[80vh]"
        />
      </div>
    </section>
  )
}

export default AboutUs

