import React, { useState } from 'react'
import editar from '../assets/img/editar.svg'
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'

export default function ModalReservaciones() {
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
                Ingresa los datos de la Reservacion
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nombre' value='Nombre' />
                </div>
                <TextInput
                  id='nombreReservacion'
                  type='text'
                  placeholder='Ingresa el nombre de la persona'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='CedulaReservacion' value='Cedula' />
                </div>
                <TextInput
                  id='CedulaReservacion'
                  type='text'
                  placeholder='Ingresa la cedula de identidad'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='correo' value='Correo' />
                </div>
                <TextInput
                  id='Cedula'
                  type='email'
                  placeholder='Ingresa tu correo ejemplo@gmail.com'
                  required
                />
              </div>
              <div className='max-w-md' id='select'>
                <div className='mb-2 block'>
                  <Label htmlFor='servicio' value='Selecciona el servicio' />
                </div>
                <Select id='servicioReservacion' required>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='cantidad' value='Cantidad de personas' />
                </div>
                <TextInput
                  id='cantidad'
                  type='number'
                  placeholder='Ingresa la cantidad de personas'
                  min='1'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='' value='Fecha' />
                </div>
                <TextInput
                  id='Fecha'
                  type='date'
                  placeholder='Ingresa la Fecha'
                  required
                />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='Hora' value='Hora' />
                </div>
                <TextInput
                  id='Hora'
                  type='date'
                  placeholder='Ingresa la Hora'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='codigo' value='Codigo de Descuento' />
                </div>
                <TextInput
                  id='codigo'
                  placeholder='Ingresa el codigo de Descuento'
                  required
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  Crear Reservacion
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
