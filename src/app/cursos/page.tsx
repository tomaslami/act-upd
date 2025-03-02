import Image from "next/image"
import Link from "next/link"

interface Course {
  id: string
  title: string
  date: string
  image: string
  location: string
  href: string
}

const upcomingCourses: Course[] = [
  {
    id: "1",
    title: "Escala de Desarrollo MP",
    date: "28 de febrero y 1 de marzo",
    image: "/cursos/merrilPalmer.png",
    location: "Virtual • Zoom",
    href: "/cursos/MP-R",
  },
  {
    id: "2",
    title: "TEA y Comorbilidad",
    date: "Inicio: 22 y 23 de Marzo",
    image: "/cursos/comorbilidades.png",
    location: "Virtual • Zoom",
    href: "/cursos/tea-comorbilidades"
  },
  {
    id: "3",
    title: "Mujeres y Autismo",
    date: "Inicio: 26 de Abril",
    image: "/cursos/mujeres_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/mujeres-autismo",
  },
  {
    id: "4",
    title: "ADOS-2",
    date: "Inicio: 16, 17 y 18 de Mayo",
    image: "/cursos/ados_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/ados",
  },
  {
    id: "5",
    title: "Comunicación social",
    date: "Inicio: 21 de junio",
    image: "/cursos/comu_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/comunicacion-social",
  },
  {
    id: "6",
    title: "Conducta disruptiva",
    date: "Inicio: 5 y 6 de julio",
    image: "/cursos/conducta_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/conducta-disruptiva",
  },
]

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ">
    <div className="relative w-full pt-[100%]">
      <Image
        src={course.image || "/placeholder.svg"}
        alt={course.title}
        fill
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      {/* Floating Date Badge */}
      {/* <div className="absolute top-2 left-2 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-800">{course.date}</span>
        </div>
      </div> */}
    </div>

    <div className="h-max flex flex-col justify-start items-start pt-4">
      <h3 className="h-[10%] text-lg font-semibold mb-2">{course.title}</h3>
      <p className="h-[25%] text-sm text-blue-600 mb-2">{course.location}</p>
      <p className="h-[25%] text-sm text-blue-600 mb-4">{course.date}</p>
      <Link
        href={course.href}
        className="h-[15%] bg-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue/90 transition-colors"
      >
        Más info
      </Link>
    </div>
  </div>
)

export default function CoursesSection() {
  return (
    <section className="md:px-20 px-5 pt-[150px] pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Cursos</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Descubre nuestra selección de cursos especializados
        </p>
        
        <div className="flex space-x-3 mb-12">
          <button className="px-6 py-2.5 rounded-full text-sm font-semibold bg-blue text-white shadow-sm hover:bg-blue-700 transition-colors">
            PRÓXIMOS CURSOS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {upcomingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
