import React, { useState } from 'react'
import editar from '../assets/img/editar.svg'
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'

export default function Example() {
  const [openModal, setOpenModal] = useState()
  const props = { openModal, setOpenModal }

  return (
    <>
      <Button
        className='bg-backPinkOsucuro p-0 mb-3'
        onClick={() => props.setOpenModal('form-elements')}
      >
        <img className='w-[27px]' src={editar}></img>
      </Button>
      <Modal
        show={props.openModal === 'form-elements'}
        position='center'
        size='md'
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className='bg-backPink' />
        <Modal.Body className='bg-backPink'>
          <form>
            <div className='space-y-6'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Ingresa los datos del Servicio
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='servicio' value='Servicio' />
                </div>
                <TextInput
                  id='servicio'
                  type='text'
                  placeholder='Ingresa el nombre del servicio'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='Precio' value='Precio' />
                </div>
                <TextInput
                  id='Precio'
                  type='number'
                  placeholder='Ingresa el Precio'
                  min='1'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='Duracion' value='Duracion' />
                </div>
                <TextInput
                  id='Duracion'
                  type='time'
                  placeholder='Ingresa el tiempo'
                  required
                />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='descripcion' value='Descripcion' />
                </div>
                <TextInput
                  id='descripcion'
                  type='text'
                  placeholder='Ingresa la descripcion'
                  required
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  Crear TablaReservaciones
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
