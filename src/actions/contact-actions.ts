'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function handleSubmit(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined')
    return {
      status: 500,
      message: 'Error de configuración del servidor'
    }
  }

  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const message = formData.get('message')

    if (!name || !email || !message) {
      return {
        status: 500,
        message: 'Todos los campos son requeridos'
      }
    }

    const { error } = await resend.emails.send({
      from: 'info@actualmente.com.ar',
      to: ['info@actualmente.com.ar'], // Reemplaza con el email de destino
      subject: 'Nuevo contacto desde el formulario web',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error('Error de Resend:', error)
      return {
        status: 500,
        message: 'Error al enviar el email. Por favor intente nuevamente.'
      }
    }

    return {
      status: 200,
      message: 'Mensaje enviado exitosamente'
    }

  } catch (error) {
    // Log the full error for debugging
    console.error('Error completo:', error)
    return {
      status: 500,
      message: 'Error al enviar el email. Por favor intente nuevamente.'
    }
  }
}
