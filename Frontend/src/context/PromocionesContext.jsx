import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'
import toast from 'react-hot-toast'

// @ts-ignore
export const PromocionesContext = createContext()

export function PromocionesProvider({ children }) {
  const { token } = useContext(AuthContext)
  const [promociones, setPromociones] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/promociones')
      .then((response) => response.json())
      .then((data) => setPromociones(data.promociones))
      .catch((error) => console.error(error))
  }, [])

  const crearPromocion = (promocion) => {
    if (token) {
      fetch('http://localhost:3000/promociones/nuevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(promocion),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.promocion) {
            // @ts-ignore
            setPromociones([...promociones, data.promocion])
            toast.success('Promocion Creada')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          toast.error('Ha ocurrido un problema al crear la promocion', error)
        )
    }
  }

  const editarPromocion = (id, promocionActualizada) => {
    if (token) {
      fetch(`http://localhost:3000/promociones/editar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(promocionActualizada),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.promocion) {
            setPromociones(
              // @ts-ignore
              promociones.map((promocion) =>
                // @ts-ignore
                promocion._id === id ? data.promocion : promocion
              )
            )
            toast.success('Promocion Editada')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) =>
          toast.error('Ha ocurrido un problema al editar la promocion', error)
        )
    }
  }

  const eliminarPromocion = (id) => {
    if (token) {
      fetch(`http://localhost:3000/promociones/eliminar/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.promocion) {
            setPromociones(
              // @ts-ignore
              promociones.filter((promocion) => promocion._id !== id)
            )
            toast.success('Promocion Eliminada')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => toast.error('Error al eliminar la promoción:', error))
    }
  }

  const promocionesContextValue = {
    promociones,
    crearPromocion,
    editarPromocion,
    eliminarPromocion,
  }

  return (
    <PromocionesContext.Provider value={promocionesContextValue}>
      {children}
    </PromocionesContext.Provider>
  )
}
