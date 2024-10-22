import React from 'react'

interface CourseProps {
  status: string
  title: string
  date: string
  color: 'blue' | 'green' | 'purple' | 'red'
}

const CourseBox: React.FC<CourseProps> = ({ status, title, date, color }) => {
  const colorClasses = {
    blue: { border: 'border-blue border-[4px]', text: 'text-blue ', bg: 'bg-blue' },
    green: { border: 'border-[#889A3A] border-[4px]', text: 'text-green ', bg: 'bg-green' },
    purple: { border: 'border-[#5E56A0] border-[4px]', text: 'text-purple ', bg: 'bg-purple' },
    red: { border: 'border-[#C73C20] border-[4px]', text: 'text-red ', bg: 'bg-red' },
  }

  return (
    <div className={`border-2 rounded-lg p-4 bg-white ${colorClasses[color].border} flex justify-center items-start flex-col gap-3`}>
      <div className={`h-1/4 flex items-center justify-center text-xs font-normal mb-2 rounded-full px-3 py-1  text-white ${colorClasses[color].bg}`}>{status}</div>
      <h3 className={`h-1/3 flex items-center justify-center text-xl font-extrabold mb-2 ${colorClasses[color].text}`}>{title}</h3>
      <p className="h-1/3 flex items-center justify-center text-sm text-black font-semibold">{date}</p>
    </div>
  )
}

export default function Courses() {
  const courses: CourseProps[] = [
    {
      status: 'Finalizado',
      title: 'Teacch Autism Program Oficial',
      date: 'Dictado: 8 A 11 de Agosto 2022',
      color: 'blue',
    },
    {
      status: 'Finalizado',
      title: 'Certificación Oficial ADI-R',
      date: 'Dictado: 8, 9 y 10 de Abril 2022',
      color: 'green',
    },
    {
      status: 'Finalizado',
      title: 'Escala de desarrollo infantil Merrill-Palmer-R',
      date: 'Dictado: 24 y 25 Junio 2022',
      color: 'purple',
    },
    {
      status: 'Finalizado',
      title: 'Certificación oficial ADOS-2',
      date: 'Dictado: 14, 15 y 16 de Octubre 2022',
      color: 'red',
    },
  ]

  return (
    <section className="md:px-20 px-5  mx-auto  py-12">
      <h2 className="text-3xl font-bold mb-6 text-black">Cursos dictados</h2>
      <p className="mb-8 text-black leading-relaxed">
        Desde el año 2014 comenzamos con el dictado de cursos de certificación presenciales en una clínica familiar. Hoy contamos con
        más de 20 capacitaciones para profesionales y familias. La experiencia y tecnología nos ha permitido dictar cursos oficiales con
        instituciones de renombre como la universidad de Boston, la Universidad de carolina del norte, instituciones como Pyramid
        educational Consultants, la certificacion oficial de Ados y Adir con IGAIN Instituto Global Atención Integral al Neurodesarrollo, con
        editoriales internacionales como TEAediciones de España entre otros!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseBox key={index} {...course} />
        ))}
      </div>
    </section>
  )
}