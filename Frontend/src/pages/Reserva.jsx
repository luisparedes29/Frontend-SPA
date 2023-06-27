import React, { useState } from 'react'
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
  const [nombre, setNombre] = useState('')
  const [cedula, setCedula] = useState('')
  const [correo, setCorreo] = useState('')
  const [cantidadPersonas, setCantidadPersonas] = useState(1)
  const [servicio, setServicio] = useState('')
  const [codigoDescuento, setCodigoDescuento] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Aquí puedes enviar los datos del formulario a través de una petición HTTP
    const data = {
      nombre,
      cedula,
      correo,
      cantidadPersonas,
      servicio,
      codigoDescuento,
      fecha,
      hora,
    }

    // Aquí puedes realizar la lógica de envío del formulario
    console.log(data)
  }

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
          <form
            className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
            onSubmit={handleSubmit}
          >
            <div className='mb-4 flex flex-col gap-2'>
              <Input
                size='lg'
                label='Nombre'
                className='bg-white'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Input
                size='lg'
                label='Cedula'
                className='bg-white'
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
              />
              <Input
                type='email'
                size='lg'
                label='Correo'
                className='bg-white'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Input
                type='number'
                size='lg'
                label='Cantidad de personas'
                className='bg-white'
                min='1'
                value={cantidadPersonas}
                onChange={(e) => setCantidadPersonas(e.target.value)}
              />
              <Select
                label='Servicios'
                className='bg-white'
                value={servicio}
                onChange={() => setServicio(target.value)}
              >
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
                value={codigoDescuento}
                onChange={(e) => setCodigoDescuento(e.target.value)}
              />
              <Input
                type='date'
                size='lg'
                className='bg-white'
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <Input
                type='time'
                size='lg'
                className='bg-white'
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>
            <div className='flex justify-center'>
              <Button type='submit' className='mt-6 w-2/3 bg-backPinkOsucuro'>
                Reservar
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
