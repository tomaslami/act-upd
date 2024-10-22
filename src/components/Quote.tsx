import Image from 'next/image'
import fotoNino from '/public/icons/fotoNino.png'
import quote from '/public/icons/quote.png'

export default function QuoteSection() {
  return (
    <section className="relative md:px-20 px-5 py-12 sm:px-6 lg:px-20 flex justify-between items-center">
      <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start lg:space-x-8">
        <Image
          src={fotoNino}
          alt="Child playing with colorful blocks"
          width={500}
          height={400}
          className="rounded-[2rem]"
        />
        <div className="w-full lg:w-1/2 h-[100%] flex items-start justify-center flex-col gap-14">
          <Image
            src={quote}
            alt="Quote icon"
            width={30}
            height={30}
          />
          <h2 className="text-xl font-black leading-tight text-black sm:text-3xl md:text-3xl">
            El grave error es corregir el autismo, lo importante es potenciar sus habilidades
          </h2>
          <p className=" text-base text-[#e95353] font-extrabold">Javier Arnaiz</p>
        </div>
      </div>
    </section>
  )
}