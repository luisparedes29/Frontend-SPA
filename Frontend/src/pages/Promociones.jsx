import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import imgPromociones from '../assets/img/imgPromociones.jpg'
import { Link } from 'react-router-dom'

const Promociones = () => {
  let precio = 200
  return (
    <div className='flex gap-5 flex-col'>
      <Header condicion={true} />
      <h2 className='text-center font-satisfy text-[35px] text-backPinkOsucuro'>
        Promociones
      </h2>
      <main className='min-h-[80vh] flex flex-wrap justify-center  '>
        <div className='w-[300px]'>
          <Card className='flex-row w-full max-w-[48rem] lg:mr-10'>
            <CardHeader
              shadow={false}
              floated={false}
              className='w-2/5 shrink-0 m-0 rounded-r-none'
            >
              <img
                src={imgPromociones}
                alt='image'
                className='w-full h-full object-cover'
              />
            </CardHeader>
            <CardBody>
              <Typography variant='h6' color='blue' className='uppercase mb-4'>
                SERVICIO
              </Typography>
              <Typography color='gray' className='font-normal'>
                Precio: {precio}
              </Typography>
              <Typography color='gray' className='font-normal mb-8'>
                Codigo
              </Typography>
              <Link to='/Reserva'>
                <Button
                  variant='text'
                  className='flex items-center gap-2 bg-backPinkOsucuro text-white'
                >
                  RESERVA YA
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>

        <div className='w-[300px]'>
          <Card className='flex-row w-full max-w-[48rem] lg:mr-10'>
            <CardHeader
              shadow={false}
              floated={false}
              className='w-2/5 shrink-0 m-0 rounded-r-none'
            >
              <img
                src={imgPromociones}
                alt='image'
                className='w-full h-full object-cover'
              />
            </CardHeader>
            <CardBody>
              <Typography variant='h6' color='blue' className='uppercase mb-4'>
                SERVICIO
              </Typography>
              <Typography color='gray' className='font-normal'>
                Precio: {precio}
              </Typography>
              <Typography color='gray' className='font-normal mb-8'>
                Codigo
              </Typography>
              <Link to='/Reserva'>
                <Button
                  variant='text'
                  className='flex items-center gap-2 bg-backPinkOsucuro text-white'
                >
                  RESERVA YA
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>

        <div className='w-[300px]'>
          <Card className='flex-row w-full max-w-[48rem] lg:mr-10'>
            <CardHeader
              shadow={false}
              floated={false}
              className='w-2/5 shrink-0 m-0 rounded-r-none'
            >
              <img
                src={imgPromociones}
                alt='image'
                className='w-full h-full object-cover'
              />
            </CardHeader>
            <CardBody>
              <Typography variant='h6' color='blue' className='uppercase mb-4'>
                SERVICIO
              </Typography>
              <Typography color='gray' className='font-normal'>
                Precio: {precio}
              </Typography>
              <Typography color='gray' className='font-normal mb-8'>
                Codigo
              </Typography>
              <Link to='/Reserva'>
                <Button
                  variant='text'
                  className='flex items-center gap-2 bg-backPinkOsucuro text-white'
                >
                  RESERVA YA
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Promociones
