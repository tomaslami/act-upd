import React from 'react'
import Link from 'next/link'

const CourseSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-extrabold text-blue mb-4">{title}</h2>
    {children}
  </div>
)

export default function ADOS2CourseInfo() {
  return (
    <div className="md:px-20 px-5 bg-white rounded-lg pt-[100px]">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className='text-blue'>AUTISM DIAGNOSTIC OBSERVATIONAL SCHEDULE (ADOS-2)</span>
          </h1>
          <p className="text-xl text-blue-600">Formación Clínica de ADOS-2</p>
        </div>
      </div>

      <CourseSection title="Detalles del Curso">
        <ul className="list-disc list-inside space-y-2">
          <li>Fecha: 9, 10 y 11 de Noviembre</li>
          <li>Modalidad: A través de Zoom</li>
          <li>Instructora: Dra. Rhiannon Luyster</li>
        </ul>
      </CourseSection>

      <CourseSection title="Descripción del Curso">
        <p>
          Curso de formación, acreditación clínica y de investigación. La entrevista diagnóstica ADOS-2 (Autism Diagnostic Observational Schedule) es una entrevista semiestructurada que se realiza con niños, adolescentes y adultos con TEA y se complementa con la administración del ADI-R Autism Diagnostic InterviewRevised. Ambos instrumentos diagnósticos son de gran complejidad en su administración y han sido diseñados especialmente para su uso en la investigación.
        </p>
      </CourseSection>

      <CourseSection title="Dirigido a">
        <p>
          Profesionales que tengan experiencia en TEA y que quieran mejorar sus habilidades diagnósticas o del conocimiento de la psicopatología como también que necesiten una formación en instrumentos diagnósticos para la aplicación y/o en investigación científica.
        </p>
      </CourseSection>

      <CourseSection title="Valor de Inscripción">
        <ul className="list-disc list-inside space-y-2">
          <li>OPCIÓN 1: El valor es de 750 dólares con protocolos. Este precio incluye protocolos y acceso a videos.</li>
          <li>OPCIÓN 2: El valor es de 900 dólares con protocolos y manual. Este precio incluye protocolos, manual digital y acceso a videos.</li>
          <li>CUOTAS: Podes abonar en hasta 3 cuotas.</li>
        </ul>
        <p className="mt-4">RESPECTO AL MATERIAL: En esta formación el manual digital será entregado únicamente por correo electrónico.</p>
      </CourseSection>

      <CourseSection title="Formas de Pago">
        <ul className="list-disc list-inside space-y-2">
          <li>Efectivo</li>
          <li>Transferencias internacionales o nacionales</li>
          <li className='text-bold'> NO incluye IVA.</li>
        </ul>
      </CourseSection>

      <CourseSection title="Recomendación para la Conexión">
        <p>
          Es muy importante que preparen los aspectos técnicos para facilitar la conexión y buena comunicación de imagen y sonido, tanto para el propio participante como para el resto de los conectados. Deben contar con buena conexión a internet. El curso tendrá un control de participación activa durante los 3 días.
        </p>
        <p className="mt-4">
          Los participantes recibirán una invitación de ZOOM por correo electrónico un día antes del inicio del curso.
        </p>
      </CourseSection>
      <CourseSection title="Instructora: Dra. Rhiannon Luyster">
        <div className='mb-20 scroll-m-36' id='info'>
          <h3 className="text-xl font-bold text-black mb-2">-Acerca de Rhiannon Luyster-</h3>
          <p className="mb-4">
            La Dra. Luyster es una psicóloga del desarrollo cuyo programa de investigación se centra en el autismo. Desde hace mucho tiempo tiene un interés en la comunicación social temprana y el lenguaje en el autismo, y es autora del Módulo para niños pequeños del Programa de observación para el diagnóstico del autismo, segunda edición (ADOS-2). Su trabajo ha recibido el apoyo de los Institutos Nacionales de Salud, la Fundación Nacional de Ciencias, la Asociación Estadounidense del Habla, el Lenguaje y la Audición, la Sociedad Filosófica Estadounidense, la Fundación para la Investigación del Cerebro y la Conducta, la Organización para la Investigación del Autismo y el Emerson College. La Dra. Luyster ha publicado su trabajo en varias revistas revisadas por pares, entre ellas Developmental Psychology, Development & Psychopathology, Journal of Child Language, Journal of Speech, Language and Hearing Research, Autism Research y Journal of Autism and Developmental Disorders.
          </p>
          <p className="mb-4">
            La Dra. Luyster ofrece cursos de posgrado sobre métodos de investigación y autismo, así como un curso de pregrado sobre psicología del desarrollo. Sus actividades de investigación están abiertas a los estudiantes de Emerson interesados en aprender más sobre la investigación clínica con niños pequeños.

          </p>
          <p className="mb-4">
            La Dra. Luyster ofrece cursos de posgrado sobre métodos de investigación y autismo, así como un curso de pregrado sobre psicología del desarrollo. Sus actividades de investigación están abiertas a los estudiantes de Emerson interesados en aprender más sobre la investigación clínica con niños pequeños.
          </p>
          <p className="mb-6">
            La Dra. Luyster recibió el premio Emerson College Alumni Award por innovación en la enseñanza en 2016. Recibió un premio Huret Faculty Excellence Award en 2021 y un premio Norman e Irma Mann Stearns en 2023.
          </p>
          <Link href="https://emerson.edu/faculty-staff-directory/rhiannon-luyster#publicaciones" className="bg-blue text-white hover:bg-blue2 py-3 px-8 rounded-3xl" target='_blank'>
            Publicaciones
          </Link>
        </div>
      </CourseSection>
      <CourseSection title="Coordinación e Inscripción">
        <p>El curso está coordinado por la Lic. Silvia Tedesco de ACTUALMENTE.</p>
        <p className="mt-2">Si tienen preguntas o alguna dificultad, pueden enviar un correo a:</p>
        <p className="font-semibold">cursosactualmente@gmail.com</p>
        <p className="mb-4">o contactar al WhatsApp +549114033632</p>
        <Link href="https://api.whatsapp.com/send/?phone=5491140336320&text&type=phone_number&app_absent=0" className="bg-blue text-white hover:bg-blue2 py-3 px-8 rounded-3xl">
          Inscribirse Ahora
        </Link>
      </CourseSection>
    </div>
  )
}