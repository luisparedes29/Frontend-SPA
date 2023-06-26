import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// @ts-ignore
import Login from './pages/Login'
import React from 'react'
import Promociones from './pages/Promociones'
import Reserva from './pages/Reserva'
import Servicios from './pages/Servicios'
import Admin from './pages/Admin'
import ContextFunctions from './context/ContextFunctions'

function App() {
  return (
    <ContextFunctions>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/Servicios' element={<Servicios />}></Route>
          <Route path='/Reserva' element={<Reserva />}></Route>
          <Route path='/Promociones' element={<Promociones />}></Route>{' '}
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextFunctions>
  )
}

export default App
