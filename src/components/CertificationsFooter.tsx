import React from 'react'
import Image from 'next/image'
import backgroundImage from '/public/icons/backgroundHome.png'

import eteaLogo from '/public/icons/e-tea.png'
import hanenLogo from '/public/icons/the-hanen.png'
import pyramidLogo from '/public/icons/pyramid.png'
import impactLogo from '/public/icons/impact.png'
import garrahanLogo from '/public/icons/garrahan.png'
import socialThinkingLogo from '/public/icons/training.png'
import teacchLogo from '/public/icons/teacch.png'
import pecsLogo from '/public/icons/pecs.png'
import peersLogo from '/public/icons/peers.png'
import esdmLogo from '/public/icons/esdm.png'

const logos = [
  { src: eteaLogo, alt: 'e-tea ediciones' },
  { src: hanenLogo, alt: 'The Hanen Program' },
  { src: pyramidLogo, alt: 'PYRAMID Approach to Education' },
  { src: impactLogo, alt: 'IMPACT' },
  { src: garrahanLogo, alt: 'Fundación Garrahan' },
  { src: socialThinkingLogo, alt: 'Social Thinking' },
  { src: teacchLogo, alt: 'TEACCH' },
  { src: pecsLogo, alt: 'PECS' },
  { src: peersLogo, alt: 'PEERS' },
  { src: esdmLogo, alt: 'ESDM' },
]

export default function CertificationsFooter() {
  return (
    <section id='certificaciones' className="relative py-16 overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Alphabet blocks background"
        quality={100}
        objectFit='cover'
        className="absolute inset-0 z-0"
      />

      <div className="absolute top-0 left-0 right-0 h-4 bg-blue-600 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-blue-600 z-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-red-500 mb-12 text-[#e95353]">Certificaciones oficiales</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={75}
                quality={100}
                layout='intrinsic'
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}