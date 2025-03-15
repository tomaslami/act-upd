import type React from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Import icons
import agenda from "/public/icons/agenda.png"
import certification from "/public/icons/certification.svg"
import lupa from "/public/icons/lupa-2.svg"
import baby from "/public/icons/bebe.svg"
import computer from "/public/icons/computer.svg"

interface ServiceProps {
  icon: StaticImageData
  title: string
  description: string
  color: "blue" | "green" | "teal" | "red" | "purple"
  href?: string
}

const colorVariants = {
  blue: "bg-[#1b4da1] text-white hover:bg-[#1b4da1]/90",
  green: "bg-[#819b2d] text-white hover:bg-[#819b2d]/90",
  teal: "bg-teal-500 text-white hover:bg-teal-600",
  red: "bg-rose-600 text-white hover:bg-rose-700",
  purple: "bg-violet-600 text-white hover:bg-violet-700",
}

const ServiceCard: React.FC<ServiceProps> = ({
  icon,
  title,
  description,
  color,
  href,
}) => {
  //make the logic to put any href, incluiding the pdfUrl

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg rounded-md">
      <CardHeader className="pb-0">
        <div
          className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          )}
        >
          <Image
            src={icon || "/placeholder.svg"}
            width={40}
            height={40}
            alt={title}
            className="object-contain"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-3">
        <h3 className="text-lg font-bold text-center sm:text-start">{title}</h3>
        <p className="text-sm text-muted-foreground text-center sm:text-start">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          asChild
          className={cn("rounded-full w-full sm:w-auto", colorVariants[color])}
        >
          <Link href={href || "#"} download="agenda_2025.pdf">Más info</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function ServicesSection() {
  const services: ServiceProps[] = [
    {
      icon: agenda,
      title: "Agenda de cursos",
      description:
        "Contamos con ofertas educativas dictadas por profesionales expertos.",
      color: "blue",
      href: "/docs/agenda_2025.pdf",
    },
    {
      icon: certification,
      title: "Certificaciones oficiales",
      description:
        "Capacitación a profesionales que trabajan con niños, jóvenes y adultos con diagnóstico de autismo.",
      color: "green",
      href: "/#certificaciones",
    },
    {
      icon: lupa,
      title: "Evaluaciones ADOS y ADI-R",
      description:
        "Evaluaciones diagnosticas ADOS y ADIR: Instrumentos para el diagnóstico de autismo.",
      color: "teal",
      href: "/cursos",
    },
    {
      icon: baby,
      title: "Evaluaciones de Desarrollo",
      description:
        "Escalas de desarrollo, evaluaciones de conductas, evaluaciones neurolinguisticas.",
      color: "red",
      href: "/cursos",
    },
    {
      icon: computer,
      title: "Supervisiones a profesionales",
      description:
        "Supervisiones a profesionales y a centros con niños que estén dentro del diagnóstico de autismo.",
      color: "purple",
      href: "/cursos",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
