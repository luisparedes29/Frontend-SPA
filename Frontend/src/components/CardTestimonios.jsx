import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react'
import perfilMujer from '../assets/img/perfilMujer.png'
import perfilHombre from '../assets/img/perfilHombre.png'
import React from 'react'
const CardTestimonios = () => {
  return (
    <article>
      <Card
        color='white'
        shadow={false}
        className='w-[300px] max-w-[26rem] p-6 shadow-lg'
      >
        <CardHeader
          color='transparent'
          floated={false}
          shadow={false}
          className='mx-0 flex items-center gap-4 pt-0 pb-8'
        >
          <Avatar
            size='lg'
            variant='circular'
            src={perfilHombre}
            alt='candice wu'
          />
          <div className='flex w-full flex-col gap-0.5'>
            <div className='flex items-center justify-between'>
              <Typography variant='h5' color='blue-gray'>
                Candice Wu
              </Typography>
              {/* <div className='5 flex items-center gap-0'>
              <StarIcon className='h-5 w-5 text-yellow-700' />
              <StarIcon className='h-5 w-5 text-yellow-700' />
              <StarIcon className='h-5 w-5 text-yellow-700' />
              <StarIcon className='h-5 w-5 text-yellow-700' />
              <StarIcon className='h-5 w-5 text-yellow-700' />
            </div> */}
            </div>
          </div>
        </CardHeader>
        <CardBody className='mb-6 p-0'>
          <Typography>
            &quot;I found solution to all my design needs from Creative Tim. I
            use them as a freelancer in my hobby projects for fun! And its
            really affordable, very humble guys !!!&quot;
          </Typography>
        </CardBody>
      </Card>
    </article>
  )
}

export default CardTestimonios
