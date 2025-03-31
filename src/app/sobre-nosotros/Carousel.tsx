import Swipe from "@/components/Swipe"

const Carousel = () => {
  return (
    <article className="w-full pb-10 ">
      <div className="w-full px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <Swipe
          images={[
            "/carrusel/carrusel-1.png",
            "/carrusel/carrusel-2.png",
            "/carrusel/carrusel-4.png",
            "/carrusel/carrusel-5.png",
            "/carrusel/carrusel-7.png",
            "/carrusel/carrusel-8.png",
            "/carrusel/carrusel-9.png",
            "/carrusel/carrusel-10.png",
            "/carrusel/carrusel-11.png",
            "/carrusel/carrusel-12.png",
            "/carrusel/carrusel-13.jpg",
            "/carrusel/carrusel-14.png",
            "/carrusel/carrusel-16.png",
            "/carrusel/carrusel-17.png",
            "/carrusel/carrusel-18.png",
            "/carrusel/carrusel-19.png",
            "/carrusel/carrusel-20.png",
            "/carrusel/carrusel-21.png",
            "/carrusel/carrusel-22.png",
            "/carrusel/carrusel-23.png",
            "/carrusel/carrusel-24.png",
            "/carrusel/carrusel-25.png",
            "/carrusel/carrusel-26.jpg",
            "/carrusel/carrusel-27.jpg",
          ].filter((image): image is string => Boolean(image))}
        />
      </div>
    </article>
  )
}

export default Carousel

