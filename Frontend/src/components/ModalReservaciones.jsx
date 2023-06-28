import React, { useState, useContext, useRef } from 'react'
import editar from '../assets/img/editar.svg'
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react'
import { ServiciosContext } from '../context/ServiciosContext'
import { ReservacionesContext } from '../context/ReservacionesContext'
import { toast } from 'react-hot-toast'
export default function ModalReservaciones({ isEdit, _id }) {
  const [openModal, setOpenModal] = useState()
  const props = { openModal, setOpenModal }
  const { servicios } = useContext(ServiciosContext)
  const { crearReservacion, editarReservacion } =
    useContext(ReservacionesContext)
  const nombreRef = useRef(null)
  const cedulaRef = useRef(null)
  const cantidadRef = useRef(null)
  const serviciosRef = useRef(null)
  const codigoRef = useRef(null)
  const correoRef = useRef(null)
  const fechaRef = useRef(null)
  const horaRef = useRef(null)

  //isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})

  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = nombreRef.current.value
    const cedula = cedulaRef.current.value
    const personas = cantidadRef.current.value
    const servicio = serviciosRef.current.value
    const codigoDescuento = codigoRef.current.value
    const correo = correoRef.current.value
    const fecha = fechaRef.current.value
    const hora = horaRef.current.value

    if (
      !nombre ||
      nombre.trim() < 1 ||
      !cedula ||
      cedula.trim() < 1 ||
      !personas ||
      personas.trim() < 1 ||
      !servicio ||
      servicio.trim() < 1 ||
      !correo ||
      correo.trim() < 1 ||
      !fecha ||
      fecha.trim() < 1 ||
      !hora ||
      hora.trim() < 1
    ) {
      // Realizar validación de campos vacíos
      toast.error('Por favor, completa todos los campos requeridos')
      return
    }

    isEdit
      ? editarReservacion(_id, {
          nombre,
          cedula,
          personas,
          servicio,
          codigoDescuento,
          correo,
          fecha,
          hora,
        })
      : crearReservacion({
          nombre,
          cedula,
          personas,
          servicio,
          codigoDescuento,
          correo,
          fecha,
          hora,
        })

    //volvemos los input a sus valores anteriores
    nombreRef.current.value = ''
    cedulaRef.current.value = ''
    cantidadRef.current.value = ''
    serviciosRef.current.value = ''
    codigoRef.current.value = ''
    correoRef.current.value = ''
    fechaRef.current.value = ''
    horaRef.current.value = ''

    //cerramos el modal
    props.setOpenModal(undefined)
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
          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Ingresa los datos de la Reservacion
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nombre' value='Nombre' />
                </div>
                <TextInput
                  type='text'
                  placeholder='Ingresa el nombre de la persona'
                  ref={nombreRef}
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='CedulaReservacion' value='Cedula' />
                </div>
                <TextInput
                  type='text'
                  placeholder='Ingresa la cedula de identidad'
                  ref={cedulaRef}
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='correo' value='Correo' />
                </div>
                <TextInput
                  type='email'
                  placeholder='Ingresa tu correo ejemplo@gmail.com'
                  ref={correoRef}
                  required
                />
              </div>
              <div className='max-w-md' id='select'>
                <div className='mb-2 block'>
                  <Label htmlFor='servicio' value='Selecciona el servicio' />
                </div>
                <Select ref={serviciosRef} required>
                  {servicios &&
                    servicios.map((servicio) => (
                      <option key={servicio._id}>{servicio.servicio}</option>
                    ))}
                </Select>
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='cantidad' value='Cantidad de personas' />
                </div>
                <TextInput
                  type='number'
                  ref={cantidadRef}
                  placeholder='Ingresa la cantidad de personas'
                  min='1'
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='' value='Fecha' />
                </div>
                <TextInput
                  type='date'
                  ref={fechaRef}
                  placeholder='Ingresa la Fecha'
                  required
                />
              </div>

              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='Hora' value='Hora' />
                </div>
                <TextInput
                  type='time'
                  placeholder='Ingresa la Hora'
                  ref={horaRef}
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='codigo' value='Codigo de Descuento' />
                </div>
                <TextInput
                  placeholder='Ingresa el codigo de Descuento'
                  ref={codigoRef}
                  required
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  {isEdit ? 'Editar Reservacion' : 'Crear Reservación'}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
