'use client'

import { Card, Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import editar from '../assets/img/editar.svg'
import eliminar from '../assets/img/eliminar.svg'
import ModalServicios from './ModalServicios'
import { ServiciosContext } from '../context/ServiciosContext'

const TABLE_HEAD = ['Servicio', 'Precio', 'Duracion', 'Descripcion', 'Acciones']

export default function TablaServicios() {
  const { servicios, eliminarServicio } = useContext(ServiciosContext)
  return (
    <div>
      <div className='flex justify-around sm:justify-between'>
        <h3 className='text-center mb-4 text-xl'>Servicios</h3>
        <ModalServicios isEdit={false} />
      </div>
      <Card className='overflow-scroll h-full w-[350px] sm:w-full'>
        <table className='w-[350px] sm:w-full min-w-max table-auto text-left'>
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
            {servicios.map(
              ({ _id, servicio, precio, duracion, descripcion }, index) => {
                const isLast = index === servicios.length - 1
                const classes = isLast
                  ? 'p-2'
                  : 'p-2 border-b border-blue-gray-50'

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {servicio}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {precio}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {duracion}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {descripcion}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <div className='flex gap-2 justify-center items-center'>
                        <ModalServicios isEdit={true} _id={_id} />
                        <button
                          className='w-[20px]'
                          onClick={() => eliminarServicio(_id)}
                        >
                          <img src={eliminar}></img>
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
