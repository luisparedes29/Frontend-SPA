import React, { createContext, useState, useEffect } from 'react'

export const ServiciosContext = createContext()

export function ServiciosProvider({ children }) {
  const [servicios, setServicios] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/servicios')
      .then((response) => response.json())
      .then((data) => setServicios(data.servicios))
      .catch((error) => console.error(error))
  }, [])

  const crearServicio = (servicio) => {
    fetch('http://localhost:3000/servicios/nuevo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(servicio),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setServicios([...servicios, data.servicio])
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al crear el servicio:', error))
  }

  const editarServicio = (id, servicioActualizado) => {
    fetch(`http://localhost:3000/servicios/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(servicioActualizado),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setServicios(
            servicios.map((servicio) =>
              servicio._id === id ? data.servicio : servicio
            )
          )
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al editar el servicio:', error))
  }

  const eliminarServicio = (id) => {
    fetch(`http://localhost:3000/servicios/eliminar/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setServicios(servicios.filter((servicio) => servicio._id !== id))
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al eliminar el servicio:', error))
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
