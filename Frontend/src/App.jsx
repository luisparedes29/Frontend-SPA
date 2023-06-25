import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// @ts-ignore
import Login from './pages/Login'
import React from 'react'
import Promociones from './pages/Promociones'
import Reserva from './pages/Reserva'
import Servicios from './pages/Servicios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/Servicios' element={<Servicios />}></Route>
        <Route path='/Reserva' element={<Reserva />}></Route>
        <Route path='/Promociones' element={<Promociones />}></Route>
        <Route path='/Admin' element={<Landing />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
