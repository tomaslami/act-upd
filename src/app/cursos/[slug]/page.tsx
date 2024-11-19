"use client"
import { notFound } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { Cursos as CursosType } from '@/types/types'
import data from "../../../cursos.json"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Book, Calendar, Clock, Users } from 'lucide-react'
import Link from 'next/link'

const Cursos = ({ params }: { params: { slug: string } }) => {
  const [curso, setCurso] = useState({} as CursosType);

  const verifyData = useCallback(() => {
    try {
      if (!params.slug) notFound();
      const curso = data.curso.find((curso) => curso.title === params.slug);
      if (!curso) notFound();
      return curso as CursosType;
    } catch (err) {
      console.error("Error verifying data:", err);
      notFound();
    }
  }, [params.slug]);

  useEffect(() => {
    const curso = verifyData();
    if (curso) setCurso(curso);
  }, [verifyData]);

  const SectionHeader = ({
    title,
    className,
  }: {
    title: string;
    className?: string;
  }) => (
    <h2 className={`text-3xl font-bold mb-8 text-center ${className}`}>
      {title}
    </h2>
  );

  const CourseCard = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  const renderList = useCallback((items: string[] | undefined) => {
    if (!items || items.length === 0) return null;

    return (
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image src="/public/images/hero-background.jpg" alt="TEACCH Course" layout="fill" objectFit="cover" className="z-0" priority />
        <div className={`absolute inset-0 ${curso.bgcolor} z-10`}></div>
        <div className="container mx-auto text-center relative z-20 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{curso.value}</h1>
          <p className="text-xl md:text-2xl mb-8">{curso.subtitle}</p>
          <div className={`bg-white ${curso.text} p-6 rounded-lg inline-block`}>
            <div className="flex items-center justify-center space-x-4 ">
              <Calendar className="w-6 h-6" />
              <p className="font-bold">{curso.date}</p>
            </div>
          </div>
        </div>
      </section>
      {/* About the Course */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader title="Sobre el Curso" className={`text-${curso.bgcolor}`} />
          <div className="grid md:grid-cols-2 gap-8">
            {
              curso.objectives == undefined ? (
                <>
                  <CourseCard title="Temas del Curso" icon={<Book className="w-6 h-6 " />}>
                    {renderList(curso.topics)}
                  </CourseCard>

                </>
              ) : <>
                <CourseCard title="Objetivos del Curso" icon={<Book className="w-6 h-6 " />}>
                  {renderList(curso.objectives)}
                </CourseCard>
                <CourseCard title="Temas del Curso" icon={<Book className="w-6 h-6 " />}>
                  {renderList(curso.topics)}
                </CourseCard>
              </>
            }
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section id="details" className={`${curso.bgcolor} py-16`}>
        <div className="container mx-auto px-4">
          <SectionHeader title="Detalles del Curso" className="text-white" />
          <div className=" gap-8  flex justify-center items-center flex-col md:flex-row">
            <CourseCard title="Modalidad" icon={<Users className="w-6 h-6" />}>
              <p>A TRAVÉS DE ZOOM</p>
              <p className="mt-2">{curso.modality}</p>
            </CourseCard>
            <CourseCard title="Horarios" icon={<Clock className="w-6 h-6" />}>
              <p>10:00 am - 12:15 pm: <span className='font-bold'>(GMT-3)</span></p>
              <p>2:00 pm - 4:15 pm: <span className='font-bold'>(GMT-3)</span></p>
            </CourseCard>
          </div>
        </div>
      </section>
      {/* 
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
      </section> */}

      {/* Coordinator */}
      <section className="py-16">
        <div className="px-4 text-start">
          <SectionHeader title="Coordinación e Inscripción" className={`${curso.text}`} />
          <div className=" flex flex-col items-center">
            <div className='flex justify-center items-start flex-col'>
              <p className="mb-2">El curso está coordinado por la Lic. Silvia Tedesco de ACTUALMENTE.</p>
              <p className="mb-2">Si tienen preguntas o alguna dificultad, pueden enviar un correo a:</p>
              <p className="font-bold mb-2">cursosactualmente@gmail.com</p>
              <p className="mb-4">o contactar al WhatsApp +549114033632</p>
            </div>
            <Link href="https://api.whatsapp.com/send/?phone=5491140336320&text&type=phone_number&app_absent=0" className={`${curso.bgcolor} text-white py-3 px-8 rounded-3xl`}>
              {curso.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cursos