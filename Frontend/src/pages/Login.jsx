import React from 'react'
import Header from '../components/Header'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import Footer from '../components/Footer'

const Login = () => {
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
              <Input size='lg' label='Usuario' className='font-workSans' />
              <Input
                type='password'
                size='lg'
                label='Contraseña'
                className='font-workSans'
              />
            </div>
            <div className='flex justify-center'>
              <Button className='mt-6 bg-backPinkOsucuro w-3/5'>
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
