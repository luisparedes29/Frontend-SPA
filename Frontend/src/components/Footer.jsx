import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Footer = () => {
  const { logout, token } = useContext(AuthContext)

  return (
    <>
      <footer className='bg-backPinkOsucuro text-black'>
        <div className='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8'>
          <nav className='flex flex-wrap justify-center -mx-5 -my-2'>
            <Link to='/'>
              <div className='px-5 py-2'>Inicio</div>
            </Link>
            <Link to='/Servicios'>
              <div className='px-5 py-2'>Servicios</div>
            </Link>
            <Link to='/Promociones'>
              <div className='px-5 py-2'>Promociones</div>
            </Link>
            <Link to='/Reserva'>
              <div className='px-5 py-2'>Reservaciones</div>
            </Link>
            {token && (
              <Link to='/Admin'>
                <div className='px-5 py-2'>ADMIN</div>
              </Link>
            )}
            {token ? (
              <div onClick={logout}>
                <div className='px-5 py-2'>Logout</div>
              </div>
            ) : (
              <Link to='/Login'>
                <div className='px-5 py-2'>Login</div>
              </Link>
            )}
          </nav>
          <p className='mt-8 text-base leading-6 text-center'>
            © 2023 Toque Sanador, Inc. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
