import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// @ts-ignore
import Login from './pages/Login'
import React from 'react'
import Promociones from './pages/Promociones'
import Reserva from './pages/Reserva'
import Servicios from './pages/Servicios'
import Admin from './pages/Admin'
import { PromocionesProvider } from './context/PromocionesContext'
import { TestimoniosProvider } from './context/TestimoniosContext'
import { ReservacionesProvider } from './context/ReservacionesContext'
import { ServiciosProvider } from './context/ServiciosContext'
import { UsuariosProvider } from './context/UsuariosContext'
import { AuthProvider } from './context/AuthContext'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

function App() {
  const helmetContext = {}
  return (
    <AuthProvider>
      <PromocionesProvider>
        <TestimoniosProvider>
          <ReservacionesProvider>
            <ServiciosProvider>
              <UsuariosProvider>
                <HelmetProvider context={helmetContext}>
                  <Helmet>
                    <title>Toque Sanador</title>
                    <meta
                      name='description'
                      content='Spa de masajes ubicado en la ciudad de Valera'
                    />
                  </Helmet>
                  <Toaster />
                  <BrowserRouter>
                    <Routes>
                      <Route path='/' element={<Landing />}></Route>
                      <Route path='/Servicios' element={<Servicios />}></Route>
                      <Route path='/Reserva' element={<Reserva />}></Route>
                      <Route
                        path='/Promociones'
                        element={<Promociones />}
                      ></Route>
                      <Route path='/Login' element={<Login />}></Route>
                      <Route path='/Admin' element={<Admin />}></Route>
                    </Routes>
                  </BrowserRouter>
                </HelmetProvider>
              </UsuariosProvider>
            </ServiciosProvider>
          </ReservacionesProvider>
        </TestimoniosProvider>
      </PromocionesProvider>
    </AuthProvider>
  )
}

export default App
