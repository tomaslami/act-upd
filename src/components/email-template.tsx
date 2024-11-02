import Link from "next/link"
import * as React from "react"
import { Facebook, Instagram } from "lucide-react"

interface EmailTemplateProps {
  name: string
  message: string
  email: string
  phone: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email,
  phone,
}) => {
  const socialMedia = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/synera.team/",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/synera.team/",
    },
  ]
  return (
    <div className="relative w-[600px] h-full bg-[#f2f2f2] flex-col rounded-md">
      <header className="w-full h-20 bg-email-gradient rounded-t-md flex items-center justify-start">
        <small className="text-black text-xl font-medium ml-4">
          Synera Team
        </small>
      </header>
      <main className="w-full h-full flex items-center justify-start flex-col mb-20">
        <div className="w-full h-14 border-b-[1px] border-b-[#12648E] flex items-center justify-start">
          <h4 className="text-black/80 text-lg font-medium ml-4">
            <span className="text-black font-semibold">Name:</span> {name}
          </h4>
        </div>
        <div className="w-full h-14 border-b-[1px] border-b-[#12648E] flex items-center justify-start">
          <h4 className="text-black/80 text-lg font-medium ml-4">
            <span className="text-black font-semibold">Email:</span> {email}
          </h4>
        </div>
        <div className="w-full h-14 border-b-[1px] border-b-[#12648E] flex items-center justify-start">
          <h4 className="text-black/80 text-lg font-medium ml-4">
            <span className="text-black font-semibold">Phone:</span> {phone}
          </h4>
        </div>
        <div className="w-full h-max flex items-center justify-start">
          <p className="ml-4 mt-[14px] text-base text-black/80 font-medium">
            <span className="text-black font-semibold text-lg ">Message:</span>{" "}
            {message}
          </p>
        </div>
      </main>
      <footer className="w-full h-full bottom-0 left-0 rounded-b-md flex flex-col gap-4">
        <h4 className="ml-4 text-black text-lg font-medium">¡Follow us!</h4>
        <ul className="flex flex-row gap-4 ml-4 list-none">
          {socialMedia.map((social, index) => (
            <li key={index}>
              {social.name === "Instagram" && (
                <Link href="https://www.instagram.com/actualmennte/" className="flex items-center justify-center font-thin text-[14px] hover:underline">
                  <Instagram className="mr-2 h-5 w-5" />
                  @actualmente
                </Link>
              )}
              {social.name === "Facebook" && (
                <Link href="https://www.linkedin.com/company/synera-team/" className="flex items-center justify-center font-thin text-[14px] hover:underline">
                  <Facebook className="mr-2 h-5 w-5" />
                  Synera Team
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className="text-black/80 text-[15px] font-normal ml-4">
          At Synera, we provide high-quality services for the creation or
          scaling of your projects. Additionally, we specialize in fostering
          strong client relationships.
        </p>
        <div>
          <a
            href={"https://synera.com.ar"}
            className="text-blue-600 underline ml-4"
          >
            synera.com.ar
          </a>
        </div>
        <small className="text-black/60 text-sm font-normal ml-4 mt-2 mb-3">
          © 2024 Synera. Todos los derechos reservados.
        </small>
      </footer>
    </div>
  )
}
