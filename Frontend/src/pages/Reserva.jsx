import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Reserva = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Header condicion={true} />
      <main className='min-h-[80vh] flex justify-center items-center'>
        <Card color='transparent' shadow={false} className='bg-backPink p-4'>
          <Typography variant='h4' color='blue-gray'>
            Reserva
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Ingresa tus datos para la reservacion
          </Typography>
          <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-2'>
              <Input size='lg' label='Nombre' className='bg-white' />
              <Input size='lg' label='Cedula' className='bg-white' />
              <Input size='lg' label='Correo' className='bg-white' />
              <Select label='Servicios' className='bg-white'>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Input
                size='lg'
                label='Codigo de Descuento'
                className='bg-white'
              />
              <Input type='date' size='lg' className='bg-white' />
              <Input type='time' size='lg' className='bg-white' />
            </div>
            <div className='flex justify-center'>
              <Button className='mt-6 w-2/3 bg-backPinkOsucuro'>
                Registro
              </Button>
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default Reserva
