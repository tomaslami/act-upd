"use client"
import Image from "next/image"
import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface SwipeProps {
  images: string[]
}

const Swipe: React.FC<SwipeProps> = ({ images }) => {
  const [slidesPerView, setSlidesPerView] = useState(1)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full h-max relative px-4 sm:px-8 md:px-12 lg:px-20">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        allowTouchMove={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="aspect-w-16 aspect-h-9 w-full border-2 rounded-xl p-5 sm:p-0">
              <Image
                width={500}
                height={500}
                src={image || "/placeholder.svg"}
                alt={`Imagen ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons - Responsive positioning */}
      <div
        ref={prevRef}
        className="flex justify-center items-center absolute z-10 cursor-pointer bg-violet-600 hover:bg-violet-600/80 rounded-full shadow-md transition-all duration-200
                  -left-2 sm:left-2 md:left-4 lg:-left-8 xl:-left-16
                  top-1/2 -translate-y-1/2
                  p-1 sm:p-2 md:p-3
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
      </div>

      <div
        ref={nextRef}
        className="flex justify-center items-center absolute z-10 cursor-pointer bg-violet-600 hover:bg-violet-600/80 rounded-full shadow-md transition-all duration-200
                  -right-2 sm:right-2 md:right-4 lg:-right-8 xl:-right-16
                  top-1/2 -translate-y-1/2
                  p-1 sm:p-2 md:p-3
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
      </div>

      {/* Add custom styles for responsive navigation */}
      <style jsx global>{`
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}

export default Swipe

