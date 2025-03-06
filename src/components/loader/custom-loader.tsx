import { Loader2 } from "lucide-react"
import React from "react"

type CustomLoaderProps = {
  message: string
}

const CustomLoader = ({ message }: CustomLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="text-lg font-medium text-muted-foreground text-center">
        {message}
      </p>
      <p className="text-center">
        Porfavor, si esto toma mucho tiempo, intenta refrescar la página.
      </p>
    </div>
  )
}

export default CustomLoader
