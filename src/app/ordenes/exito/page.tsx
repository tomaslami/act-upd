"use client"

import CustomLoader from "@/components/loader/custom-loader"
import PaymentSuccess from "@/components/orders/success/Card"
import React, { Suspense } from "react"

const PageSucces = () => {
  return (
    <Suspense fallback={<CustomLoader message="Cargando el comprobante..." />}>
      <PaymentSuccess />
    </Suspense>
  )
}

export default PageSucces
