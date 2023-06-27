import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'

// @ts-ignore
export const TestimoniosContext = createContext()

export function TestimoniosProvider({ children }) {
  const [testimonios, setTestimonios] = useState([])
  const { token } = useContext(AuthContext)

  useEffect(() => {
    fetch('http://localhost:3000/testimonios')
      .then((response) => response.json())
      .then((data) => setTestimonios(data.testimonios))
      .catch((error) => console.error(error))
  }, [])

  const crearTestimonio = (testimonio) => {
    fetch('http://localhost:3000/testimonios/nuevo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testimonio),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // @ts-ignore
          setTestimonios([...testimonios, data.testimonio])
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al crear el testimonio:', error))
  }

  const editarTestimonio = (id, testimonioActualizado) => {
    if (token) {
      fetch(`http://localhost:3000/testimonios/editar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(testimonioActualizado),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Error al editar el testimonio')
          }
        })
        .then((data) => {
          if (data.success) {
            setTestimonios(
              // @ts-ignore
              testimonios.map((testimonio) =>
                // @ts-ignore
                testimonio._id === id ? data.testimonio : testimonio
              )
            )
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          console.error('Error al editar el testimonio:', error)
        )
    }
  }

  const eliminarTestimonio = (id) => {
    if (token) {
      fetch(`http://localhost:3000/testimonios/eliminar/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Error al eliminar el testimonio')
          }
        })
        .then((data) => {
          if (data.success) {
            setTestimonios(
              // @ts-ignore
              testimonios.filter((testimonio) => testimonio._id !== id)
            )
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          console.error('Error al eliminar el testimonio:', error)
        )
    }
  }

  const testimoniosContextValue = {
    testimonios,
    crearTestimonio,
    editarTestimonio,
    eliminarTestimonio,
  }

  return (
    <TestimoniosContext.Provider value={testimoniosContextValue}>
      {children}
    </TestimoniosContext.Provider>
  )
}
