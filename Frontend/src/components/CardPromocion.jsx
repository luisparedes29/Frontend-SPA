import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react'
import imgPromociones from '../assets/img/imgPromociones.jpg'
import { Link } from 'react-router-dom'

import React from 'react'
const CardPromocion = ({ promocion }) => {
  return (
    <>
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
              {promocion.servicio}
            </Typography>
            <Typography color='gray' className='font-normal'>
              Descuento: {promocion.descuento}
            </Typography>
            <Typography color='gray' className='font-normal mb-8'>
              Codigo: {promocion.codigoDescuento}
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
    </>
  )
}

export default CardPromocion
