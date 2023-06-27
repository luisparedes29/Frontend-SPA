import React, { useState } from 'react'
import editar from '../assets/img/editar.svg'
import { Button, Label, Modal, TextInput } from 'flowbite-react'

export default function ModalUsuarios({ isEdit }) {
  const [openModal, setOpenModal] = useState(false)
  const [nombre, setNombre] = useState('')
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes agregar la lógica para crear el usuario con los datos ingresados
    console.log('Nombre:', nombre)
    console.log('Usuario:', usuario)
    console.log('Contraseña:', contraseña)
    setOpenModal(false)
  }

  //isEdit ? fetch('').then(() => {}) : fetch('').then(() => {})

  return (
    <>
      <Button
        className={`${
          isEdit ? 'bg-transparent ' : 'bg-backPinkOsucuro mb-3 '
        } p-0 `}
        onClick={() => setOpenModal(true)}
      >
        <img className={`${isEdit ? 'w-4' : 'w-[27px]'}`} src={editar}></img>
      </Button>
      <Modal
        show={openModal}
        position='center'
        size='md'
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className='bg-backPink' />
        <Modal.Body className='bg-backPink'>
          <form onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Ingresa los datos del usuario
              </h3>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='nombreUsuario' value='Nombre' />
                </div>
                <TextInput
                  type='text'
                  placeholder='Ingresa el nombre de la persona'
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='usuario' value='Usuario' />
                </div>
                <TextInput
                  type='text'
                  placeholder='Ingresa el nombre de usuario'
                  required
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='contraseña' value='Contraseña' />
                </div>
                <TextInput
                  type='password'
                  placeholder='Ingresa la contraseña'
                  required
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>
              <div className='w-full flex justify-center'>
                <Button type='submit' className='bg-backPinkOsucuro'>
                  {isEdit ? 'Editar Usuario' : 'Crear Usuario'}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}
