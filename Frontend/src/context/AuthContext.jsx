import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  // Función para establecer el token en el contexto y en el almacenamiento local
  const login = (newToken) => {
    setToken(newToken)
    localStorage.setItem('token', JSON.stringify(newToken))
  }

  // Función para eliminar el token del contexto y del almacenamiento local
  const logout = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  // Verificar si hay un token guardado en el almacenamiento local al cargar la aplicación
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(JSON.parse(storedToken))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
