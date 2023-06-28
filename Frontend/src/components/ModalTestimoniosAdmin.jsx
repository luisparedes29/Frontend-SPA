import { Button, Label, Modal, TextInput, Select } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState, useContext, useRef } from 'react'
import editar from '../assets/img/editar.svg'
import { TestimoniosContext } from '../context/TestimoniosContext'
import { toast } from 'react-hot-toast'
const ModalTestimoniosAdmin = ({ isEdit, _id = null }) => {
  const [openModal, setOpenModal] = useState()
  const props = { openModal, setOpenModal }
  const { crearTestimonio, editarTestimonio, eliminarPromocion } =
    useContext(TestimoniosContext)
  const nombreRef = useRef(null)
  const sexoRef = useRef(null)
  const testimonioRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const sexo = sexoRef.current.value
    const nombre = nombreRef.current.value
    const testimonio = testimonioRef.current.value

    if (
      !sexo ||
      !nombre ||
      !testimonio ||
      sexo.trim() < 1 ||
      nombre.trim() < 1 ||
      testimonio.trim() < 1
    ) {
      return toast.error(
        'Todos los campos son obligatorios, por favor completa cada uno'
      )
    }
    isEdit
      ? await editarTestimonio(_id, {
          sexo,
          nombre,
          testimonio,
        })
      : await crearTestimonio({
          sexo,
          nombre,
          testimonio,
        })
    props.setOpenModal(undefined)
  }

  // isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})

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
          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Ingresa datos del testimonio
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nombre' value='Nombre' />
                </div>
                <TextInput
                  type='text'
                  placeholder='Nombre'
                  ref={nombreRef}
                  required
                />
              </div>
              <div className='max-w-md' id='select'>
                <div className='mb-2 block'>
                  <Label htmlFor='sexo' value='Selecciona sexo' />
                </div>
                <Select ref={sexoRef} required>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </Select>
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='testimonio' value='Testimonio' />
                </div>
                <TextInput
                  ref={testimonioRef}
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
