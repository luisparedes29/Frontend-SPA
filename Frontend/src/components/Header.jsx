import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import logo from '../assets/img/logo.webp'
import { NavLink } from 'react-router-dom'

const Header = ({ condicion = false }) => {
  const [clase, setClase] = useState('-left-full')
  function cambio() {
    if (clase == '-left-full') {
      setClase('left-0')
    } else {
      setClase('-left-full')
    }
  }
  return (
    <>
      <div>
        <div
          className={
            'flex items-center justify-between px-10 py-2 ' +
            (condicion ? 'bg-backPink' : '')
          }
        >
          <figure className='w-20'>
            <img src={logo} className='' />
          </figure>
          <nav className=''>
            <ul
              className={
                clase +
                ' absolute top-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-marronClaro font-workSans text-letrasHead text-2xl transition-all duration-1000 sm:static sm:flex-row sm:h-auto sm:bg-transparent sm:transition-none z-10'
              }
            >
              <FaTimes
                className='absolute top-16 right-10 cursor-pointer text-4xl sm:hidden'
                onClick={cambio}
              />
              <NavLink to='/'>
                <li
                  onClick={cambio}
                  className='p-4 hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg'
                >
                  Inicio
                </li>
              </NavLink>
              <NavLink to='/Servicios'>
                <li
                  onClick={cambio}
                  className='p-4 hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg'
                >
                  Servicios
                </li>
              </NavLink>
              <NavLink to='/Promociones'>
                <li
                  onClick={cambio}
                  className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg'
                >
                  Promociones
                </li>
              </NavLink>
              <NavLink to='/Reserva'>
                <li
                  onClick={cambio}
                  className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg'
                >
                  Reserva
                </li>
              </NavLink>
              <NavLink to='/Login'>
                <li
                  onClick={cambio}
                  className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg sm:text-lg'
                >
                  Login
                </li>
              </NavLink>
            </ul>
            <FaBars
              className='text-4xl text-white cursor-pointer sm:hidden'
              onClick={cambio}
            />
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
