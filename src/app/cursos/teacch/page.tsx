import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CourseSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-extrabold text-blue mb-4">{title}</h2>
    {children}
  </div>
)

export default function TEACCHCourseInfo() {
  return (
    <div className="md:px-20 px-5  bg-white rounded-lg pt-[100px]">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2"> <span className='text-blue'>TEACCH,</span> Enfocado en niños de 3 a 5 años</h1>
          <p className="text-xl text-blue-600">Primera vez dictado en habla hispana</p>
        </div>
      </div>

      <CourseSection title="Detalles del Curso">
        <ul className="list-disc list-inside space-y-2">
          <li>Fecha: Mes de Diciembre</li>
          <li>Horario: 10:00 am - 12:15 pm, 2:00 pm - 4:15 pm</li>
          <li>Modalidad: A través de Zoom</li>
          <li>Cupos: Limitados hasta 40 profesionales</li>
        </ul>
      </CourseSection>

      <CourseSection title="Objetivos del Curso">
        <ul className="list-disc list-inside space-y-2">
          <li>Identificar los estilos de aprendizaje de las personas que se encuentran dentro del espectro autista.</li>
          <li>Diagramar la organización física de los espacios de aprendizaje.</li>
          <li>Desarrollar horarios personalizados y sistemas de actividades.</li>
          <li>Desarrollar una estructura visual significativa para su utilización en áreas clave.</li>
          <li>Adquirir conductas para la resolución de problemas utilizando un abordaje basado en un antecedente y en los principios del programa TEACCH con estructuración.</li>
        </ul>
      </CourseSection>

      <CourseSection title="Temas">
        <ul className="list-disc list-inside space-y-2">
          <li>Estilos de Aprendizaje en Autismo</li>
          <li>Evaluación</li>
          <li>Organización Física & Horarios</li>
          <li>Sistemas de Actividades y Estructura del Material</li>
          <li>Estrategias de Aprendizaje; Estrategias Naturalistas & Vinculadas con la interacción</li>
          <li>Manualidades</li>
          <li>Juego dramático</li>
          <li>Habilidades la Motricidad Gruesa & Autoayuda</li>
          <li>Manejo de la Conducta</li>
        </ul>
      </CourseSection>

      <CourseSection title="Valor de Inscripción">
        <p className="mb-2">Valor anticipado: 750 USD</p>
        <p className="mb-4">Descuento grupal a partir de 3 profesionales: 15% de descuento</p>
        <p className="text-sm italic">(Profesionales de Argentina pueden abonar en pesos)</p>
      </CourseSection>

      <CourseSection title="Formas de Pago">
        <div className="flex flex-wrap gap-4">
          <div className="h-max flex flex-col  bg-gray-100 p-4 rounded">
            <Image src="/icons/paypal.png" alt="PayPal" width={100} height={40} />
            <p className="h-[10%] text-sm mt-2 font-bold">Más la comisión del 6%</p>
          </div>
          <div className="h-max flex flex-col  bg-gray-100 p-4 rounded">
            <Image src="/icons/mercadopago.png" alt="Mercado Pago" width={100} height={40} />
            <p className="h-[10%] text-sm mt-2 font-bold">Más comisión</p>
          </div>
          <div className="h-max flex flex-col  bg-gray-100 p-4 rounded">
            <Image src="/icons/trans-bancaria.png" alt="Transferencia bancaria" width={100} height={40} />
            <p className="h-[10%] text-sm mt-2 font-bold">Transferencia bancaria</p>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Coordinación e Inscripción">
        <p className="mb-4">El curso está coordinado por la Lic. Silvia Tedesco de ACTUALMENTE.</p>
        <p className="mb-2">Si tienen preguntas o alguna dificultad, pueden enviar un correo a:</p>
        <p className="font-semibold mb-2">cursosactualmente@gmail.com</p>
        <p className="mb-4">o contactar al WhatsApp +549114033632</p>
        <Link href={"https://api.whatsapp.com/send/?phone=5491140336320&text&type=phone_number&app_absent=0"} className="bg-blue text-white hover:bg-blue2 py-3 px-8 rounded-3xl">
          Inscribirse Ahora
        </Link>
      </CourseSection>
    </div>
  )
}