import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import Footer from '../components/Footer'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useContext(AuthContext)
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsuario(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setContraseña(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    // Hacer la solicitud de inicio de sesión
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, contraseña }),
    })

    // Manejar la respuesta
    if (response) {
      const { token } = await response.json()
      login(token)
      navigate('/Admin') // Almacenar el token en el contexto de autenticación
      // Realizar alguna acción adicional, como redireccionar a la página de inicio
    } else {
      console.log('Error en el inicio de sesión')
      // Mostrar un mensaje de error o realizar alguna acción adicional
    }
  }

  return (
    <>
      <Header condicion={true} />
      <div className='flex justify-center items-center h-[80vh]'>
        <Card color='transparent' shadow={false} className='bg-backPink p-4'>
          <Typography
            variant='h4'
            color='blue-gray'
            className='flex justify-center font-workSans'
          >
            ADMIN
          </Typography>
          <Typography color='gray' className='mt-1 font-workSans'>
            Ingresa tus datos de usuario
          </Typography>
          <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-6'>
              <Input
                size='lg'
                label='Usuario'
                className='font-workSans'
                value={usuario}
                onChange={handleUsernameChange}
              />
              <Input
                type='password'
                size='lg'
                label='Contraseña'
                className='font-workSans'
                value={contraseña}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='flex justify-center'>
              <Button
                className='mt-6 bg-backPinkOsucuro w-3/5'
                onClick={handleLogin}
              >
                Ingresar
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default Login
