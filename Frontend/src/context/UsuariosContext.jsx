import React, { createContext, useState, useEffect, useContext } from 'react'
import { AuthContext } from './AuthContext'
import toast from 'react-hot-toast'

export const UsuariosContext = createContext()

export function UsuariosProvider({ children }) {
  const { token } = useContext(AuthContext)
  const [usuarios, setUsuarios] = useState([])
  // console.log(token)

  useEffect(() => {
    if (token) {
      fetch('http://localhost:3000/usuarios', {
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            // Establecer el estado de error en true
            throw new Error('Error en la solicitud')
          }
        })
        .then((data) => setUsuarios(data.usuarios))
        .catch((error) => console.error(error))
    }
  }, [token])

  const crearUsuario = (usuario) => {
    if (token) {
      fetch('http://localhost:3000/usuarios/nuevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(usuario),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Error al crear el usuario')
          }
        })
        .then((data) => {
          console.log(data)
          if (data.usuario) {
            setUsuarios([...usuarios, data.usuario])
            toast.success('Usuario creado con exito')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => toast.error('Error al crear el usuario:', error))
    }
  }

  const editarUsuario = (id, usuarioActualizado) => {
    if (token) {
      fetch(`http://localhost:3000/usuarios/editar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(usuarioActualizado),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Error al editar el usuario')
          }
        })
        .then((data) => {
          if (data.usuario) {
            setUsuarios(
              usuarios.map((usuario) =>
                usuario._id === id ? data.usuario : usuario
              )
            )
            toast.success('Usuario editado con exito')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => toast.error('Error al editar el usuario:', error))
    }
  }

  const eliminarUsuario = (id) => {
    if (token) {
      fetch(`http://localhost:3000/usuarios/eliminar/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('Error al eliminar el usuario')
          }
        })
        .then((data) => {
          if (data.usuario) {
            setUsuarios(usuarios.filter((usuario) => usuario._id !== id))
            toast.success('Usuario eliminado con exito')
          } else {
            throw new Error(data.message)
          }
        })
        .catch((error) => toast.error('Error al eliminar el usuario:', error))
    }
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
