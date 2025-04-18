import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"
import Contact from "@/components/Contact"
import CertificationsFooter from "@/components/CertificationsFooter"
import FloatingButton from "@/components/FloatingButton"
import { TagManagerProvider } from "@/context/TagManager"
import Script from "next/script"
import type React from "react" // Import React

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Actualmente",
  description: "Formamos a profesionales de la salud mental con capacitaciones basadas en la evidencia, especializadas en autismo y desarrollo infantil.",
  keywords: [""]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1048094040486950');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1048094040486950&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <TagManagerProvider>
          <main>
            <NavBar />
            {children}
            <Contact />
            <CertificationsFooter />
          </main>
          <FloatingButton phoneNumber="5491140336320" />
        </TagManagerProvider>
      </body>
    </html>
  )
}
