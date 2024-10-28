"use client"
import React, { useCallback, useMemo } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Book, DollarSign, CreditCard } from 'lucide-react'

// Reusable components
const SectionHeader = (({ title, className }: { title: string; className?: string }) => (
  <h2 className={`text-3xl font-bold mb-8 text-center ${className}`}>{title}</h2>
))

const CourseCard = (({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="text-2xl font-bold flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
))

// Main component
export default function Home() {

  // Course data
  const courseData = useMemo(() => ({
    objectives: [
      "Identificar los estilos de aprendizaje de las personas que se encuentran dentro del espectro autista.",
      "Diagramar la organización física de los espacios de aprendizaje.",
      "Desarrollar horarios personalizados y sistemas de actividades.",
      "Desarrollar una estructura visual significativa para su utilización en áreas clave.",
      "Adquirir conductas para la resolución de problemas utilizando un abordaje basado en un antecedente y en los principios del programa TEACCH con estructuración."
    ],
    topics: [
      "Estilos de Aprendizaje en Autismo",
      "Evaluación",
      "Organización Física & Horarios",
      "Sistemas de Actividades y Estructura del Material",
      "Estrategias de Aprendizaje; Estrategias Naturalistas & Vinculadas con la interacción",
      "Manualidades",
      "Juego dramático",
      "Habilidades la Motricidad Gruesa & Autoayuda",
      "Manejo de la Conducta"
    ],
    faq: [
      {
        question: "¿Quién puede participar en este curso?",
        answer: "Este curso está diseñado para psicólogos, fonoaudiólogos, psicopedagogos, y otros profesionales interesados en adquirir estrategias educativas para niños en etapa pre-escolar dentro del espectro autista."
      },
      {
        question: "¿Cómo obtengo mi certificado?",
        answer: "Se entregará un certificado de asistencia emitido por The University of North Carolina. Es requisito mantener la cámara encendida durante toda la formación para recibir el certificado."
      },
      {
        question: "¿Puedo cancelar mi inscripción?",
        answer: "Sí, existe la posibilidad de anulación del cupo y devolución completa del dinero hasta 15 días posteriores a la realización del pago. Después de este período, se cobrará un 75% del total por la reserva del cupo."
      }
    ]
  }), [])

  const renderList = useCallback((items: string[]) => (
    <ul className="list-disc list-inside space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ), [])

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image src="/public/images/hero-background.jpg" alt="TEACCH Course" layout="fill" objectFit="cover" className="z-0" priority />
        <div className="absolute inset-0 bg-blue z-10"></div>
        <div className="container mx-auto text-center relative z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TEACCH, Enfocado en niños de 3 a 5 años</h1>
          <p className="text-xl md:text-2xl mb-8">Primera vez dictado en habla hispana</p>
          <div className="bg-white text-blue p-6 rounded-lg inline-block">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <Calendar className="w-6 h-6" />
              <p className="font-bold">FECHA: MES DE DICIEMBRE</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-6 h-6" />
              <p>10:00 am - 12:15 pm, 2:00 pm - 4:15 pm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Course */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Sobre el Curso TEACCH" className="text-blue" />
          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard title="Objetivos del Curso" icon={<Book className="w-6 h-6 " />}>
              {renderList(courseData.objectives)}
            </CourseCard>
            <CourseCard title="Temas del Curso" icon={<Book className="w-6 h-6 " />}>
              {renderList(courseData.topics)}
            </CourseCard>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section id="details" className="bg-blue py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Detalles del Curso" className="text-white" />
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard title="Modalidad" icon={<Users className="w-6 h-6" />}>
              <p>A TRAVÉS DE ZOOM</p>
              <p className="mt-2">Únicamente 40 lugares disponibles</p>
            </CourseCard>
            <CourseCard title="Requisitos" icon={<Book className="w-6 h-6" />}>
              <p>Cámara encendida durante toda la formación</p>
              <p className="mt-2">Certificado sujeto al cumplimiento de requisitos</p>
            </CourseCard>
            <CourseCard title="Valor de Inscripción" icon={<DollarSign className="w-6 h-6" />}>
              <p className="font-bold">VALOR ANTICIPADO: 750 USD</p>
              <p className="mt-2">Descuento grupal: 15% (3+ profesionales)</p>
              <p className="text-sm italic mt-2">(Profesionales de Argentina pueden abonar en pesos)</p>
            </CourseCard>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 flex ">
        <div className="container mx-auto px-4">
          <SectionHeader title="Cronograma del Curso" className="text-blue" />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue hidden md:flex "></div>
            <div className="space-y-8">
              {[1, 2, 3, 4].map((day) => (
                <div key={day} className="relative">
                  <div className=" hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue rounded-full"></div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-blue">Día {day}</h3>
                    <p>10:00 am - 12:15 pm: Sesión de mañana</p>
                    <p>2:00 pm - 4:15 pm: Sesión de tarde</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coordinator */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-start">
          <SectionHeader title="Coordinación e Inscripción" className="text-blue" />
          <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8">
            <CourseCard title="Formas de Pago" icon={<CreditCard className="w-6 h-6 text-black " />}>
              <div className="flex space-x-4 flex-col md:flex-row">
                <div className="bg-gray-100 p-4 rounded text-center md:w-1/3 w-full">
                  <Image src="/icons/paypal.png" alt="PayPal" width={100} height={40} />
                  <p className="text-sm mt-2">Más la comisión del 6%</p>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center md:w-1/3 w-full">
                  <Image src="/icons/mercadopago.png" alt="Mercado Pago" width={100} height={40} />
                  <p className="text-sm mt-2">Más comisión</p>
                </div>
                <div className="bg-gray-100 p-4 rounded text-center md:w-1/3 w-full">
                  <Image src="/icons/bank-transfer.png" alt="Transferencia bancaria" width={100} height={40} />
                  <p className="text-sm mt-2">Transferencia bancaria</p>
                </div>
              </div>
            </CourseCard>
            <div className='flex justify-center items-start flex-col'>
              <p className="mb-2">El curso está coordinado por la Lic. Silvia Tedesco de ACTUALMENTE.</p>
              <p className="mb-2">Si tienen preguntas o alguna dificultad, pueden enviar un correo a:</p>
              <p className="font-bold mb-2">cursosactualmente@gmail.com</p>
              <p className="mb-4">o contactar al WhatsApp +549114033632</p>
            </div>
            <Button className="bg-blue text-white hover:bg-blue2">
              Contactar Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}