'use client'

import { Card, Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import editar from '../assets/img/editar.svg'
import eliminar from '../assets/img/eliminar.svg'
import ModalTestimoniosAdmin from './ModalTestimoniosAdmin'
import { TestimoniosContext } from '../context/TestimoniosContext'

const TABLE_HEAD = ['Nombre', 'Sexo', 'Testimonoios', 'Acciones']

function TablaTestimonios() {
  const { testimonios, eliminarTestimonio } = useContext(TestimoniosContext)

  return (
    <div>
      <div className='flex justify-around sm:justify-between'>
        <h3 className='text-center mb-4 text-xl'>Testimonoios</h3>
        <ModalTestimoniosAdmin isEdit={false} />
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
            {testimonios.map(({ _id, nombre, sexo, testimonio }, index) => {
              const isLast = index === testimonios.length - 1
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
                      {sexo}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal'
                    >
                      {testimonio}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <div className='flex gap-2 justify-center'>
                      <ModalTestimoniosAdmin
                        isEdit={true}
                        testimonio={testimonio}
                        _id={_id}
                        nombre={nombre}
                        sexo={sexo}
                      />
                      <button
                        className='w-[20px]'
                        onClick={() => eliminarTestimonio(_id)}
                      >
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

export default TablaTestimonios
