import React, { createContext, useState, useEffect } from 'react'

export const ReservacionesContext = createContext()

export function ReservacionesProvider({ children }) {
  const [reservaciones, setReservaciones] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/reservaciones')
      .then((response) => response.json())
      .then((data) => setReservaciones(data.reservaciones))
      .catch((error) => console.error(error))
  }, [])

  const crearReservacion = (reservacion) => {
    fetch('http://localhost:3000/reservaciones/nuevo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservacion),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReservaciones([...reservaciones, data.reservacion])
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al crear la reservación:', error))
  }

  const editarReservacion = (id, reservacionActualizada) => {
    fetch(`http://localhost:3000/reservaciones/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservacionActualizada),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReservaciones(
            reservaciones.map((reservacion) =>
              reservacion._id === id ? data.reservacion : reservacion
            )
          )
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al editar la reservación:', error))
  }

  const eliminarReservacion = (id) => {
    fetch(`http://localhost:3000/reservaciones/eliminar/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReservaciones(
            reservaciones.filter((reservacion) => reservacion._id !== id)
          )
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) =>
        console.error('Error al eliminar la reservación:', error)
      )
  }

  const reservacionesContextValue = {
    reservaciones,
    crearReservacion,
    editarReservacion,
    eliminarReservacion,
  }

  return (
    <ReservacionesContext.Provider value={reservacionesContextValue}>
      {children}
    </ReservacionesContext.Provider>
  )
}
