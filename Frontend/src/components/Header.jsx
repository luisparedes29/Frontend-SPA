import { FaBars, FaTimes } from 'react-icons/fa'
import { useContext, useState } from 'react'
import logo from '../assets/img/logo.webp'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import React from 'react'

const Header = ({ condicion = false }) => {
  const [clase, setClase] = useState('-left-full')
  const { token, logout } = useContext(AuthContext)
  function cambio() {
    if (clase == '-left-full') {
      setClase('left-0')
    } else {
      setClase('-left-full')
    }
  }
  return (
    <>
      <header>
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
                ' absolute top-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-marronClaro font-workSans text-letrasHead text-2xl transition-all duration-1000 md:static md:flex-row md:h-auto md:bg-transparent md:transition-none md:gap-3 z-20'
              }
            >
              <FaTimes
                className='absolute top-16 right-10 cursor-pointer text-4xl md:hidden'
                onClick={cambio}
              />
              <NavLink to='/'>
                <li
                  onClick={cambio}
                  className='p-4 hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                >
                  Inicio
                </li>
              </NavLink>
              <NavLink to='/Servicios'>
                <li
                  onClick={cambio}
                  className='p-4 hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                >
                  Servicios
                </li>
              </NavLink>
              <NavLink to='/Promociones'>
                <li
                  onClick={cambio}
                  className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                >
                  Promociones
                </li>
              </NavLink>
              <NavLink to='/Reserva'>
                <li
                  onClick={cambio}
                  className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                >
                  Reserva
                </li>
              </NavLink>
              {token && (
                <NavLink to='/Admin'>
                  <li
                    onClick={cambio}
                    className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                  >
                    ADMIN
                  </li>
                </NavLink>
              )}
              {token ? (
                <div onClick={logout}>
                  <li
                    onClick={cambio}
                    className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                  >
                    Logout
                  </li>
                </div>
              ) : (
                <NavLink to='/Login'>
                  <li
                    onClick={cambio}
                    className='p-4  hover:border-letrasHead hover:border-2 hover:bg-marronOscuro hover:bg-opacity-30 hover:rounded-lg md:text-lg'
                  >
                    Login
                  </li>
                </NavLink>
              )}
            </ul>
            <FaBars
              className='text-4xl text-white cursor-pointer md:hidden'
              onClick={cambio}
            />
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
