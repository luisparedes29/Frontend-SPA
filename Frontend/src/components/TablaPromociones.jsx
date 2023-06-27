'use client'

import { Card, Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import eliminar from '../assets/img/eliminar.svg'
import ModalUsuarios from './ModalUsuarios'
import { PromocionesContext } from '../context/PromocionesContext'

const TABLE_HEAD = ['Servicio', 'Descuento', 'Codigo', 'Acciones']

function TablaUsuarios() {
  const { promociones } = useContext(PromocionesContext)
  return (
    <div>
      <div className='flex justify-around'>
        <h3 className='text-center mb-4 text-xl'>Promociones</h3>
        <ModalUsuarios isEdit={false} />
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
            {promociones.map(
              ({ servicio, descuento, codigoDescuento, _id }, index) => {
                const isLast = index === promociones.length - 1
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
                        {descuento}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {codigoDescuento}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <div className='flex gap-2 justify-center'>
                        <ModalUsuarios isEdit={true} />
                        <button className='w-[20px]'>
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

export default TablaUsuarios
