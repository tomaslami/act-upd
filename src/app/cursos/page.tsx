"use client"

//import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
//import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface Course {
  id: string
  title: string
  date: string
  image: string
  location: string
  href: string
  category?: string
}

const courses: Course[] = [
  {
    id: "1",
    title: "Escala de Desarrollo MP",
    date: "28 de Febrero y 1 de Marzo",
    image: "/cursos/merrilPalmer.png",
    location: "Virtual • Zoom",
    href: "/cursos/MP-R",
    category: "evaluacion",
  },
  {
    id: "2",
    title: "TEA y Comorbilidad",
    date: "Inicio: 22 y 23 de Marzo",
    image: "/cursos/comorbilidades.png",
    location: "Virtual • Zoom",
    href: "/cursos/tea-comorbilidades",
    category: "intervencion",
  },
  {
    id: "3",
    title: "ADOS-2",
    date: "Inicio: 16, 17 y 18 de Mayo",
    image: "/cursos/ados_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/ados",
    category: "evaluacion",
  },
  {
    id: "4",
    title: "Comunicación social",
    date: "Inicio: 21 de junio",
    image: "/cursos/comu_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/comunicacion-social",
    category: "comunicacion",
  },
  {
    id: "5",
    title: "Conducta disruptiva",
    date: "Inicio: 5 y 6 de julio",
    image: "/cursos/conducta_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/conducta-disruptiva",
    category: "intervencion",
  },
  {
    id: "6",
    title: "Mujeres y Autismo",
    date: "Inicio: 26 de Abril",
    image: "/cursos/mujeres_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/mujeres-autismo",
    category: "investigacion",
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
  //const [filter, setFilter] = useState<string>("todos")

  // const filteredCourses =
  //   filter === "todos"
  //     ? courses
  //     : courses.filter((course) => course.category === filter)

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

        {/* <Tabs defaultValue="todos" className="mb-10">
          <TabsList className="bg-gray-100 max-sm:grid max-sm:grid-cols-2 max-sm:h-auto max-sm:gap-4 p-1 rounded-md w-full max-w-3xl mx-auto flex justify-between">
            <TabsTrigger
              value="todos"
              onClick={() => setFilter("todos")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-sm:text-xs"
            >
              Todos los cursos
            </TabsTrigger>
            <TabsTrigger
              value="evaluacion"
              onClick={() => setFilter("evaluacion")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-sm:text-xs"
            >
              Evaluación
            </TabsTrigger>
            <TabsTrigger
              value="intervencion"
              onClick={() => setFilter("intervencion")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-sm:text-xs"
            >
              Intervención
            </TabsTrigger>
            <TabsTrigger
              value="comunicacion"
              onClick={() => setFilter("comunicacion")}
              className="data-[state=active]:bg-[#1b4da1] data-[state=active]:text-white rounded-md w-full max-sm:text-xs"
            >
              Comunicación
            </TabsTrigger>
          </TabsList>
        </Tabs> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-[#1b4da1] text-[#1b4da1] hover:bg-[#1b4da1] hover:text-white"
          >
            <Clock className="mr-2 h-4 w-4" />
            Ver cursos anteriores
          </Button>
        </div> */}
      </div>
    </section>
  )
}
