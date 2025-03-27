import React from 'react'
import AboutUs from '@/components/AboutUs'
import ProfessionalBio from '@/components/ProfessionalBio'
import Swipe from './Swipe'

export default function SilviaTedescoHero() {
  return (
    <>
      <AboutUs />
      <ProfessionalBio />
      <article className="w-full pb-10  max-w-6xl mx-auto">
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32">
              <Swipe
                images={[
                  "/carrusel/carrusel-2.png",
                  "/carrusel/carrusel-3.png",
                  "/carrusel/carrusel-4.png",
                  "/carrusel/carrusel-5.png",
                ].filter((image): image is string => Boolean(image))}
              />
            </div>
          </article>
    </>
  )
}