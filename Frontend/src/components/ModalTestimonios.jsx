import { Button, Label, Modal, TextInput, Select } from 'flowbite-react'
import React from 'react'
import { useState, useRef, useContext } from 'react'
import { TestimoniosContext } from '../context/TestimoniosContext'
import { toast } from 'react-hot-toast'
const ModalTestimonios = () => {
  const [openModal, setOpenModal] = useState()
  const sexoRef = useRef(null)
  const nombreRef = useRef(null)
  const testimonioRef = useRef(null)
  const { crearTestimonio } = useContext(TestimoniosContext)

  const props = { openModal, setOpenModal }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const sexo = sexoRef.current.value
    const nombre = nombreRef.current.value
    const testimonio = testimonioRef.current.value
    console.log({ sexo, nombre, testimonio })
    if (
      !sexo ||
      sexo.trim() < 1 ||
      !nombre ||
      nombre.trim() < 1 ||
      !testimonio ||
      testimonio.trim() < 1
    )
      return toast.error('Todos los campos son obligatorios')

    await crearTestimonio({ sexo, nombre, testimonio })
    props.setOpenModal(undefined)
  }
  return (
    <>
      <Button
        className='w-2/4 bg-backPinkOsucuro'
        onClick={() => props.setOpenModal('form-elements')}
      >
        <span className='text-base'>Añade tu testimonio</span>
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
                Ingresa tus datos y crea el testimonio
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nombre' value='Tu Nombre' />
                </div>
                <TextInput
                  ref={nombreRef}
                  type='text'
                  placeholder='Ingresa tu nombre'
                  required
                />
              </div>
              <div className='max-w-md' id='select'>
                <div className='mb-2 block'>
                  <Label htmlFor='sexo' value='Selecciona tu sexo' />
                </div>
                <Select ref={sexoRef} required>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </Select>
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='testimonio' value='Tu Testimonio' />
                </div>
                <TextInput
                  ref={testimonioRef}
                  type='text'
                  placeholder='Ingresa tu testimonio'
                  required
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  Enviar testimonio
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalTestimonios
