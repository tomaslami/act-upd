"use client"

import { Suspense, useState } from "react"
import Image from "next/image"
import { Check, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter, useSearchParams } from "next/navigation"
import CustomLoader from "@/components/loader/custom-loader"
import Link from "next/link"
import { createPayment } from "@/actions/contact-actions"
import { toast } from "sonner"

const PaypalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="7.056000232696533 3 37.35095977783203 45"
  >
    <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
      <path
        fill="#002991"
        d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"
      ></path>
      <path
        fill="#60CDFF"
        d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"
      ></path>
      <path
        fill="#008CFF"
        d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"
      ></path>
    </g>
  </svg>
)

const MercadoPago = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="104"
    fill="none"
    viewBox="0 0 150 104"
  >
    <path
      fill="#0A0080"
      d="M150 49.027c0-26.944-33.685-48.87-75-48.87-41.501 0-75 21.926-75 48.87v2.787c0 28.616 29.404 51.843 75 51.843 45.968 0 75-23.227 75-51.843v-2.787Z"
    />
    <path
      fill="#2ABCFF"
      d="M147.022 49.027c0 25.457-32.196 46.083-72.022 46.083-39.826 0-72.022-20.626-72.022-46.083C2.978 23.57 35.174 2.944 75 2.944c39.826.186 72.022 20.626 72.022 46.083Z"
    />
    <path
      fill="#fff"
      d="M50.993 34.533s-.745.743-.373 1.487c1.117 1.486 4.653 2.23 8.189 1.486 2.047-.557 4.839-2.601 7.444-4.645 2.792-2.23 5.583-4.46 8.56-5.389 2.979-.93 4.84-.558 6.142-.186 1.49.372 2.978 1.3 5.584 3.345 5.024 3.716 24.751 20.997 28.101 23.97 2.792-1.3 15.075-6.503 31.638-10.22-1.117-8.919-6.514-17.095-14.702-23.784-11.353 4.831-25.31 7.247-39.082.557 0 0-7.444-3.53-14.702-3.345-10.794.186-15.447 5.017-20.472 9.849l-6.327 6.875Z"
    />
    <path
      fill="#fff"
      d="M114.082 56.274c-.186-.186-23.263-20.44-28.474-24.342-2.978-2.23-4.653-2.788-6.514-3.16-.93-.185-2.233 0-3.163.372-2.42.744-5.584 2.788-8.375 5.017-2.978 2.416-5.77 4.46-8.189 5.017-3.163.93-7.258 0-9.119-1.114-.744-.558-1.303-1.115-1.489-1.673-.744-1.486.559-2.787.745-2.973l6.327-6.875 2.233-2.23c-2.047.186-3.908.743-5.769 1.3-2.233.558-4.466 1.302-6.7 1.302-.93 0-5.955-.744-6.885-1.115-5.77-1.487-10.794-3.16-18.425-6.69C11.166 25.8 5.211 34.161 3.536 43.452c1.303.372 3.35.93 4.28 1.115 20.472 4.46 26.8 9.291 28.102 10.22 1.303-1.3 2.978-2.23 5.025-2.23 2.233 0 4.28 1.115 5.583 2.974 1.117-.93 2.792-1.673 4.839-1.673.93 0 1.86.186 2.977.558a6.83 6.83 0 0 1 4.095 3.716c.744-.372 1.675-.557 2.791-.557 1.117 0 2.233.185 3.35.743 3.722 1.672 4.28 5.389 4.094 8.176h.745c4.466 0 8.189 3.716 8.189 8.176 0 1.3-.373 2.601-.931 3.902 1.303.743 4.28 2.23 7.072 1.858 2.233-.186 2.978-.929 3.35-1.486.186-.372.372-.558.186-.93l-5.77-6.503s-.93-.93-.558-1.3c.373-.372.93.185 1.303.557 2.978 2.415 6.514 6.132 6.514 6.514 6.514 6.514s.372.557 1.675.743c1.116.186 3.163 0 4.652-1.115.373-.372.745-.743.93-1.115 1.49-1.858-.185-3.716-.185-3.716l-6.7-7.619s-.93-.929-.558-1.3c.372-.372.93.185 1.302.557a253.206 253.206 0 0 1 8.003 7.619c.558.371 3.164 2.044 6.513-.186 2.048-1.301 2.42-2.973 2.42-4.274-.186-1.672-1.489-2.787-1.489-2.787l-9.305-9.291s-.93-.744-.558-1.301c.372-.372.93.186 1.302.557 2.978 2.416 10.98 9.663 10.98 9.663.186 0 2.792 2.044 6.328-.186 1.303-.743 2.047-1.858 2.047-3.345-.372-2.044-2.047-3.53-2.047-3.53Z"
    />
    <path
      fill="#fff"
      d="M69.417 67.98c-1.489 0-2.978.744-3.164.744-.186 0 0-.558.186-.93.186-.371 2.047-5.946-2.605-7.99-3.536-1.486-5.583.186-6.328.93-.186.185-.372.185-.372 0 0-.93-.558-3.717-3.536-4.646-4.28-1.3-7.072 1.672-7.816 2.787-.373-2.415-2.42-4.46-5.025-4.46a5 5 0 0 0-5.025 5.018 5 5 0 0 0 5.025 5.017c1.303 0 2.605-.558 3.536-1.487v.186c-.186 1.3-.559 5.76 4.094 7.619 1.861.743 3.536.186 4.839-.744.372-.371.372-.185.372.186-.186 1.115 0 3.717 3.536 5.017 2.605 1.115 4.28 0 5.21-.929.373-.371.56-.371.56.372.185 3.345 2.977 5.946 6.327 5.946 3.536 0 6.327-2.787 6.327-6.318.186-3.344-2.605-6.132-6.141-6.318Z"
    />
    <path
      fill="#0A0080"
      d="M115.012 53.858c-7.072-6.132-23.635-20.44-27.915-23.785-2.606-1.858-4.28-2.973-5.77-3.344-.744-.186-1.674-.372-2.791-.372s-2.42.186-3.536.558c-2.792.929-5.77 3.158-8.56 5.388l-.187.186c-2.605 2.044-5.21 4.088-7.258 4.646-.93.185-1.861.371-2.605.371-2.234 0-4.28-.743-5.025-1.672-.186-.186 0-.372.186-.744l6.141-7.06c4.839-4.832 9.492-9.477 20.1-9.663h.558c6.7 0 13.213 2.973 13.958 3.345 6.327 2.973 12.655 4.46 19.168 4.46 6.7 0 13.586-1.673 21.03-5.018-.744-.743-1.675-1.3-2.605-2.044-6.328 2.787-12.469 4.088-18.425 4.088-5.955 0-12.096-1.486-17.866-4.274-.372-.186-7.63-3.53-15.26-3.53h-.558c-8.933.186-13.958 3.344-17.308 6.132-3.35 0-6.142.929-8.747 1.672-2.233.558-4.28 1.115-6.142 1.115h-2.233c-2.233 0-13.213-2.787-21.96-6.132-.93.557-1.675 1.3-2.605 2.044 9.119 3.716 20.285 6.69 23.82 6.875.931 0 2.048.186 2.979.186 2.233 0 4.652-.557 6.885-1.3 1.303-.372 2.792-.744 4.28-1.116l-1.302 1.301-6.328 6.876c-.558.557-1.674 1.858-.93 3.53.372.743.93 1.3 1.675 1.858 1.489.93 4.28 1.673 6.7 1.673.93 0 1.86 0 2.605-.372 2.606-.557 5.397-2.787 8.375-5.203 2.42-1.858 5.77-4.274 8.188-5.017.745-.186 1.675-.372 2.234-.372h.558c1.675.186 3.35.744 6.328 2.973 5.21 3.903 28.287 24.157 28.473 24.343 0 0 1.489 1.3 1.303 3.344 0 1.115-.744 2.23-1.861 2.974-.93.557-2.047.929-2.978.929-1.488 0-2.605-.744-2.605-.744s-8.002-7.247-10.98-9.662c-.372-.372-.93-.744-1.303-.744-.186 0-.372.186-.558.372-.372.557 0 1.3.744 1.858l9.305 9.291s1.117 1.115 1.303 2.416c0 1.486-.744 2.787-2.233 3.902-1.117.743-2.233 1.115-3.35 1.115-1.489 0-2.42-.557-2.605-.743l-1.303-1.301c-2.42-2.416-4.839-4.831-6.7-6.318-.372-.371-.93-.743-1.303-.743-.186 0-.372 0-.558.186-.558.558.372 1.487.558 1.859l5.77 6.317s0 .186-.186.372c-.187.372-.931.93-2.978 1.3h-.745c-2.233 0-4.466-1.114-5.583-1.672.559-1.115.745-2.415.745-3.716 0-4.645-3.908-8.548-8.561-8.548h-.372c.186-2.23-.186-6.317-4.28-7.99-1.117-.557-2.42-.743-3.537-.743-.93 0-1.86.186-2.605.557-.93-1.672-2.233-2.973-4.28-3.53-1.117-.372-2.048-.558-3.164-.558-1.675 0-3.35.558-4.839 1.487-1.303-1.672-3.536-2.787-5.583-2.787-1.861 0-3.722.743-5.211 2.044-1.861-1.301-8.933-5.947-27.916-10.22-.93-.186-2.977-.744-4.28-1.115-.186 1.115-.372 2.044-.558 3.159 0 0 3.536.929 4.28.929 19.355 4.274 25.868 8.733 26.985 9.662a7.446 7.446 0 0 0-.558 2.787c0 4.089 3.35 7.247 7.258 7.247.372 0 .93 0 1.303-.185.558 2.973 2.605 5.203 5.397 6.317.93.372 1.675.558 2.605.558.558 0 1.117 0 1.675-.186.558 1.3 1.861 3.159 4.466 4.274.931.372 1.861.557 2.792.557.745 0 1.489-.185 2.233-.371 1.303 3.159 4.467 5.389 8.003 5.389 2.233 0 4.466-.93 6.141-2.602 1.303.743 4.28 2.23 7.258 2.23h1.117c2.978-.372 4.28-1.487 4.839-2.416.186-.186.186-.371.372-.557.744.186 1.489.371 2.233.371 1.675 0 3.164-.557 4.653-1.672 1.489-1.115 2.605-2.601 2.791-4.088.559.186 1.117.186 1.489.186 1.675 0 3.35-.557 4.466-1.3a6.49 6.49 0 0 0 3.164-5.018c.186-1.486-.186-2.787-.931-4.088 5.025-2.23 16.378-6.318 29.963-9.29 0-1.116-.186-2.045-.372-3.16-16.191 2.974-28.288 8.176-31.452 9.477ZM69.417 80.244c-3.164 0-5.77-2.415-5.956-5.574 0-.186 0-.93-.558-.93-.186 0-.372.187-.744.372-.745.558-1.675 1.301-2.792 1.301-.558 0-1.302-.186-1.86-.371-3.35-1.301-3.35-3.717-3.165-4.646 0-.186 0-.557-.186-.743l-.186-.186h-.186c-.186 0-.372 0-.558.186-1.117.743-2.047 1.115-2.978 1.115-.558 0-1.116-.186-1.675-.372-4.466-1.672-4.094-5.946-3.908-7.061 0-.186 0-.372-.186-.557l-.372-.186-.373.371c-.93.744-2.047 1.301-3.163 1.301-2.606 0-4.653-2.044-4.653-4.645 0-2.602 2.047-4.646 4.653-4.646 2.233 0 4.28 1.672 4.466 3.902l.186 1.301.745-1.115c0-.186 1.86-2.973 5.397-2.973.558 0 1.302.186 2.047.372 2.791.743 3.164 3.344 3.164 4.273 0 .558.558.558.558.558.186 0 .372-.186.558-.186.559-.557 1.675-1.486 3.35-1.486.745 0 1.675.185 2.606.557 4.28 1.858 2.419 7.247 2.419 7.433-.372.929-.372 1.3 0 1.486h.372c.186 0 .372 0 .745-.186.558-.185 1.489-.557 2.233-.557 3.164 0 5.955 2.602 5.955 5.946 0 3.345-2.605 5.946-5.955 5.946Z"
    />
  </svg>
)

