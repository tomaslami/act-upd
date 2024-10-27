"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '/public/2023/01/actualmente-logo.png';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('INICIO');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'INICIO', path: '/' },
    { name: 'NOSOTROS', path: '/nosotros' },
    //    { name: 'SOCIAL THINKING', path: '/' },
    { name: 'CURSOS', path: '/cursos' },
    //    { name: 'PRESTACIONES', path: '/' },
    //    { name: 'LIBROS', path: '/' },
    //    { name: 'AGENDA', path: '/' },
    { name: 'INSCRIPCIONES', path: '#contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full md:h-[75px] h-[75px] flex flex-row px-4 lg:px-20 fixed z-50 bg-white transition-all">


      <div className='w-[40%] h-full flex justify-start items-center'>
        <Link href="/" className="">
          <Image src={logo} alt="Logo - Actualmente" width={190} height={72} />
        </Link>
      </div>
      <nav className="w-[60%] h-full flex justify-end lg:justify-center items-center flex-row">
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`flex flex-col lg:flex-row w-full justify-between items-center absolute lg:relative top-[50px] lg:top-0 left-0 bg-white lg:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-2 pointer-events-none'
          } lg:flex lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto`}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative text-xs mx-4 my-2 lg:my-0 ${activeLink === item.name ? 'text-[#1b4da1]' : 'text-black'
                }`}
              onMouseEnter={() => setActiveLink(item.name)}
              onMouseLeave={() => setActiveLink('INICIO')}
            >
              <Link
                href={item.path}
                className="font-bold uppercase text-[11px] tracking-wider transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              <span
                className={`absolute bottom-[-2px] left-0 h-[2px] w-full transition-transform duration-300 ${activeLink === item.name ? 'bg-[#e74322] scale-x-100' : 'bg-[#1b4da1] scale-x-0'
                  }`}
              ></span>
            </li>
          ))}
        </ul>
        <style jsx>{`
          @media (max-width: 1023px) {
            nav ul {
              max-height: ${isMenuOpen ? '1000px' : '0'};
              overflow: hidden;
              transition: h-100px 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            }
          }
        `}</style>
      </nav>
    </header>
  );
};

export default NavBar;