"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from "/public/2023/01/actualmente-logo.png"

const navItems = [
  { name: "INICIO", path: "/" },
  { name: "SOBRE NOSOTROS", path: "/sobre-nosotros" },
  { name: "CURSOS", path: "/cursos" },
  { name: "INSCRIPCIONES", path: "#contact" },
]

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("INICIO")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="fixed z-50 w-full h-[75px] bg-white shadow-sm px-4 md:px-8 lg:px-20 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image
            src={logo}
            alt="Logo - Actualmente"
            width={190}
            height={72}
            priority
          />
        </Link>
      </div>

      <nav className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        <ul
          className={cn(
            "absolute left-0 w-full bg-white lg:bg-transparent",
            "flex flex-col lg:flex-row lg:relative lg:w-auto",
            "top-[75px] lg:top-0 p-4 lg:p-0",
            "shadow-md lg:shadow-none",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto"
          )}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="my-4 lg:my-0 lg:mx-4"
              onMouseEnter={() => setActiveLink(item.name)}
              onMouseLeave={() => setActiveLink("INICIO")}
            >
              <Link
                href={item.path}
                className={cn(
                  "relative font-bold uppercase text-xs tracking-wider transition-colors duration-300",
                  activeLink === item.name ? "text-[#1b4da1]" : "text-black"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-[-2px] left-0 h-[2px] w-full transition-transform duration-300",
                    activeLink === item.name
                      ? "bg-[#e74322] scale-x-100"
                      : "bg-[#1b4da1] scale-x-0"
                  )}
                />
              </Link>
            </li>
          ))}

          <li className="mt-6 flex flex-col gap-4 lg:hidden">
            <Link href="/cursos">
              <Button className="w-full h-[50px] bg-[#1b4da1] hover:bg-[#1b4da1]/90 text-white rounded-3xl">
                Cursos destacados
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="w-full h-[50px] border-2 border-[#1b4da1] text-[#1b4da1] rounded-3xl hover:bg-[#1b4da1] hover:text-white transition-colors"
              >
                Contáctanos
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
