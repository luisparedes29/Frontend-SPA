import { Button, Label, Modal, TextInput, Select } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import editar from '../assets/img/editar.svg'
const ModalTestimoniosAdmin = ({ isEdit }) => {
  const [openModal, setOpenModal] = useState()
  const props = { openModal, setOpenModal }

  isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})

  return (
    <>
      <Button
        className={`${
          isEdit ? 'bg-transparent ' : 'bg-backPinkOsucuro mb-3 '
        } p-0 `}
        onClick={() => props.setOpenModal('form-elements')}
      >
        <img className={`${isEdit ? 'w-4' : 'w-[27px]'}`} src={editar}></img>
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
                Ingresa datos del testimonio
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nombre' value='Nombre' />
                </div>
                <TextInput
                  id='nombre'
                  type='text'
                  placeholder='Nombre'
                  required
                />
              </div>
              <div className='max-w-md' id='select'>
                <div className='mb-2 block'>
                  <Label htmlFor='sexo' value='Selecciona sexo' />
                </div>
                <Select id='sexo' required>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </Select>
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='testimonio' value='Testimonio' />
                </div>
                <TextInput
                  id='testimonio'
                  type='text'
                  placeholder='Ingresa testimonio'
                  required
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  {isEdit ? 'Editar testimonio' : 'Enviar Testimonio'}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalTestimoniosAdmin
