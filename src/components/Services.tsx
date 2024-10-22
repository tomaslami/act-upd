import React from 'react'
import agenda from '/public/icons/agenda.png'
import certification from '/public/icons/certification.svg'
import lupa from '/public/icons/lupa-2.svg'
import baby from '/public/icons/bebe.svg'
import computer from '/public/icons/computer.svg'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface ServiceProps {
  icon: StaticImageData
  title: string
  description: string
  color: 'blue' | 'green' | 'teal' | 'red' | 'purple'
  href: string
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, color, href }) => {
  const colorClasses = {
    teal: { bg: 'bg-teal-500' },
    blue: { bg: 'bg-blue' },
    green: { bg: 'bg-green' },
    purple: { bg: 'bg-purple' },
    red: { bg: 'bg-red' },
  }

  return (
    <div className="flex flex-col  gap-3 ">
      <div className={`w-full h-16 rounded-full flex items-center justify-center mb-4 ${colorClasses[color]}`}>
        <Image src={icon} width={50} height={50} alt={title}></Image>
      </div>
      <h3 className="h-[15%] text-lg font-bold mb-2 text-start">{title}</h3>
      <p className="h-[25%] text-sm text-start">{description}</p>
      <div className='h-[25%] w-full flex justify-start items-center'>
        <Link href={href} className={` px-4 py-2 rounded-full text-sm font-semibold text-white ${colorClasses[color].bg}`}>
          Más info
        </Link>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const services: ServiceProps[] = [
    {
      icon: agenda,
      title: 'Agenda de cursos',
      description: 'Contamos con ofertas educativas dictadas por profesionales expertos.',
      color: 'blue',
      href: '/cursos',
    },
    {
      icon: certification,
      title: 'Certificaciones oficiales',
      description: 'Capacitación a profesionales que trabajan con niños, jóvenes y adultos con diagnóstico de autismo.',
      color: 'green',
      href: '/cursos',
    },
    {
      icon: lupa,
      title: 'Evaluaciones ADOS y ADI-R',
      description: 'Evaluaciones diagnosticas ADOS y ADIR: Instrumentos para el diagnóstico de autismo.',
      color: 'teal',
      href: '/cursos',
    },
    {
      icon: baby,
      title: 'Evaluaciones de Desarrollo',
      description: 'Escalas de desarrollo, evaluaciones de conductas, evaluaciones neurolinguisticas.',
      color: 'red',
      href: '/cursos',
    },
    {
      icon: computer,
      title: 'Supervisiones a profesionales',
      description: 'Supervisiones a profesionales y a centros con niños que estén dentro del diagnóstico de autismo.',
      color: 'purple',
      href: '/cursos',
    },
  ]

  return (
    <section className="md:px-20 px-5 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}