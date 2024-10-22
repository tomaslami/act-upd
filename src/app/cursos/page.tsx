"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    id: '1',
    title: 'ADOS-2 (Noviembre)',
    subtitle: 'ADOS-2',
    date: 'Inicio: 9, 10 y 11 de Noviembre',
    image: '/icons/ados2-nov.png',
    location: 'Virtual • Zoom',
    href: '/cursos/ados'
  },
  {
    id: '2',
    title: 'TEACHH, Enfocado en niños entre 3 y 5 años',
    subtitle: 'TEACCH',
    date: 'Inicio: 9 al 13 de Diciembre',
    image: '/icons/TEACCH-nov.png',
    location: 'Virtual • Zoom',
    href: '/cursos/teacch'
  },
  {
    id: '3',
    title: 'ADI-R',
    subtitle: 'ADI-R',
    date: 'Inicio: 20 y 21 de Diciembre',
    image: '/icons/ADIR-dic.png',
    location: 'Virtual • Zoom',
    href: '/cursos/adi-r'
  },
  // {
  //   id: '4',
  //   title: 'Intervenciones Conductuales de Desarrollo Naturalistas NDBI introductorio',
  //   subtitle: 'NDBI INTRODUCTORIO',
  //   date: 'Inicio: 15 y 16 de Noviembre',
  //   image: '/icons/Curso-NDBI-nov.jpg',
  //   location: 'Virtual • Zoom',
  //   href: '/cursos/ndbi'
  // },
]

const pastCourses: Course[] = [
  {
    id: '5',
    title: 'PECS - nivel 1',
    subtitle: 'PECS - nivel 1',
    date: 'Inicio: 19 y 20 de Octubre',
    image: '/icons/PECS-1.png',
    location: 'Virtual • Zoom',
    href: '#'
  },
  {
    id: '6',
    title: 'ADI-R',
    subtitle: 'Escala de desarrollo infantil Merrill-Palmer-R',
    date: 'Inicio: 20 y 21 de Diciembre',
    image: '/icons/',
    location: 'Virtual • Zoom',
    href: '#'
  },
  {
    id: '7',
    title: 'Primeras intervenciones en TEA',
    subtitle: 'JUEGO Primeiras intervenciones en TEA',
    date: 'Inicio: 25 de Febrero',
    image: '/icons/',
    location: 'Virtual • Zoom',
    href: '#'
  },
  {
    id: '8',
    title: 'ImPACT: Improving Parents As Communication Teachers',
    subtitle: 'ImPACT INTRODUCTORIO',
    date: 'Inicio: 13 y 14 de Marzo',
    image: '/icons/',
    location: 'Virtual • Zoom',
    href: '#'
  },
  {
    id: '9',
    title: 'Introducción al módulo para niños pequeños de ADOS-2',
    subtitle: 'ADOS-2: Curso Nuevo',
    date: 'Inicio: 18 de Marzo',
    image: '/icons/',
    location: 'Virtual • Zoom',
    href: '#'
  }
]

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className=" bg-white overflow-hidden pb-[75px]">
    <div className="relative h-[300px]">
      <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" className='rounded-xl' />
    </div>
    <div className="h-max flex flex-col justify-start items-start p-4">
      <h3 className="h-[10%] text-lg font-semibold mb-2">{course.subtitle}</h3>
      <p className="h-[25%] text-sm text-gray-600 mb-2">{course.date}</p>
      <p className="h-[25%] text-sm text-blue-600 mb-4">{course.location}</p>
      <Link href={course.href} className="h-[15%] bg-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
        Más info
      </Link>
    </div>
  </div>
)

export default function CoursesSection() {
  const [showUpcoming, setShowUpcoming] = useState(true)

  return (
    <section className="md:px-20 px-5 pt-[150px]">
      <h2 className="text-3xl font-bold mb-8">Cursos</h2>
      <div className="flex space-x-3 mb-8">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold bg-blue border-2  ${showUpcoming
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-blue'
            }`}
          onClick={() => setShowUpcoming(true)}
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
        {(showUpcoming ? upcomingCourses : pastCourses).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}