import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/Servicios' element={<Landing />}></Route>
        <Route path='/Reserva' element={<Landing />}></Route>
        <Route path='/Promociones' element={<Landing />}></Route>

        <Route path='/Admin' element={<Landing />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
