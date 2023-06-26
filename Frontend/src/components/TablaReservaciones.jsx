'use client'

import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import editar from '../assets/img/editar.svg'
import eliminar from '../assets/img/eliminar.svg'
import ModalReservaciones from './ModalReservaciones'

const TABLE_HEAD = [
  'Nombre',
  'Cedula',
  'Servicio',
  'Personas',
  'CODIGO',
  'Acciones',
]

const TABLE_ROWS = [
  {
    name: 'John Michael',
    job: 'Manager',
    date: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    job: 'Developer',
    date: '23/04/18',
  },
  {
    name: 'Laurent Perrier',
    job: 'Executive',
    date: '19/09/17',
  },
  {
    name: 'Michael Levi',
    job: 'Developer',
    date: '24/12/08',
  },
  {
    name: 'Richard Gran',
    job: 'Manager',
    date: '04/10/21',
  },
]

function TablaReservaciones() {
  return (
    <div>
      <div className='flex justify-around'>
        <h3 className='text-center mb-4 text-xl'>Reservaciones</h3>
        <ModalReservaciones isEdit={false} />
      </div>

      <Card className='overflow-scroll h-full w-[350px]'>
        <table className='w-[350px] min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal leading-none opacity-70'
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast
                ? 'p-2'
                : 'p-2 border-b border-blue-gray-50'

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      Vacio
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      Vacio
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <div className='flex gap-2 justify-center'>
                      <ModalReservaciones isEdit={true} />
                      <button className='w-[20px]'>
                        <img src={eliminar}></img>
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default TablaReservaciones
