import React from 'react'
import Link from 'next/link'

const CourseSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-extrabold text-green mb-4">{title}</h2>
    {children}
  </div>
)

export default function ADIRCourseInfo() {
  return (
    <div className="md:px-20 px-5 bg-white rounded-lg pt-[100px]">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className='text-green'>Autism Diagnostic Interview Revised (ADI-R)</span>
          </h1>
          <p className="text-xl text-black">Certificación ADI-R</p>
        </div>
      </div>

      <CourseSection title="Descripción del Curso">
        <p>
          La entrevista diagnóstica ADI-R (Autism Diagnostic Interview Revised), es una entrevista semi-estructurada que se realiza a la familia o cuidadora de pacientes con TEA (Trastornos del Espectro Autista) y que se complementa con la administración del ADOS-2 (Autism Diagnostic Observational Schedule), entrevista semi-estructurada que se aplica al afectado. Ambos instrumentos diagnósticos son de gran complejidad en su administración, y han sido diseñados especialmente para su uso en investigación, siendo imprescindible la acreditación de haber recibido la formación para su aplicación.
        </p>
      </CourseSection>

      <CourseSection title="Dirigido a">
        <p>
          Profesionales que tengan experiencia en TEA y que quieran mejorar sus habilidades diagnósticas o del conocimiento de la psicopatología como también que necesiten una formación en instrumentos diagnósticos para la aplicación y/o en investigación científica.
        </p>
      </CourseSection>

      <CourseSection title="Detalles del Curso">
        <ul className="list-disc list-inside space-y-2">
          <li>Fecha: 20 y 21 de Diciembre</li>
          <li>Modalidad: A través de Zoom</li>
          <li>Instructora: Dra. Rhiannon Luyster, PHD- Investigadora, Autora del Módulo T</li>
        </ul>
      </CourseSection>

      <CourseSection title="Sobre la Instructora">
        <p>
          La Dra. Rhiannon Luyster es psicóloga del desarrollo cuyo programa de investigación se centra en el trastorno del espectro autista (TEA). Tiene un interés de larga data en la comunicación social y en lenguaje temprano en autismo, y es autora del Módulo para niños pequeños del Programa de Observación de Diagnóstico del Autismo - 2a edición (ADOS-2).
        </p>
        <p className="mt-4">
          Su trabajo ha sido apoyado por los Institutos Nacionales de Salud, la Fundación Nacional de Ciencias, la Asociación Americana de Habla, Lenguaje y la Organización para la Investigación del Autismo en la Universidad `&quot;`Emerson College`&quot;` donde en la actualidad trabaja e investiga.
        </p>
      </CourseSection>

      <CourseSection title="Incluye">
        <p>La entrevista y el algoritmo.</p>
      </CourseSection>
      <CourseSection title="Recomendación para la Conexión">
        <p>
          Es muy importante que preparen los aspectos técnicos para facilitar la conexión y buena comunicación de imagen y sonido, tanto para el propio participante como para el resto de los conectados. Deben contar con buena conexión a internet. El curso tendrá un control de participación activa durante los 2 días.
        </p>
        <p className="mt-4">
          Los participantes recibirán una invitación de ZOOM por correo electrónico un día antes del inicio del curso.
        </p>
      </CourseSection>

      <CourseSection title="Coordinación e Inscripción">
        <p>El curso está coordinado por la Lic. Silvia Tedesco de ACTUALMENTE.</p>
        <p className="mt-2 mb-2">Si tienen preguntas o alguna dificultad, pueden enviar un correo a:</p>
        <p className="font-semibold">cursosactualmente@gmail.com</p>
        <p className="mb-8 font-semibold">o contactar al WhatsApp +549114033632</p>
        <Link href="#contact" className="bg-green text-white hover:bg-green-700 py-3 px-8 rounded-3xl ">
          Inscribirse Ahora
        </Link>
      </CourseSection>
    </div>
  )
}