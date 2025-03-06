import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CourseProps {
  status: string
  title: string
  date: string
  color: "blue" | "green" | "purple" | "red"
}

const colorVariants = {
  blue: {
    border: "border-[#1b4da1] border-l-4",
    badge: "bg-[#1b4da1] hover:bg-[#1b4da1]/90",
    title: "text-[#1b4da1]",
  },
  green: {
    border: "border-[#889A3A] border-l-4",
    badge: "bg-[#889A3A] hover:bg-[#889A3A]/90",
    title: "text-[#889A3A]",
  },
  purple: {
    border: "border-[#5E56A0] border-l-4",
    badge: "bg-[#5E56A0] hover:bg-[#5E56A0]/90",
    title: "text-[#5E56A0]",
  },
  red: {
    border: "border-[#C73C20] border-l-4",
    badge: "bg-[#C73C20] hover:bg-[#C73C20]/90",
    title: "text-[#C73C20]",
  },
}

const CourseCard: React.FC<CourseProps> = ({ status, title, date, color }) => {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden shadow-md transition-all duration-200 hover:shadow-lg",
        colorVariants[color].border
      )}
    >
      <CardContent className="p-5 flex flex-col gap-4">
        <Badge
          className={cn(
            "w-fit text-xs font-medium rounded-full px-3 py-1",
            colorVariants[color].badge
          )}
        >
          {status}
        </Badge>

        <h3
          className={cn(
            "text-xl font-bold leading-tight",
            colorVariants[color].title
          )}
        >
          {title}
        </h3>

        <p className="text-sm font-medium text-gray-700">{date}</p>
      </CardContent>
    </Card>
  )
}

export default function CoursesSection() {
  const courses: CourseProps[] = [
    {
      status: "Finalizado",
      title: "Teacch Autism Program Oficial",
      date: "Dictado: 8 A 11 de Agosto 2022",
      color: "blue",
    },
    {
      status: "Finalizado",
      title: "Certificación Oficial ADI-R",
      date: "Dictado: 8, 9 y 10 de Abril 2022",
      color: "green",
    },
    {
      status: "Finalizado",
      title: "Escala de desarrollo infantil Merrill-Palmer-R",
      date: "Inicio: 28 de febrero y 1 de marzo",
      color: "purple",
    },
    {
      status: "Próximo",
      title: "Certificación oficial ADOS-2",
      date: "Inicio: 16, 17 y 18 de Mayo",
      color: "red",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Cursos dictados
        </h2>

        <p className="mb-8 text-gray-700 leading-relaxed max-w-6xl">
          Desde el año 2014 comenzamos con el dictado de cursos de certificación
          presenciales en una clínica familiar. Hoy contamos con más de 20
          capacitaciones para profesionales y familias. La experiencia y
          tecnología nos ha permitido dictar cursos oficiales con instituciones
          de renombre como la universidad de Boston, la Universidad de carolina
          del norte, instituciones como Pyramid educational Consultants, la
          certificacion oficial de Ados y Adir con IGAIN Instituto Global
          Atención Integral al Neurodesarrollo, con editoriales internacionales
          como TEAediciones de España entre otros!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
