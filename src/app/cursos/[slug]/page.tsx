"use client"

import { notFound, useRouter } from "next/navigation"
import { FormEvent, useCallback, useEffect, useState } from "react"
import type { Cursos as CursosType } from "@/types/types"
import data from "../../../cursos.json"
import {
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  BookOpen,
  Mail,
  Share2,
  ChevronRight,
} from "lucide-react"
import { initMercadoPago } from "@mercadopago/sdk-react"
import axios from "axios"
import { v4 as UUIDv4 } from "uuid"
import { toast, Toaster } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

initMercadoPago("APP_USR-abeb9c5b-478e-4b5a-8304-9a513c20fae4")

type Response = { id: string; init_point?: string }

export default function CourseDetails({
  params,
}: {
  params: { slug: string }
}) {
  const [curso, setCurso] = useState<CursosType | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  //Get preference_id and init_point for payment
  const handlePayment = async (): Promise<Response | null> => {
    try {
      const response = await axios.post("/api/mercadopago", {
        id: UUIDv4(),
        title: curso?.value,
        quantity: 1,
        price: curso?.price,
        course_avatar: curso?.course_avatar,
        subtitle: curso?.subtitle,
        date: curso?.date,
        modality: curso?.modality,
      })

      if (!response.data.id) {
        toast.error("Error al procesar el pago")
        return null
      }

      return response.data
    } catch (error) {
      console.error(error)
      toast.error("Error al procesar el pago")
      return null
    }
  }

  const handleEnrollment = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Get preferenceId before continuing
      const newPreferenceId = await handlePayment()

      if (!newPreferenceId?.id || !newPreferenceId?.init_point) {
        toast.error("Ha ocurrido un error, intente nuevamente")
        setIsLoading(false)
        return
      }

      router.push(
        `/checkout?total=${curso?.price}&init_point=${newPreferenceId.init_point}&title=${curso?.value}&subtitle=${curso?.subtitle}&date=${curso?.date}&modality=${curso?.modality}&objectives=${curso?.objectives}&topics=${curso?.topics}&course_avatar=${curso?.course_avatar}`
      )
    } catch (error) {
      console.error(error)
      toast.error("Ha ocurrido un error, intente nuevamente")
      setIsLoading(false)
    }
  }

  const verifyData = useCallback(() => {
    if (!params.slug) {
      notFound()
    }
    const foundCurso = data.curso.find(
      (curso) => curso.title === params.slug
    ) as CursosType
    if (!foundCurso) {
      notFound()
    }
    return foundCurso
  }, [params.slug])

  useEffect(() => {
    const foundCurso = verifyData()
    if (foundCurso) setCurso(foundCurso)
  }, [verifyData])

  if (!curso) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Toaster position="top-center" richColors />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-300 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-300 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 px-3 py-1 bg-sky-100 text-[#1b4da1] hover:bg-sky-100 border-none">
              Curso Especializado
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold text-[#1b4da1] mb-4 leading-tight">
              {curso.value}
            </h1>

            <p className="text-xl md:text-2xl text-[#e74322] mb-8 font-medium">
              {curso.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Badge
                variant="outline"
                className="px-4 py-2 flex items-center gap-2 text-sm border-blue-200"
              >
                <Calendar className="w-4 h-4 text-[#1b4da1]" />
                <span>{curso.date}</span>
              </Badge>

              <Badge
                variant="outline"
                className="px-4 py-2 flex items-center gap-2 text-sm border-blue-200"
              >
                <Users className="w-4 h-4 text-[#1b4da1]" />
                <span>{curso.modality}</span>
              </Badge>

              {/* {curso.price && (
                <Badge
                  variant="outline"
                  className="px-4 py-2 flex items-center gap-2 text-sm border-blue-200"
                >
                  <span className="font-bold text-[#1b4da1]">
                    ${curso.price}
                  </span>
                </Badge>
              )} */}
            </div>

            <Button
              onClick={handleEnrollment}
              size="lg"
              disabled={isLoading}
              className="bg-[#1b4da1] hover:bg-[#1b4da1]/90 text-white rounded-full px-8"
            >
              {isLoading ? "Procesando..." : "Inscribirse al curso"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20 flex items-center justify-center flex-col">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto mb-8 bg-white border rounded-lg p-1 shadow-sm flex items-center justify-center">
            <TabsTrigger
              value="about"
              className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-[#1b4da1]"
            >
              Sobre el curso
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-[#1b4da1]"
            >
              Contenido
            </TabsTrigger>
            <TabsTrigger
              value="instructors"
              className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-[#1b4da1]"
            >
              Disertantes
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="flex-1 data-[state=active]:bg-blue-50 data-[state=active]:text-[#1b4da1]"
            >
              Detalles
            </TabsTrigger>
          </TabsList>

          <div className="max-w-5xl mx-auto">
            {/* About Tab */}
            <TabsContent value="about" className="space-y-8">
              <Card className="border-none shadow-md overflow-hidden">
                <CardHeader className="bg-[#1b4da1]/5 border-b">
                  <CardTitle className="text-2xl text-[#1b4da1]">
                    Sobre el Curso
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 leading-relaxed">{curso.about}</p>
                </CardContent>
              </Card>

              {curso.objectives && (
                <Card className="border-none shadow-md overflow-hidden">
                  <CardHeader className="bg-[#1b4da1]/5 border-b">
                    <CardTitle className="text-2xl text-[#1b4da1]">
                      Objetivos del curso
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {curso.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 bg-blue-100 rounded-full p-1">
                            <CheckCircle className="w-5 h-5 text-[#1b4da1]" />
                          </div>
                          <p className="text-gray-700">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-8">
              <Card className="border-none shadow-md overflow-hidden">
                <CardHeader className="bg-[#1b4da1]/5 border-b">
                  <CardTitle className="text-2xl text-[#1b4da1]">
                    Contenido del curso
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {curso.topics?.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
                      >
                        <div className="mt-1 bg-blue-100 rounded-full p-1">
                          <BookOpen className="w-5 h-5 text-[#1b4da1]" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Instructors Tab */}
            <TabsContent value="instructors" className="space-y-8">
              <Card className="border-none shadow-md overflow-hidden">
                <CardHeader className="bg-[#1b4da1]/5 border-b">
                  <CardTitle className="text-2xl text-[#1b4da1]">
                    Dictado por
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap justify-center gap-8">
                    {Array.isArray(curso.instructor) &&
                    Array.isArray(curso.avatar)
                      ? curso.instructor.map((speaker, index) => (
                          <InstructorCard
                            key={index}
                            name={speaker}
                            image={curso.avatar[index]}
                          />
                        ))
                      : curso.instructor &&
                        curso.avatar && (
                          <InstructorCard
                            name={curso.instructor}
                            image={curso.avatar}
                          />
                        )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md overflow-hidden">
                  <CardHeader className="bg-[#1b4da1]/5 border-b">
                    <CardTitle className="text-xl text-[#1b4da1]">
                      Incluye
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#e74322] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Para participar en esta formación, es obligatorio
                          contar con el manual y los protocolos
                          correspondientes.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#e74322] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          El curso incluye el material necesario para su
                          desarrollo.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#e74322] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          ¡Para más información y consultas, escríbeme por
                          mensaje privado!
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md overflow-hidden">
                  <CardHeader className="bg-[#1b4da1]/5 border-b">
                    <CardTitle className="text-xl text-[#1b4da1]">
                      Requisitos técnicos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1b4da1] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Título de grado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1b4da1] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Cámara y micrófono en condiciones óptimas
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1b4da1] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Se recomienda contar con la herramienta necesaria para
                          el entrenamiento en la aplicación y la codificación
                          final
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {/* Contact Section */}
        <section className="mt-16 max-w-3xl mx-auto">
          <Card className="border-none shadow-md overflow-hidden bg-gradient-to-r from-[#1b4da1]/5 to-white">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#1b4da1] mb-2">
                  ¿Te gustaría sumarte?
                </h2>
                <p className="text-gray-600">
                  Contáctanos para más información o para inscribirte en este
                  curso
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-[#1b4da1] text-[#1b4da1] hover:bg-[#1b4da1] hover:text-white"
                >
                  <Link
                    href={`mailto:cursosactualmente@gmail.com`}
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    cursosactualmente@gmail.com
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-[#1b4da1] text-[#1b4da1] hover:bg-[#1b4da1] hover:text-white"
                >
                  <Link
                    href={`https://wa.me/5491140336320`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-[#1b4da1] text-[#1b4da1] hover:bg-[#1b4da1] hover:text-white"
                >
                  <button
                    className="flex items-center gap-2"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      toast.success("Enlace copiado al portapapeles")
                    }}
                  >
                    <Share2 className="w-4 h-4" />
                    Compartir
                  </button>
                </Button>
              </div>

              <div className="text-center">
                <Button
                  onClick={handleEnrollment}
                  size="lg"
                  disabled={isLoading}
                  className="bg-[#1b4da1] hover:bg-[#1b4da1]/90 text-white rounded-full px-8"
                >
                  {isLoading ? "Procesando..." : "Inscribirse al curso"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

function InstructorCard({
  name,
  image,
}: {
  name: string | string[]
  image: string
}) {
  return (
    <Card className="border-none shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-white shadow-md">
          <AvatarImage src={image} alt={"Disertante"} />
          <AvatarFallback className="bg-[#1b4da1] text-white text-xl">
            {Array.isArray(name)
              ? name
                  .map((word) => word.charAt(0))
                  .join("")
                  .toUpperCase()
              : name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-xl font-semibold text-[#1b4da1] mb-1">{name}</h3>
        {/* <p>

        </p> */}
      </CardContent>
    </Card>
  )
}
