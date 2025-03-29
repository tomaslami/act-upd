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
    <div className="w-full h-max relative">
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
            <div className="aspect-w-16 aspect-h-9 w-full border-2 rounded-xl">
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

      {/* Custom navigation buttons */}
      <div
        ref={prevRef}
        className="flex justify-center items-center absolute -left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-violet-600 hover:bg-violet-600/80 dark:bg-black/50 dark:hover:bg-black/80 rounded-full p-1 sm:p-2 shadow-md ml-1 sm:ml-2 focus:outline-none transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-gray-200" />
      </div>

      <div
        ref={nextRef}
        className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-violet-600 hover:bg-violet-600/80 rounded-full p-1 sm:p-2 shadow-md mr-1 sm:mr-2 focus:outline-none transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-gray-200" />
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

