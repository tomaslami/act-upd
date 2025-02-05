"use client"
import { notFound } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import type { Cursos as CursosType } from "@/types/types"
import data from "../../../cursos.json"
import { Calendar, Users, CheckCircle, MessageCircle } from "lucide-react"
import Image from "next/image"

const Cursos = ({ params }: { params: { slug: string } }) => {
  const [curso, setCurso] = useState<CursosType | null>(null)

  const verifyData = useCallback(() => {
    if (!params.slug) {
      notFound()
    }
    const foundCurso = data.curso.find((curso) => curso.title === params.slug)
    if (!foundCurso) {
      notFound()
    }
    return foundCurso
  }, [params.slug])

  useEffect(() => {
    const foundCurso = verifyData()
    if (foundCurso) setCurso(foundCurso)
  }, [verifyData])

  if (!curso) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <main className="md:mx-16 mx-6 pt-10 md:pt-20 flex gap-20 flex-col justify-center">
        <section id="hero" className="text-center  mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1b4da1] mb-4">{curso.value}</h1>
          <p className="text-xl md:text-2xl text-[#e74322] mb-8">{curso.subtitle}</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-[#1b4da1] mr-2" />
              <span className="text-[#1b4da1]">{curso.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 text-[#1b4da1] mr-2" />
              <span className="text-[#1b4da1]">{curso.modality}</span>
            </div>
          </div>
        </section>

        <section id="about" className="mb-12">
          <div className="bg-white shadow-lg p-6 md:p-8 border-t-4 border-[#1b4da1]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Sobre el Curso</h2>
            <p className="text-gray-700">{curso.about}</p>
          </div>
        </section>

        <section id="content" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Contenido del curso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curso.topics?.map((item, index) => (
              <div key={index} className="flex items-start bg-white shadow-md p-4 border-l-4 border-[#e74322]">
                <CheckCircle className="w-6 h-6 text-[#1b4da1] mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="speakers" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Disertantes</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {(Array.isArray(curso.instructor) ? curso.instructor : [curso.instructor]).map((speaker, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 text-center w-full sm:w-64 border-b-4 border-[#e74322]"
              >
                <Image src="/2024/silvia-avatar.png" alt="Silvia Tedesco" width={128} height={128} className=" rounded-full mx-auto mb-4"></Image>
                <h3 className="text-xl font-semibold text-[#1b4da1]">{speaker}</h3>
              </div>
            ))}
          </div>
        </section>

        {curso.objectives && (
          <section id="benefits" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Objetivos del curso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {curso.objectives.map((objective, index) => (
                <div key={index} className="bg-white shadow p-6 border-r-4 border-[#1b4da1]">
                  <CheckCircle className="w-8 h-8 text-[#e74322] mb-2" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <section className="mb-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white shadow-lg p-6 border-t-4 border-[#e74322]">
                <h2 className="text-2xl font-semibold text-[#1b4da1] mb-4">Dirigido a:</h2>
                <p className="text-gray-700">
                  {curso.includes ||
                    "Esta formación está destinada a profesionales de la salud que trabajan con niños en primera infancia y desean profundizar en el uso e interpretación de esta herramienta."}
                </p>
              </div>

              <div className="flex-1 bg-white shadow-lg p-6 border-t-4 border-[#1b4da1]">
                <h2 className="text-2xl font-semibold text-[#1b4da1] mb-4">Requisitos técnicos</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Buena conexión a internet</li>
                  <li>Cámara y micrófono en condiciones óptimas</li>
                  <li>
                    {curso.recommendations ||
                      "Se recomienda contar con la herramienta necesaria para el entrenamiento en la aplicación y la codificación final"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">¿Te gustaría sumarte?</h2>
          <p className="text-gray-700 mb-4">Contáctanos en:</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`mailto:${curso.contact?.email || "cursosactualmente@gmail.com"}`}
              className="flex items-center text-[#1b4da1] hover:text-[#e74322]"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {curso.contact?.email || "cursosactualmente@gmail.com"}
            </a>
            <a
              href={`https://wa.me/${curso.contact?.whatsapp?.replace(/\D/g, "") || "5491140336320"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#1b4da1] hover:text-[#e74322]"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Cursos

