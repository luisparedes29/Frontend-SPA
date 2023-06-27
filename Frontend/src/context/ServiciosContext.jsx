import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'

// @ts-ignore
export const ServiciosContext = createContext()

export function ServiciosProvider({ children }) {
  const { token } = useContext(AuthContext)
  const [servicios, setServicios] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/servicios')
      .then((response) => response.json())
      .then((data) => setServicios(data.servicios))
      .catch((error) => console.error(error))
  }, [])

  const crearServicio = (servicio) => {
    if (token) {
      fetch('http://localhost:3000/servicios/nuevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(servicio),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.servicio) {
            // @ts-ignore
            setServicios([...servicios, data.servicio])
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => console.error('Error al crear el servicio:', error))
    }
  }

  const editarServicio = (id, servicioActualizado) => {
    if (token) {
      fetch(`http://localhost:3000/servicios/editar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(servicioActualizado),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.servicio) {
            setServicios(
              // @ts-ignore
              servicios.map((servicio) =>
                // @ts-ignore
                servicio._id === id ? data.servicio : servicio
              )
            )
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => console.error('Error al editar el servicio:', error))
    }
  }

  const eliminarServicio = (id) => {
    if (token) {
      fetch(`http://localhost:3000/servicios/eliminar/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.servicio) {
            // @ts-ignore
            setServicios(servicios.filter((servicio) => servicio._id !== id))
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          console.error('Error al eliminar el servicio:', error)
        )
    }
  }

  const serviciosContextValue = {
    servicios,
    crearServicio,
    editarServicio,
    eliminarServicio,
  }

  return (
    <ServiciosContext.Provider value={serviciosContextValue}>
      {children}
    </ServiciosContext.Provider>
  )
}
