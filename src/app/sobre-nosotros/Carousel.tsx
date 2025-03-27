import Swipe from '@/components/Swipe'
import React from 'react'

const Carousel = () => {
  return (
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
  )
}

export default Carousel
