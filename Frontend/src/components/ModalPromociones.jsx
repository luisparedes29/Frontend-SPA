import { Button, Label, Modal, TextInput, Select } from 'flowbite-react'
import React from 'react'
import { useState, useRef } from 'react'
import editar from '../assets/img/editar.svg'
const ModalPromociones = ({ isEdit }) => {
  const [openModal, setOpenModal] = useState()
  const descuentoRef = useRef(null)
  const selectRef = useRef(null)
  const props = { openModal, setOpenModal }

  // isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})
  const handleButtonSubmit = (e) => {
    e.preventDefault()
    const value = descuentoRef.current.value
    const value2 = selectRef.current.value
    console.log(value, value2)
  }

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
          <form onSubmit={handleButtonSubmit}>
            <div className='space-y-6'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Ingresa datos de la Promocione
              </h3>
              <div className='max-w-md' id='select'>
                <div className='mb-2 block'>
                  <Label
                    htmlFor='ServicioPromociones'
                    value='Selecciona Servicio'
                  />
                </div>
                <Select ref={selectRef}>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </Select>
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='DescuentoPromociones' value='Descuento' />
                </div>
                <TextInput
                  type='number'
                  placeholder='Ingresa el Descuento'
                  ref={descuentoRef}
                  min='1'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label
                    htmlFor='CodigoPromociones'
                    value='Codigo de Descuento'
                  />
                </div>
                <TextInput type='text' placeholder='Ingresa el Codigo' />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  {isEdit ? 'Editar Promocion' : 'Crear Promocion'}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalPromociones
