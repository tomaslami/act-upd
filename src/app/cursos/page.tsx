import Image from "next/image"
import Link from "next/link"

interface Course {
  id: string
  title: string
  subtitle: string
  date: string
  image: string
  location: string
  href: string
}

const upcomingCourses: Course[] = [
  {
    id: "1",
    title: "Formación en la Escala de Desarrollo Merrill-Palmer-R",
    subtitle: "Escala de Desarrollo MP",
    date: "28 de febrero y 1 de marzo",
    image: "/cursos/merrilPalmer.png",
    location: "Virtual • Zoom",
    href: "/cursos/MP-R",
  },
  {
    id: "2",
    title: "ADOS-2 (Noviembre)",
    subtitle: "ADOS-2",
    date: "Inicio: 16, 17 y 18 de Mayo",
    image: "/cursos/ados_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/ados",
  },
  // {
  //   id: '3',
  //   title: 'TEACHH, Enfocado en niños entre 3 y 5 años',
  //   subtitle: 'TEACCH',
  //   date: 'Inicio: 9 al 13 de Diciembre',
  //   image: '/icons/TEACCH-nov.png',
  //   location: 'Virtual • Zoom',
  //   href: '/cursos/teacch'
  // },
  // {
  //   id: '4',
  //   title: 'ADI-R',
  //   subtitle: 'ADI-R',
  //   date: 'Inicio: 20 y 21 de Diciembre',
  //   image: '/icons/ADIR-dic.png',
  //   location: 'Virtual • Zoom',
  //   href: '/cursos/adi-r'
  // },
  {
    id: "5",
    title: "Comunicación social en niños con autismo",
    subtitle: "Trabajo junto a las familias.",
    date: "FECHA: 21 de junio",
    image: "/cursos/ados_posteo.png",
    location: "Virtual • Zoom",
    href: "/cursos/comunicacion-social",
  },
]

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className=" bg-white overflow-hidden pb-[75px]">
    <div className="relative h-[300px]">
      <Image
        src={course.image}
        alt={course.title}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
    <div className="h-max flex flex-col justify-start items-start p-4">
      <h3 className="h-[10%] text-lg font-semibold mb-2">{course.subtitle}</h3>
      <p className="h-[25%] text-sm text-gray-600 mb-2">{course.date}</p>
      <p className="h-[25%] text-sm text-blue-600 mb-4">{course.location}</p>
      <Link
        href={course.href}
        className="h-[15%] bg-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Más info
      </Link>
    </div>
  </div>
)

export default function CoursesSection() {
  return (
    <section className="md:px-20 px-5 pt-[150px]">
      <h2 className="text-3xl font-bold mb-8">Cursos</h2>
      <div className="flex space-x-3 mb-8">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold bg-blue border-2 text-white`}
        >
          PROXIMOS CURSOS
        </button>
        {/* <button
          className={`px-4 py-2 rounded-full text-sm font-semibold  bg-blue border-2 ${!showUpcoming
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-100 border-2 border-blue transition-colors'
            }`}
          onClick={() => setShowUpcoming(false)}
        >
          CURSOS PASADOS
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {upcomingCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}
