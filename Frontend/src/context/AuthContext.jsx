import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import toast from 'react-hot-toast'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const tokenFromStorage = localStorage.getItem('token')
    return tokenFromStorage || '' // Si no hay token en el localStorage, se establece una cadena vacía como valor inicial
  })

  // Función para establecer el token en el contexto y en el almacenamiento local
  const login = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
    toast.success('Loggeado')
  }

  // Función para eliminar el token del contexto y del almacenamiento local
  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  async function usinglocal() {}

  // Verificar si hay un token guardado en el almacenamiento local al cargar la aplicación
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      const decodedToken = jwt_decode(storedToken)
      const currentTime = Date.now() / 1000 // Obtener la fecha actual en segundos

      // Verificar si el token está vencido
      if (decodedToken.exp < currentTime) {
        logout() // Si el token está vencido, hacer logout
      } else {
        setToken(storedToken) // Si el token es válido, establecerlo en el estado
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
