import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NavBar from "@/components/NavBar"
import Contact from "@/components/Contact"
import CertificationsFooter from "@/components/CertificationsFooter"
import FloatingButton from "@/components/FloatingButton"
import { TagManagerProvider } from "@/context/TagManager"
import Script from "next/script"

const gothamRoundedBold = localFont({
  src: "/fonts/gothamrnd_bold.otf",
  variable: "--font-gotham-rounded-bold",
  weight: "700",
  style: "normal",
})

const gothamRoundedMedium = localFont({
  src: "/fonts/gothamrnd_medium.otf",
  variable: "--font-gotham-rounded-medium",
  weight: "500",
  style: "normal",
})

const gothamRoundedLight = localFont({
  src: "/fonts/gothamrnd_light.otf",
  variable: "--font-gotham-rounded-light",
  weight: "300",
  style: "normal",
})

const gothamRoundedBook = localFont({
  src: "/fonts/gothamrnd_book.otf",
  variable: "--font-gotham-rounded-book",
  weight: "400",
  style: "normal",
})

export const metadata: Metadata = {
  title: "Actualmente",
  description: "Generated by Synera Team",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${gothamRoundedBold.className} ${gothamRoundedMedium.className} ${gothamRoundedLight.className} ${gothamRoundedBook.className} `}
      >
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

