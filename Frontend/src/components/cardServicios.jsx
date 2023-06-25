import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import React from 'react'
const CardServicios = () => {
  return (
    <Card className='w-[200px] bg-backPink'>
      <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2 text-center'>
          Servicio
        </Typography>
        <div>
          <p className='text-[20px]'>Precio: </p>
          <p className='text-[18px]'>Duracion: </p>
        </div>
      </CardBody>
      <CardFooter className='pt-0 flex justify-center'>
        <Button className='bg-backPinkOsucuro rounded-3xl'>Reserva</Button>
      </CardFooter>
    </Card>
  )
}

export default CardServicios
