"use client"

import type React from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle, Users, Brain, MessageSquare, Building} from "lucide-react"
import { useEffect } from "react"

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
  images?: string[] // New property for images
  detailedInfo?: {
    title: string
    sections: {
      title?: string
      content: React.ReactNode
      icon?: React.ReactNode
    }[]
  }
}

const colorVariants = {
  blue: "bg-[#1b4da1] text-white hover:bg-[#1b4da1]/90",
  green: "bg-[#819b2d] text-white hover:bg-[#819b2d]/90",
  teal: "bg-teal-500 text-white hover:bg-teal-600",
  red: "bg-rose-600 text-white hover:bg-rose-700",
  purple: "bg-violet-600 text-white hover:bg-violet-700",
}

const bgColorVariants = {
  blue: "bg-[#1b4da1]/10",
  green: "bg-[#819b2d]/10",
  teal: "bg-teal-500/10",
  red: "bg-rose-600/10",
  purple: "bg-violet-600/10",
}

// Custom hook to prevent scrollbar shift
const usePreventScrollbarShift = () => {
  useEffect(() => {
    // Function to add padding to body equal to scrollbar width
    const preventScrollbarShift = () => {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      // Add a style element to the head
      const styleElement = document.createElement("style")
      styleElement.innerHTML = `
        :root {
          --scrollbar-width: ${scrollbarWidth}px;
        }
        
        body {
          overflow-y: scroll !important;
          width: 100% !important;
          box-sizing: border-box !important;
          position: static !important;
        }
        
        /* Override Dialog styles to prevent body scroll lock */
        body[data-state="open"] {
          overflow-y: scroll !important;
          padding-right: var(--scrollbar-width) !important;
        }
        
        /* Ensure dialog content has its own scrollbar */
        [role="dialog"] {
          overflow-y: auto;
        }
      `

      document.head.appendChild(styleElement)

      return () => {
        document.head.removeChild(styleElement)
      }
    }

    return preventScrollbarShift()
  }, [])
}

