import React, { useState, useContext, useRef } from 'react'
import editar from '../assets/img/editar.svg'
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'
import { ServiciosContext } from '../context/ServiciosContext'
import { toast } from 'react-hot-toast'

export default function ModalServicios({ isEdit, _id = null }) {
  const [openModal, setOpenModal] = useState()
  const { crearServicio, editarServicio } = useContext(ServiciosContext)

  const servicioRef = useRef(null)
  const precioRef = useRef(null)
  const descripcionRef = useRef(null)
  const tiempoRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const servicio = servicioRef.current.value
    const precio = precioRef.current.value
    const descripcion = descripcionRef.current.value
    const duracion = tiempoRef.current.value

    if (
      !servicio ||
      servicio.trim() < 1 ||
      !precio ||
      precio.trim() < 1 ||
      !descripcion ||
      descripcion.trim() < 1 ||
      !duracion ||
      duracion.trim() < 1
    ) {
      return toast.error('Todos los campos son obligatorios')
    }

    isEdit
      ? await editarServicio(_id, {
          servicio,
          precio,
          descripcion,
          duracion,
        })
      : await crearServicio({
          servicio,
          precio,
          descripcion,
          duracion,
        })

    servicioRef.current.value = ''
    precioRef.current.value = ''
    descripcionRef.current.value = ''
    tiempoRef.current.value = ''

    setOpenModal(undefined)

    //cerramos modal
  }

  const props = { openModal, setOpenModal }

  //isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})

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
                Ingresa los datos del Servicio
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='servicio' value='Servicio' />
                </div>
                <TextInput
                  type='text'
                  ref={servicioRef}
                  placeholder='Ingresa el nombre del servicio'
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='Precio' value='Precio' />
                </div>
                <TextInput
                  type='number'
                  ref={precioRef}
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
                  type='time'
                  ref={tiempoRef}
                  placeholder='Ingresa el tiempo'
                  required
                />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='descripcion' value='Descripcion' />
                </div>
                <TextInput
                  type='text'
                  ref={descripcionRef}
                  placeholder='Ingresa la descripcion'
                  required
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  {isEdit ? 'Editar Servicio' : 'Crear servicio'}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
