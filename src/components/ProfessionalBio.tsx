import type React from "react"
import { Separator } from "@/components/ui/separator"


export default function ProfessionalBio() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Recorrido Profesional
          </h2>
          <p className="text-violet-700 max-w-2xl mx-auto">
            Más de 15 años de experiencia en intervención, investigación,
            formación en autismo y desarrollo infantil.
          </p>
          <Separator className="mt-6 bg-violet-200" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-violet-900">
                  
                </h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-gray-700 text-md leading-relaxed ">
                      Desde hace más de 11 años, hemos ofrecido formaciones oficiales reconocidas internacionalmente.Bajo la dirección de la Lic. Silvia Tedesco, quien desde 2010, tras una experiencia personal de estudio y trabajo en el extranjero, ha traído al país las mismas formaciones que adquirió en el exterior. Nuestro enfoque se centra en proporcionar herramientas actualizadas para la evaluación, diagnóstico e intervención en autismo. 
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700 text-md leading-relaxed ">
                      Trabajamos en colaboración con expertos internacionales y ofrecemos programas oficiales como <span className="font-bold">ADOS-2, ADIR, ABA, Modelo Denver (ESDM), JASPER</span>,  el programa <span className="font-bold">TEACCH</span> que junto a la Universidad de Carolina del Norte se organiza de manera online, intervenciones sobre habilidades sociales conformaciones que ofrecemos del  programa <span className="font-bold">PEERS</span> de la UCLA o <span className="font-bold">Social Thinking</span> teoria desarrollado por Michel Garcia Winner, hace muchos años organizamos las formaciones sobre sistema <span className="font-bold">PECS</span> en colaboración con la empresa Pyramid, entre muchos otros cursos que hemos incorporado a lo largo de estos años de educación continua para profesionales de la salud.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700 text-md leading-relaxed ">
                      Silvia Tedesco también ha implementado la <span className="font-bold">Escala de Desarrollo Merrill Palmer</span>, siendo actualmente entrenadora de la editorial TEA Ediciones, quien organiza la  formación oficial. Para inscripciones y adquisición del material  te invitamos a contactar directamente con la editorial.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-700 text-md leading-relaxed ">
                      A través de estos años, hemos consolidado una comunidad de aprendizaje comprometida con la actualización constante y el impacto positivo en la vida de muchas personas.
                      </p>
                    </div>
                  </div>
      </div>
    </section>
  )
}