// Image grid gallery component
const ImageGallery = ({ images }: { images: string[] }) => {
  if (!images || images.length === 0) return null

  // Different layouts based on number of images
  if (images.length === 1) {
    return (
      <div className="mt-4 mb-6 rounded-lg overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <Image src={images[0] || "/placeholder.svg"} alt="Service image" fill className="object-cover rounded-lg" />
        </div>
      </div>
    )
  }

  if (images.length === 2) {
    return (
      <div className="mt-4 mb-6 grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Service image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    )
  }

  if (images.length === 3) {
    return (
      <div className="mt-4 mb-6 grid grid-cols-2 gap-2">
        <div className="relative aspect-square w-full">
          <Image src={images[0] || "/placeholder.svg"} alt="Service image 1" fill className="object-cover rounded-lg" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative aspect-square w-full">
            <Image
              src={images[1] || "/placeholder.svg"}
              alt="Service image 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src={images[2] || "/placeholder.svg"}
              alt="Service image 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }

  // 4 or more images
  return (
    <div className="mt-4 mb-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
      {images.slice(0, 6).map((image, index) => (
        <div key={index} className="relative aspect-square w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={`Service image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
      {images.length > 6 && (
        <div className="relative aspect-square w-full bg-black/50 rounded-lg flex items-center justify-center">
          <span className="text-white text-lg font-medium">+{images.length - 6}</span>
        </div>
      )}
    </div>
  )
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, color, href, images, detailedInfo }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg rounded-md">
      <CardHeader className="pb-0 pt-6">
        <div
          className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", bgColorVariants[color])}
        >
          <Image src={icon || "/placeholder.svg"} width={40} height={40} alt={title} className="object-contain" />
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-3 px-4 sm:px-6">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-sm text-muted-foreground text-center">{description}</p>
      </CardContent>

      <CardFooter className="pt-2 px-4 sm:px-6 pb-6">
        {href ? (
          <Button asChild className={cn("rounded-full w-full", colorVariants[color])}>
            <Link href={href}>{href.endsWith(".pdf") ? "Descargar PDF" : "Más info"}</Link>
          </Button>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className={cn("rounded-full w-full", colorVariants[color])}>Más info</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto p-4 sm:p-6">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-xl">
                  <div className={cn("p-2 rounded-full", bgColorVariants[color])}>
                    <Image src={icon || "/placeholder.svg"} width={24} height={24} alt="" className="object-contain" />
                  </div>
                  <span className="text-base sm:text-xl">{detailedInfo?.title || title}</span>
                </DialogTitle>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                {detailedInfo?.sections.map((section, index) => (
                  <div
                    key={index}
                    className={cn(
                      "mb-4 p-3 sm:p-4 rounded-lg",
                      index % 2 === 0 ? bgColorVariants[color] : "bg-muted/30",
                    )}
                  >
                    {section.title && (
                      <div className="flex items-center gap-2 mb-3">
                        {section.icon}
                        <h3 className="font-semibold text-base sm:text-lg">{section.title}</h3>
                      </div>
                    )}
                    <div className="text-xs sm:text-sm">{section.content}</div>
                  </div>
                ))}
              </div>

              {/* Image Gallery Grid - Moved to the end */}
              {images && images.length > 0 && (
                <div className="mt-6">
                  <ImageGallery images={images} />
                </div>
              )}

              <div className="mt-4 flex justify-center">
                <Button className={cn("rounded-full", colorVariants[color])}>
                <Link target="_blank" href={"https://api.whatsapp.com/send/?phone=5491140336320&text&type=phone_number&app_absent=0"}>Contactar</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  )
}

export default function ServicesSection() {
  // Use the custom hook to prevent scrollbar shift
  usePreventScrollbarShift()

  const services: ServiceProps[] = [
    {
      icon: agenda,
      title: "Agenda de cursos",
      description: "Contamos con ofertas educativas dictadas por profesionales expertos.",
      color: "blue",
      href: "/docs/agenda_2025.pdf",
    },
    {
      icon: certification,
      title: "Certificaciones oficiales",
      description: "Capacitación a profesionales que trabajan con niños, jóvenes y adultos con diagnóstico de autismo.",
      color: "green",
      href: "/#certificaciones",  
    },
    {
      icon: lupa,
      title: "Evaluaciones ADOS y ADI-R",
      description: "Evaluaciones diagnosticas ADOS y ADIR: Instrumentos para el diagnóstico de autismo.",
      color: "teal",
      images: ["/services/evaluaciones2.jpg", "/services/evaluaciones.jpg"],
      detailedInfo: {
        title: "Evaluación Diagnóstica Especializada en Autismo",
        sections: [
          {
            content: (
              <div>
                <p className="mb-3">
                  La Lic. Silvia Tedesco es especialista en evaluación diagnóstica del espectro autista en la primera
                  infancia, brindando un enfoque riguroso y basado en evidencia para la detección temprana y el
                  diagnóstico diferencial.
                </p>
                <p>
                  Con una sólida trayectoria en la aplicación de herramientas estandarizadas reconocidas
                  internacionalmente, como ADOS-2 (Escala de Observación para el Diagnóstico del Autismo) y ADI-R
                  (Entrevista para el Diagnóstico del Autismo), su labor se orienta a proporcionar una valoración
                  precisa y fundamentada.
                </p>
              </div>
            ),
          },
          {
            title: "Enfoque Profesional y Rigurosidad Clínica",
            icon: <Brain className="h-5 w-5 text-teal-600" />,
            content: (
              <p>
                Cada evaluación es realizada con un alto nivel de precisión, respetando los protocolos internacionales y
                adaptando el proceso a las necesidades de cada paciente y su familia. La Lic. Tedesco trabaja en
                conjunto con otros profesionales de la salud para ofrecer un diagnóstico integral, facilitando
                intervenciones oportunas y personalizadas.
              </p>
            ),
          },
          {
            title: "¿Cómo se realiza la evaluación?",
            icon: <CheckCircle className="h-5 w-5 text-teal-600" />,
            content: (
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Entrevista clínica y antecedentes:</strong> Revisión exhaustiva del desarrollo del niño/a con
                  la familia.
                </li>
                <li>
                  <strong>Aplicación de pruebas diagnósticas:</strong> Uso de ADOS-2 y ADI-R, herramientas clave para la
                  evaluación del autismo.
                </li>
                <li>
                  <strong>Análisis Interdisciplinario</strong> con el equipo del paciente.
                </li>
                <li>
                  <strong>Devolución de resultados:</strong> Informe detallado y orientaciones para el abordaje
                  terapéutico.
                </li>
              </ul>
            ),
          },
          {
            title: "Dirigido a",
            icon: <Users className="h-5 w-5 text-teal-600" />,
            content: (
              <p>
                Padres que buscan respuestas, profesionales de la salud y equipos interdisciplinarios interesados en
                evaluaciones especializadas.
              </p>
            ),
          },
        ],
      },
    },
    {
      icon: baby,
      title: "Evaluaciones de Desarrollo",
      description: "Escalas de desarrollo, evaluaciones de conductas, evaluaciones neurolinguisticas.",
      color: "red",
      images: [
        "/services/merrill.jpg",
        ],
      detailedInfo: {
        title: "Evaluación del Desarrollo Infantil – Escala Merrill-Palmer",
        sections: [
          {
            content: (
              <p className="mb-3">
                Herramienta de referencia internacional para evaluar el desarrollo en la primera infancia, permitiendo
                identificar fortalezas y posibles dificultades en áreas clave del desarrollo.
              </p>
            ),
          },
          {
            title: "Áreas de evaluación",
            icon: <Brain className="h-5 w-5 text-rose-600" />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>Razonamiento, memoria y resolución de problemas.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>Coordinación y habilidades motoras finas y gruesas.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>Interacción, autonomía y regulación emocional.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <p>Comprensión y expresión para una comunicación efectiva.</p>
                </div>
              </div>
            ),
          },
          {
            title: "¿A quién está dirigida?",
            icon: <Users className="h-5 w-5 text-rose-600" />,
            content: (
              <ul className="space-y-2 list-disc pl-5">
                <li>Profesionales de la salud que requieran informes especializados.</li>
                <li>Familias que buscan evaluar el desarrollo de sus hijos con un enfoque profesional.</li>
              </ul>
            ),
          },
          {
            title: "Especialista a cargo",
            icon: <MessageSquare className="h-5 w-5 text-rose-600" />,
            content: (
              <p>
                <strong>Lic. Silvia Tedesco – Especialista en Merrill-Palmer</strong>
                <br />
                Entrenadora certificada en la Escala Merrill-Palmer, con amplia experiencia en evaluación del desarrollo
                infantil. Colabora desde hace años con Editorial TEA Ediciones de España, titular de los derechos
                exclusivos para habla hispana.
              </p>
            ),
          },
        ],
      },
    },
    {
      icon: computer,
      title: "Supervisiones a profesionales",
      description: "Supervisiones a profesionales y a centros con niños que estén dentro del diagnóstico de autismo.",
      color: "purple",
      images: [
        "/services/supervisiones.jpg",
        "/services/supervisiones2.jpg",

      ],
      detailedInfo: {
        title: "Supervisiones Profesionales y para Centros de Autismo",
        sections: [
          {
            content: (
              <p className="mb-3">
                Si trabajás con niños con Trastorno del Espectro Autista (TEA), la supervisión es una herramienta clave
                para optimizar tu intervención y mejorar la calidad de atención. A través de sesiones personalizadas, te
                ofrecemos acompañamiento y orientación en casos clínicos, estrategias de abordaje y actualización
                constante en metodologías basadas en evidencia.
              </p>
            ),
          },
          {
            title: "¿Por qué invertir en supervisión profesional?",
            icon: <CheckCircle className="h-5 w-5 text-violet-600" />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                  <p>Mayor confianza y seguridad en la práctica profesional.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                  <p>Asesoramiento en la toma de decisiones clínicas y terapéuticas.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                  <p>Acceso a estrategias actualizadas y basadas en evidencia científica.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                  <p>Espacio de análisis de casos para mejorar el abordaje terapéutico.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-violet-600 shrink-0 mt-0.5" />
                  <p>Prevención del burnout y mejora del bienestar profesional.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Dirigido a",
            icon: <Users className="h-5 w-5 text-violet-600" />,
            content: (
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-violet-600 shrink-0 mt-1" />
                  <p>
                    <strong>Profesionales de la salud y la educación</strong> – Psicólogos, fonoaudiólogos, terapistas
                    ocupacionales, psicopedagogos, médicos, y otros especialistas en neurodesarrollo y autismo.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="h-4 w-4 text-violet-600 shrink-0 mt-1" />
                  <p>
                    <strong>Centros especializados en TEA</strong> – Instituciones que buscan optimizar sus programas de
                    intervención y fortalecer su equipo de trabajo.
                  </p>
                </div>
              </div>
            ),
          },
          {
            title: "A cargo de",
            icon: <MessageSquare className="h-5 w-5 text-violet-600" />,
            content: (
              <p>
                <strong>Lic. Silvia Tedesco</strong>, especialista en desarrollo infantil y autismo, con amplia
                experiencia en formación y supervisión de profesionales de la salud y equipos interdisciplinarios.
              </p>
            ),
          },
        ],
      },
    },
  ]

  return (
    <section className="py-8 sm:py-12 px-4 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}

