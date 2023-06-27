import { Button, Label, Modal, TextInput, Select } from 'flowbite-react'
import React from 'react'
import { useState, useRef, useContext } from 'react'
import editar from '../assets/img/editar.svg'
import { ServiciosContext } from '../context/ServiciosContext'
import { PromocionesContext } from '../context/PromocionesContext'
const ModalPromociones = ({ isEdit }) => {
  const [openModal, setOpenModal] = useState()
  const { servicios } = useContext(ServiciosContext)
  const { crearPromocion } = useContext(PromocionesContext)
  const descuentoRef = useRef(null)
  const selectRef = useRef(null)
  const codigoRef = useRef(null)
  const props = { openModal, setOpenModal }

  // isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})
  const handleButtonSubmit = (e) => {
    e.preventDefault()
    const descuento = descuentoRef.current.value
    const servicio = selectRef.current.value
    const codigoDescuento = codigoRef.current.value
    crearPromocion({
      descuento,
      servicio,
      codigoDescuento,
    })
    props.setOpenModal(undefined)

    console.log({ descuento, servicio, codigoDescuento })
    descuentoRef.current.value = null
    codigoRef.current.value = null
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
                  {servicios.map((servicio) => (
                    <option key={servicio._id}>{servicio.servicio}</option>
                  ))}
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
                <TextInput
                  type='text'
                  placeholder='Ingresa el Codigo'
                  ref={codigoRef}
                />
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
