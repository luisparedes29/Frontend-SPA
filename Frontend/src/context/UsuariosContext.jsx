import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'

export const UsuariosContext = createContext()

export function UsuariosProvider({ children }) {
  const { token } = useContext(AuthContext)
  const [usuarios, setUsuarios] = useState([])
  console.log(token)

  useEffect(() => {
    fetch('http://localhost:3000/usuarios', {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsuarios(data.usuarios))
      .catch((error) => console.error(error))
  }, [token])

  const crearUsuario = (usuario) => {
    fetch('http://localhost:3000/usuarios/nuevo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiTWFydGFKIiwiaWQiOiI2NDk1MThhYTU4NzNlMThkYjQ4ODkyOTAiLCJpYXQiOjE2ODc0OTQzODJ9.NYk-AMB_L7qQmjO4iw2eSYqNBSeC7tJkCdAjhiLno9Q',
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsuarios([...usuarios, data.usuario])
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al crear el usuario:', error))
  }

  const editarUsuario = (id, usuarioActualizado) => {
    fetch(`http://localhost:3000/usuarios/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiTWFydGFKIiwiaWQiOiI2NDk1MThhYTU4NzNlMThkYjQ4ODkyOTAiLCJpYXQiOjE2ODc0OTQzODJ9.NYk-AMB_L7qQmjO4iw2eSYqNBSeC7tJkCdAjhiLno9Q',
      },
      body: JSON.stringify(usuarioActualizado),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsuarios(
            usuarios.map((usuario) =>
              usuario._id === id ? data.usuario : usuario
            )
          )
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al editar el usuario:', error))
  }

  const eliminarUsuario = (id) => {
    fetch(`http://localhost:3000/usuarios/eliminar/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiTWFydGFKIiwiaWQiOiI2NDk1MThhYTU4NzNlMThkYjQ4ODkyOTAiLCJpYXQiOjE2ODc0OTQzODJ9.NYk-AMB_L7qQmjO4iw2eSYqNBSeC7tJkCdAjhiLno9Q',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsuarios(usuarios.filter((usuario) => usuario._id !== id))
        } else {
          throw new Error(data.message)
        }
      })
      .catch((error) => console.error('Error al eliminar el usuario:', error))
  }

  const usuariosContextValue = {
    usuarios,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
  }

  return (
    <UsuariosContext.Provider value={usuariosContextValue}>
      {children}
    </UsuariosContext.Provider>
  )
}
