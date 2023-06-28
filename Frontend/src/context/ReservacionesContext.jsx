import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'
import toast from 'react-hot-toast'
// @ts-ignore
export const ReservacionesContext = createContext()

export function ReservacionesProvider({ children }) {
  const [reservaciones, setReservaciones] = useState([])
  const { token } = useContext(AuthContext)

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
        if (data.reservacion._id) {
          // @ts-ignore
          setReservaciones([...reservaciones, data.reservacion])
          toast.success('Reservacion creada con exito')
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => toast.error('Error al crear la reservación:', error))
  }

  const editarReservacion = (id, reservaActualizada) => {
    if (token) {
      fetch(`http://localhost:3000/reservaciones/editar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(reservaActualizada),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Error al editar la reserva')
          }
        })
        .then((data) => {
          if (data.reservacion) {
            setReservaciones(
              // @ts-ignore
              reservaciones.map((reserva) =>
                // @ts-ignore
                reserva._id === id ? data.reservacion : reserva
              )
            )
            toast.success('Reservacion editada con exito')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => toast.error('Error al editar la reserva:', error))
    }
  }

  const eliminarReservacion = (id) => {
    fetch(`http://localhost:3000/reservaciones/eliminar/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error al eliminar la reserva')
        }
      })
      .then((data) => {
        if (data.reservacion) {
          setReservaciones(
            // @ts-ignore
            reservaciones.filter((reserva) => reserva._id !== id)
          )
          toast.success('Reservacion Eliminada con exito')
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => toast.error('Error al eliminar la reserva:', error))
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
