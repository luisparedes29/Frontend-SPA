import React from 'react'
import { Link } from 'react-router-dom'

const BtnReserva = () => {
  return (
    <Link to='/Reserva' className='z-10'>
      <button className='bg-backPinkOsucuro w-56 h-16 rounded-[30px] mt-7'>
        <p className='font-workSans text-center text-black text-[20px] font-normal'>
          ¡RESERVA YA!
        </p>
      </button>
    </Link>
  )
}

export default BtnReserva
