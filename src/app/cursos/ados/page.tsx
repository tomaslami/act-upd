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
          <div className="flex space-x-4">
            {/* Enlace a publicaciones */}
            <Link
              href="https://emerson.edu/faculty-staff-directory/rhiannon-luyster#publicaciones"
              className="bg-blue text-white hover:bg-blue2 py-3 px-10 rounded-3xl flex justify-center items-center flex-row"
            >
              <span className="mr-2">Publicaciones</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* Enlace para descargar el CV */}
            <a
              href="/Luyster_CV_2024.pdf"
              download="Prueba"
              className="bg-blue text-white hover:bg-blue2 py-3 px-10 rounded-3xl flex justify-center items-center flex-row"
            >
              <span className="mr-2">Investigaciones Actualizadas</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>
      </CourseSection>
      <CourseSection title="Coordinación e Inscripción">
        <p>El curso está coordinado por la Lic. Silvia Tedesco de ACTUALMENTE.</p>
        <p className="mt-2">Si tienen preguntas o alguna dificultad, pueden enviar un correo a:</p>
        <p className="font-semibold">cursosactualmente@gmail.com</p>
        <p className="mb-4">o contactar al WhatsApp +549114033632</p>
        <Link href="#contact" className="bg-blue text-white hover:bg-blue2 py-3 px-8 rounded-3xl">
          Inscribirse Ahora
        </Link>
      </CourseSection>
    </div>
  )
}