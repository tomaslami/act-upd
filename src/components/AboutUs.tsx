import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section className="relative md:h-screen min-h-screen w-full bg-gradient-to-b from-[#6758c7] to-[#5E56A0] md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column: Text content */}
          <div className="flex flex-col space-y-6 pt-16 md:pt-0  mb-10">
            <div className="space-y-3">
              <Badge
                variant="outline"
                className="bg-white text-[#6758c7] border-none px-4 py-1.5 text-base font-medium"
              >
                Hola, somos
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                <span className="inline-block bg-white text-[#6758c7] px-4 py-2 rounded-full">
                  Actualmente
                </span>
              </h1>
            </div>

            <Card className="bg-white/10 border-none backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-white text-base md:text-lg leading-relaxed">
                En Actualmente, formamos a profesionales de la salud mental con capacitaciones basadas en la evidencia, especializadas en autismo y desarrollo infantil. Desde hace más de 15 años, ofrecemos formaciones oficiales con metodologías reconocidas a nivel internacional, como el Modelo Denver (ESDM), JASPER, TEACCH y PEERS.

                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right column: Image */}
          <div className="relative h-[50vh] md:h-auto flex items-end justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-none h-full">
              <Image
                src="/icons/licenciada.png"
                alt="Silvia Tedesco"
                width={400}
                height={600}
                className="object-contain object-bottom h-full w-auto mx-auto md:mx-0"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-1/4 md:translate-x-0 w-[80%] h-16 bg-white/10 backdrop-blur-sm rounded-full blur-md -z-10" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-white/5 rounded-full blur-xl" />
    </section>
  )
}
