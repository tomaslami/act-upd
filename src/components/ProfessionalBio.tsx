import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Briefcase,
  Star,
} from "lucide-react"

export default function ProfessionalBio() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Trayectoria Profesional
          </h2>
          <p className="text-violet-700 max-w-2xl mx-auto">
            Más de 15 años de experiencia en intervención, investigación,
            formación en autismo y desarrollo infantil.
          </p>
          <Separator className="mt-6 bg-violet-200" />
        </div>

        <Tabs defaultValue="formacion" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="formacion" className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900 max-sm:text-xs">
              <GraduationCap className="mr-2 h-4 w-4 max-sm:hidden" />
              Formación
            </TabsTrigger>
            <TabsTrigger value="certificaciones" className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900 max-sm:text-xs">
              <Award className="mr-2 h-4 w-4 max-sm:hidden" />
              Certificaciones
            </TabsTrigger>
            <TabsTrigger value="experiencia" className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900 max-sm:text-xs">
              <Briefcase className="mr-2 h-4 w-4 max-sm:hidden" />
              Experiencia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="formacion" className="space-y-6">

            <TimelineItem
              year="2017"
              title="Modelo JASPER y Proyecto Impact"
              description="Capacitación en intervención basada en evidencia para trabajar junto a familias en el desarrollo de habilidades comunicativas y sociales."
              icon={<BookOpen size={15} />}
            />

            <TimelineItem
              year="2018"
              title="Programa TEACCH - Universidad de Carolina del Norte"
              description="Intervención estructurada para niños, adolescentes y adultos con autismo."
              icon={<Users size={15} />}
            />

            <TimelineItem
              year="2019"
              title="Sistema PECS - Pyramid Educational Consultants"
              description="Entrenamiento en enseñanza de comunicación aumentativa alternativa y habilidades críticas de comunicación."
              icon={<BookOpen size={15} />}
            />
          </TabsContent>

          <TabsContent value="certificaciones" className="space-y-6">
            <Card className="overflow-hidden border-none shadow-md bg-white">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <CertificationCard title="PROMPT" year="2009" color="indigo" />
                  <CertificationCard title="PECS 1, 2 y TRANSICIÓN con PYRAMID" year="2010" color="blue" />
                  <CertificationCard title="ADI-R" year="2012" color="cyan" />
                  <CertificationCard title="ADOS-2" year="2013" color="teal" />
                  <CertificationCard title="Escala de Desarrollo Merrill Palmer" year="2014" color="green" />
                  <CertificationCard title="PEERS - UCLA Health" year="2020" color="purple" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experiencia" className="space-y-6">
            <Card className="border-none shadow-md bg-gradient-to-r from-violet-50 to-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-violet-900">
                  Experiencia Profesional
                </h3>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-violet-700" />
                        Formación y Supervisión Profesional
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-6">
                        Supervisión y evaluación de tratamientos con ADOS y ADIR, brindando capacitaciones en intervención para profesionales de la salud mental.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center">
                        <Users className="h-4 w-4 mr-2 text-violet-700" />
                        Implementación de Modelos de Intervención
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-6">
                        Desarrollo e implementación de modelos como JASPER, TEACCH, PECS y PEERS para fortalecer habilidades sociales y comunicativas.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-2 text-violet-700" />
                        Colaboración con la Dra. Rhiannon Luyster
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed pl-6">
                        Colaboración activa con la Dra. Rhiannon Luyster en el desarrollo y evaluación de herramientas diagnósticas como el módulo infantil de ADOS-2.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <Card className="mt-8 border-l-4 border-violet-600 bg-violet-50 shadow-md">
          <CardContent className="p-6">
            <p className="text-gray-800 font-medium leading-relaxed">
            Seguimos creciendo con el mismo propósito: ofrecer capacitaciones actualizadas, accesibles y de calidad a profesionales de la salud mental que desean ampliar sus conocimientos y mejorar sus prácticas. 
            En Actualmente, cada curso es una oportunidad para avanzar, aprender y generar un impacto positivo en la vida de muchas personas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function TimelineItem({
    year,
    title,
    description,
    icon,
  }: {
    year: string
    title: string
    description: string
    icon: React.ReactNode
  }) {
    return (
      <div className="relative pl-8 pb-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-violet-200">
        <div className="absolute left-[-8px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white">
          {icon}
        </div>
        <Badge
          variant="outline"
          className="absolute left-6 top-0 bg-violet-100 text-violet-800 mb-2"
        >
          {year}
        </Badge>
        <div className="mt-6 rounded-lg bg-white p-4 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
      </div>
    )
  }
  
  function CertificationCard({
    title,
    year,
    color,
  }: {
    title: string
    year: string
    color: "purple" | "indigo" | "blue" | "cyan" | "teal" | "green"
  }) {
    const colorClasses = {
      purple: "from-violet-400 to-violet-400",
      indigo: "from-violet-400 to-violet-500",
      blue: "from-violet-500 to-violet-600",
      cyan: "from-violet-600 to-violet-700",
      teal: "from-violet-700 to-violet-800",
      green: "from-violet-800 to-violet-900",
    }
  
    return (
      <div
        className={`p-4 bg-gradient-to-r  ${colorClasses[color]} text-white rounded-md`}
      >
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <Badge variant="outline" className="bg-white/20 border-none text-white">
            {year}
          </Badge>
        </div>
      </div>
    )
  }
  