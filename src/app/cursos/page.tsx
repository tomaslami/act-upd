"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface Course {
  id: string
  title: string
  date: string
  image: string
  location: string
  href: string
  category?: string
  month?: string
}

const courses: Course[] = [
  // {
  //   id: "1",
  //   title: "Escala de Desarrollo MP",
  //   date: "28 de Febrero y 1 de Marzo",
  //   image: "/cursos/merrilPalmer.png",
  //   location: "Virtual • Zoom",
  //   href: "/cursos/MP-R",
  //   category: "evaluacion",
  //   month: "marzo",
  // },
  {
    id: "2",
    title: "Comorbilidades",
    date: "Inicio: 22 y 23 de Marzo",
    image: "/cursos/comorbilidades.png",
    location: "Virtual • Zoom",
    href: "/cursos/comorbilidades",
    category: "intervencion",
    month: "marzo",
  },
  {
    id: "3",
    title: "ADOS-2",
    date: "Inicio: 16, 17 y 18 de Mayo",
    image: "/cursos/ados_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/ados",
    category: "evaluacion",
    month: "mayo",
  },
  {
    id: "4",
    title: "Mujeres y Autismo",
    date: "Inicio: 24 de Mayo",
    image: "/cursos/mujeres_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/mujeres-autismo",
    category: "investigacion",
    month: "mayo",
  },
  {
    id: "5",
    title: "Comunicación social",
    date: "Inicio: 21 de junio",
    image: "/cursos/comu_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/comunicacion-social",
    category: "comunicacion",
    month: "junio",
  },
  {
    id: "6",
    title: "Conducta disruptiva",
    date: "Inicio: 5 y 6 de julio",
    image: "/cursos/conducta_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/conducta-disruptiva",
    category: "intervencion",
    month: "julio",
  },
  {
    id: "7",
    title: "Selectividad Alimentaria",
    date: "Inicio: 23 y 24 de Agosto",
    image: "/cursos/selectividad_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/selectividad-alimentaria",
    category: "comunicacion",
    month: "agosto",
  },
  {
    id: "8",
    title: "Formación PEERS®",
    date: "Inicio: 13 al 15 de Agosto",
    image: "/cursos/posteo_peers.png",
    location: "Virtual • Zoom",
    href: "/cursos/peers-preescolar",
    category: "evaluacion",
    month: "agosto",
  },
  {
    id: "9",
    title: "Actualización en ADOS-2",
    date: "Inicio: 13 de septiembre",
    image: "/cursos/posteo_ActualizacionAdos.png",
    location: "Virtual • Zoom",
    href: "/cursos/ados-actualizacion",
    category: "evaluacion",
    month: "septiembre",
  },
  {
    id: "10",
    title: "Actualización en ADI-R",
    date: "Inicio: 27 de septiembre",
    image: "/cursos/posteo_adir_actualizacion.png",
    location: "Virtual • Zoom",
    href: "/cursos/adir-actualizacion",
    category: "intervencion",
    month: "septiembre",
  },
  {
    id: "11",
    title: "Modelo Jasper",
    date: "Inicio: 4 de Octubre",
    image: "/cursos/POSTEO_JASPER.png",
    location: "Virtual • Zoom",
    href: "/cursos/modelo-jasper",
    category: "evaluacion",
    month: "octubre",
  },
  {
    id: "12",
    title: "Escala de Desarrollo MP",
    date: "Inicio: 1 y 9 de Octubre",
    image: "/cursos/POSTEO_MERRIL_OCTUBRE.png",
    location: "Virtual • Zoom",
    href: "/cursos/merrill-palmer-oct",
    category: "evaluacion",
    month: "octubre",
  },
  {
    id: "13",
    title: "PECS - Nivel 1",
    date: "Inicio: 8 y 9 de Noviembre",
    image: "/cursos/pecs_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/pecs-nivel1",
    category: "evaluacion",
    month: "noviembre",
  },
  {
    id: "14",
    title: "Transición de Pecs",
    date: "Inicio: 29 de Noviembre",
    image: "/cursos/posteo_transicion.png",
    location: "Virtual • Zoom",
    href: "/cursos/transicion-pecs",
    category: "evaluacion",
    month: "noviembre",
  },
  {
    id: "15",
    title: "Formación TEACCH",
    date: "Inicio: 1 al 5 de Diciembre",
    image: "/cursos/posteo_teacch.png",
    location: "Virtual • Zoom",
    href: "/cursos/teacch-educacion",
    category: "intervencion",
    month: "diciembre",
  },
]

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-none shadow-md h-full group hover:shadow-lg transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-3 group-hover:text-[#1b4da1] transition-colors">
            {course.title}
          </h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-[#1b4da1]" />
              {course.location}
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-[#1b4da1]" />
              {course.date}
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-5 pb-5 pt-0">
          <Button
            asChild
            variant="default"
            className="w-full bg-[#1b4da1] hover:bg-[#1b4da1]/90 rounded-full transition-all"
          >
            <Link href={course.href}>
              <span>Más información</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function CoursesSection() {
  const [filter, setFilter] = useState<string>("todos")

  const filteredCourses = useMemo(() => {
    if (filter === "todos") return courses

    if (filter === "mar-abr-may") {
      return courses.filter((course) =>
        ["marzo", "abril", "mayo"].includes(course.month || "")
      )
    }

    if (filter === "jun-jul-ago") {
      return courses.filter((course) =>
        ["junio", "julio", "agosto"].includes(course.month || "")
      )
    }

    if (filter === "sep-oct") {
      return courses.filter((course) =>
        ["septiembre", "octubre"].includes(course.month || "")
      )
    }

    if (filter === "nov-dic") {
      return courses.filter((course) =>
        ["noviembre", "diciembre"].includes(course.month || "")
      )
    }

    return courses
  }, [filter])

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto mt-6">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-3 px-4 py-1 border-[#1b4da1]/20 text-[#1b4da1] font-medium"
          >
            Formación Especializada
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Cursos y Certificaciones
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto max-md:text-sm">
            Descubre nuestra selección de cursos especializados impartidos por
            profesionales expertos en el campo del autismo y el neurodesarrollo.
          </p>
        </div>

        <Tabs defaultValue="todos" className="mb-10">
          <TabsList className="bg-gray-100 max-sm:grid max-sm:grid-cols-2 max-sm:h-auto max-sm:gap-2 p-1 rounded-md w-full max-w-3xl mx-auto flex flex-wrap justify-between">
            <TabsTrigger
              value="todos"
              onClick={() => setFilter("todos")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-w-[calc(100%/5-0.5rem)] max-sm:max-w-full max-sm:text-xs"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="mar-abr-may"
              onClick={() => setFilter("mar-abr-may")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-w-[calc(100%/5-0.5rem)] max-sm:max-w-full max-sm:text-xs"
            >
              Mar - May
            </TabsTrigger>
            <TabsTrigger
              value="jun-jul-ago"
              onClick={() => setFilter("jun-jul-ago")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-w-[calc(100%/5-0.5rem)] max-sm:max-w-full max-sm:text-xs"
            >
              Jun - Ago
            </TabsTrigger>
            <TabsTrigger
              value="sep-oct"
              onClick={() => setFilter("sep-oct")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-w-[calc(100%/5-0.5rem)] max-sm:max-w-full max-sm:text-xs"
            >
              Sep - Oct
            </TabsTrigger>
            <TabsTrigger
              value="nov-dic"
              onClick={() => setFilter("nov-dic")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-w-[calc(100%/5-0.5rem)] max-sm:max-w-full max-sm:text-xs"
            >
              Nov - Dic
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
