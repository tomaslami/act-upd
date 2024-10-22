import React from "react";
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden md:px-20 pt-[50px] md:pt-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/frontVideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-white">
          <h1 className="mb-4 text-2xl font-bold leading-tight md:text-5xl">
            Capacitando vidas, construyendo un futuro mejor para el autismo.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={"/cursos"} className="w-max h-[50px] bg-[#1b4da1] text-white px-4 py-2 flex justify-center items-center rounded-3xl text-sm">Cursos destacados</Link >
            <Link href={"/#contact"} className="md:w-[184px] w-[163.5px] h-[50px] bg-transparent text-white border-2 px-4 py-2 flex justify-center items-center rounded-3xl hover:bg-white hover:text-black transition-colors text-sm">Contáctanos</Link >
          </div>
        </div>
      </div>
    </div>
  )
}

