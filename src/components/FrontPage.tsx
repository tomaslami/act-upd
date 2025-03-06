import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
        <div className="max-w-2xl text-white max-lg:max-w-lg">
          <h1 className="mb-4 text-2xl font-bold leading-tight md:text-5xl max-sm:text-center">
            Capacitando vidas, construyendo un futuro mejor para el autismo.
          </h1>
          <div className="mt-8 flex flex-row gap-4 max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <Link
              className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center"
              href="/cursos"
            >
              <Button className="md:w-[184px] w-[163.5px] max-sm:w-3/4 h-[50px] bg-[#1b4da1] hover:bg-[#1b4da1]/90 text-white rounded-3xl">
                Cursos destacados
              </Button>
            </Link>

            <Link
              className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center"
              href="#contact"
            >
              <Button
                variant="outline"
                className="md:w-[184px] w-[163.5px] h-[50px] max-sm:w-3/4 bg-transparent text-white border-2 px-4 py-2 rounded-3xl hover:bg-white hover:text-black transition-colors text-sm"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
