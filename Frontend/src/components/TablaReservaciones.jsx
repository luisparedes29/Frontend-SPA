'use client'

import { Card, Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import editar from '../assets/img/editar.svg'
import eliminar from '../assets/img/eliminar.svg'
import ModalReservaciones from './ModalReservaciones'
import { ReservacionesContext } from '../context/ReservacionesContext'

const TABLE_HEAD = [
  'Nombre',
  'Cedula',
  'Correo',
  'Servicio',
  'Personas',
  'CODIGO',
  'Fecha',
  'Hora',
  'Acciones',
]

function TablaReservaciones() {
  const { reservaciones, eliminarReservacion } =
    useContext(ReservacionesContext)
  return (
    <div>
      <div className='flex justify-around sm:justify-between'>
        <h3 className='text-center mb-4 text-xl'>Reservaciones</h3>
        <ModalReservaciones isEdit={false} />
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
            {reservaciones &&
              reservaciones.map(
                (
                  {
                    nombre,
                    correo,
                    cedula,
                    servicio,
                    personas,
                    codigoDescuento,
                    fecha,
                    hora,
                    _id,
                  },
                  index
                ) => {
                  const isLast = index === reservaciones.length - 1
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
                          {nombre}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {cedula}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {correo}
                        </Typography>
                      </td>
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
                          {personas}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {codigoDescuento}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {fecha}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {hora}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <div className='flex gap-2 justify-center'>
                          <ModalReservaciones isEdit={true} _id={_id} />
                          <button
                            className='w-[20px]'
                            onClick={() => eliminarReservacion(_id)}
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

export default TablaReservaciones
