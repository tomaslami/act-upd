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
      <main className="md:mx-16 mx-4 pt-10 md:pt-20 flex gap-20 flex-col justify-center">
        <section id="hero" className="text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1b4da1] mb-5">{curso.value}</h1>
          <p className="text-xl md:text-2xl text-[#e74322] mb-5">{curso.subtitle}</p>
          <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 text-[#1b4da1] mr-2 " />
              <span className="text-[#1b4da1] text-lg">{curso.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 text-[#1b4da1] mr-2 " />
              <span className="text-[#1b4da1] text-lg">{curso.modality}</span>
            </div>
          </div>
          {/*BOTON CURSOS */}
            {/* <button
              className="h-[15%] bg-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue/90 transition-colors"
              >
              Agregar Curso
              </button> */}
            </div>
        </section>

        <section id="about" className="mb-12">
          <div className="bg-white shadow-lg p-6 md:p-8 border-t-4 border-[#1b4da1]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Sobre el Curso</h2>
            <p className="text-gray-700 xl:text-lg font-semibold">{curso.about}</p>
          </div>
        </section>

        <section id="content" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Contenido del curso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curso.topics?.map((item, index) => (
              <div key={index} className="flex items-start bg-white shadow-md p-4 border-l-4 border-[#e74322]">
                <CheckCircle className="w-6 h-6 text-[#1b4da1] mr-2 flex-shrink-0" />
                <span className="text-gray-700 xl:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="speakers" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Disertantes</h2>
          <div className=" flex flex-wrap justify-center gap-8">
          {Array.isArray(curso.instructor) && Array.isArray(curso.avatar)
              ? curso.instructor.map((speaker, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg p-6 text-center w-full sm:w-64 border-b-4 border-[#e74322]"
                  >
                    <Image src={curso.avatar[index]} alt={speaker} width={128} height={128} className="rounded-full mx-auto mb-4" />
                    <h3 className="w-full text-xl font-semibold text-[#1b4da1]">{speaker}</h3>
                  </div>
                ))
              : curso.instructor && curso.avatar && (
                  <div className="bg-white shadow-lg p-6 text-center w-full sm:w-64 border-b-4 border-[#e74322]">
                    <Image src={curso.avatar} alt="Profesionales" width={128} height={128} className="rounded-full mx-auto mb-4" />
                    <h3 className="w-full text-xl font-semibold text-[#1b4da1]">{curso.instructor}</h3>
                  </div>
                )}
          </div>
        </section>

        {curso.objectives && (
          <section id="benefits" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">Objetivos del curso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {curso.objectives.map((objective, index) => (
                <div key={index} className="bg-white shadow p-6 border-r-4 border-[#1b4da1]">
                  <CheckCircle className="w-8 h-8 text-[#e74322] mb-2" />
                  <p className="text-gray-700 xl:text-lg">{objective}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <section className="mb-12 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white shadow-lg p-6 border-t-4 border-[#e74322]">
                <h2 className="text-2xl font-semibold text-[#1b4da1] mb-4">Incluye</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li className="xl:text-lg">
                    Para participar en esta formación, es obligatorio contar con el manual y los protocolos correspondientes. 📄✅
                  </li>
                  <li className="xl:text-lg">
                    📚 El curso incluye el material necesario para su desarrollo.
                  </li>
                  <li className="xl:text-lg">
                    ¡Para más información y consultas, escríbeme por mensaje privado!
                  </li>
                </ul>
              </div>

              <div className="flex-1 bg-white shadow-lg p-6 border-t-4 border-[#1b4da1]">
                <h2 className="text-2xl font-semibold text-[#1b4da1] mb-4">Requisitos técnicos</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li className="xl:text-lg">Título de grado</li>
                  <li className="xl:text-lg">Cámara y micrófono en condiciones óptimas</li>
                  <li className="xl:text-lg">Se recomienda contar con la herramienta necesaria para el entrenamiento en la aplicación y la codificación final
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center mb-12 flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1b4da1] mb-4">¿Te gustaría sumarte?</h2>
          <p className="text-gray-700">Contáctanos en:</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`mailto: "cursosactualmente@gmail.com"}`}
              className="flex items-center text-[#1b4da1] hover:text-[#e74322]"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {"cursosactualmente@gmail.com"}
            </a>
            <a
              href={`https://wa.me/"5491140336320"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#1b4da1] hover:text-[#e74322]"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp
            </a>
          </div>
          {/*BOTON CURSOS*/}
          {/* <button
            className="h-[15%] bg-blue text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue/90 transition-colors"
            >
            Agregar Curso
          </button> */}
        </section>
      </main>
    </div>
  )
}

export default Cursos