const BankTransfer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-building-bank mr-2 size-5"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l18 0" />
    <path d="M3 10l18 0" />
    <path d="M5 6l7 -3l7 3" />
    <path d="M4 10l0 11" />
    <path d="M20 10l0 11" />
    <path d="M8 14l0 3" />
    <path d="M12 14l0 3" />
    <path d="M16 14l0 3" />
  </svg>
)

const CheckoutSummaryContent = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const router = useRouter()

  const searchParams = useSearchParams()

  const total = searchParams.get("total")
  const title = searchParams.get("title")
  const subtitle = searchParams.get("subtitle")
  const date = searchParams.get("date")
  const modality = searchParams.get("modality")
  const course_avatar = searchParams.get("course_avatar")
  const paypal_link = searchParams.get("paypal_link")

  // Check if course is ADOS, TEACCH or PEERS
  const isSpecialCourse = (courseTitle: string | null) => {
    if (!courseTitle) return false
    const specialCourses = ["ADOS", "TEACCH", "PEERS"]
    return specialCourses.some(course => courseTitle.toUpperCase().includes(course))
  }

  const handleCreatePayment = async () => {
    try {
      const result = await createPayment({
        title: title as string,
        quantity: 1,
        price: Number(total),
      })

      if (!("init_point" in result)) {
        return toast.error(result.userMessage)
      }

      if ("init_point" in result) {
        router.push(result.init_point)
      }
    } catch (error) {
      console.log(error)
      return toast.error("Hubo un error al crear el pago")
    }
  }

  // Get course prices based on course type
  const getCoursePrices = () => {
    if (isSpecialCourse(title)) {
      if (
        title?.toUpperCase().includes("ADOS") ||
        title?.toUpperCase().includes("PEERS") ||
        title?.toUpperCase().includes("TEACCH")
      ) {
        return {
          options: [
            { label: "Con material y videos incluidos", price: 892500 },
            { label: "Con manual y otros materiales", price: 1071000 },
          ],
          reservationPrice: 100000,
        }
      }  
    }
    return {
      totalPrice: calculateTotalPrice(Number(total)),
      reservationPrice: Number(total),
    }
  }

  // Calculate total price for regular courses (since total is 30%)
  const calculateTotalPrice = (reservaPrice: number) => {
    return Math.round((reservaPrice * 100) / 30)
  }

  if (!paypal_link) return

  const {  reservationPrice } = getCoursePrices()

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1e56a0] mb-8">
          Resumen de Compra
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Course Summary */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#1e56a0]">
                  Detalles del Curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-full md:w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
                        <Image
                          src={course_avatar || "/images/placeholder.png"}
                          alt="Curso"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="text-orange-500">{subtitle}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{date}</span>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Check className="w-4 h-4 mr-1 text-green-500" />
                          <span>{modality}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e56a0]">
                  Método de Pago
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div
                    className={`flex items-center space-x-3 border p-4 rounded-lg ${
                      paymentMethod === "credit-card"
                        ? "border-[#1e56a0] bg-blue-50"
                        : ""
                    }`}
                  >
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label
                      htmlFor="credit-card"
                      className="flex items-center cursor-pointer"
                    >
                      <MercadoPago className="w-5 h-5 mr-2" />
                      <span>Mercado Pago</span>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-3 border p-4 rounded-lg ${
                      paymentMethod === "bank-transfer"
                        ? "border-[#1e56a0] bg-blue-50"
                        : ""
                    }`}
                  >
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label
                      htmlFor="bank-transfer"
                      className="flex items-center cursor-pointer"
                    >
                      <BankTransfer />
                      <span>Transferencia Bancaria</span>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-3 border p-4 rounded-lg ${
                      paymentMethod === "paypal"
                        ? "border-[#1e56a0] bg-blue-50"
                        : ""
                    }`}
                  >
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label
                      htmlFor="paypal"
                      className="flex items-center cursor-pointer"
                    >
                      <PaypalIcon className="w-5 h-5 mr-2" />
                      <span>Paypal</span>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Serás redirigido a nuestra plataforma de pago seguro para
                      completar la transacción.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl text-[#1e56a0]">
                  Resumen del Pedido
                </CardTitle>
                {paymentMethod === "paypal" ? (
                  <div className="space-y-4">
                    <p className="font-semibold">
                      Al apretar el botón podrá obtener más información del monto
                      y realizar el pago
                    </p>
                    <div className="text-sm text-blue-600 mt-2 bg-blue-50 p-4 rounded-lg">
                      <p>* IMPORTANTE: El monto a abonar corresponde únicamente al pago de la reserva del curso, no al valor total del mismo.</p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {paymentMethod === "bank-transfer" && (
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">
                        Pago por transferencia bancaria:
                      </p>
                      <p className="text-sm">
                        Entre a este link para coordinar el pago:{" "}
                        <Link
                          className="underline text-blue-500 font-semibold"
                          href={`https://wa.me/5491140336320?text=${encodeURIComponent(
                            `Vengo del curso: ${title} para abonar por transferencia bancaria`
                          )}`}
                        >
                          WhatsApp
                        </Link>
                      </p>
                    </div>
                    <div className="text-sm text-blue-600 bg-blue-50 p-4 rounded-lg">
                      <p>* IMPORTANTE: El monto a abonar corresponde únicamente al pago de la reserva del curso, no al valor total del mismo.</p>
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {paymentMethod === "credit-card" ? (
                  <div className="space-y-4">
                    {isSpecialCourse(title) ? (
                      <div className="flex flex-col space-y-2 bg-blue-50 p-4 rounded-lg mb-4">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Valor total del curso</span>
                          <span className="line-through">$850000 ARS</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Reserva</span>
                          <span>$100000 ARS</span>
                        </div>
                        <div className="text-sm text-blue-600 mt-2">
                          <p>* IMPORTANTE: El monto a abonar corresponde únicamente al pago de la reserva del curso, no al valor total del mismo.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-2 bg-blue-50 p-4 rounded-lg mb-4">
                        <div className="text-sm text-blue-600 mt-2">
                          <p>* IMPORTANTE: El monto a abonar corresponde únicamente al pago de la reserva del curso, no al valor total del mismo.</p>
                        </div>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total a pagar ahora</span>
                      <span>${reservationPrice} ARS</span>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </CardContent>
              <CardFooter>
                {paymentMethod === "credit-card" && (
                  <Button
                    onClick={handleCreatePayment}
                    disabled={paymentMethod !== "credit-card"}
                    className="w-full bg-[#1e56a0] hover:bg-[#164584] group"
                  >
                    Confirmar y Reservar{" "}
                    <MercadoPago className="ml-2 group-hover:translate-x-1 transition-transform duration-150" />
                  </Button>
                )}
                {paymentMethod === "paypal" && (
                  <Button
                    disabled={paymentMethod !== "paypal"}
                    onClick={() => router.push(paypal_link!)}
                    className="w-full bg-[#ffd431] text-[#002991] hover:bg-[#f5c400] group"
                  >
                    Reservar con Paypal{" "}
                    <PaypalIcon className="ml-2 group-hover:translate-x-1 transition-transform duration-150" />
                  </Button>
                )}
              </CardFooter>
              <div className="px-6 pb-6">
                <p className="text-xs text-center text-gray-500 mt-4">
                  Al confirmar, aceptas nuestros Términos y Condiciones y
                  Política de Privacidad
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function CheckoutSummary() {
  return (
    <Suspense fallback={<CustomLoader message="Cargando Resumen de Compra" />}>
      <CheckoutSummaryContent />
    </Suspense>
  )
}
