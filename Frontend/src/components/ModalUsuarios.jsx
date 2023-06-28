import React, { useState, useRef, useContext } from 'react'
import editar from '../assets/img/editar.svg'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { UsuariosContext } from '../context/UsuariosContext'
import { toast } from 'react-hot-toast'

export default function ModalUsuarios({ isEdit, _id = null }) {
  const [openModal, setOpenModal] = useState(false)
  const { crearUsuario, editarUsuario } = useContext(UsuariosContext)
  const nombreRef = useRef(null)
  const usuarioRef = useRef(null)
  const contraseñaRef = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nombre = nombreRef.current.value
    const usuario = usuarioRef.current.value
    const contraseña = contraseñaRef.current.value

    if (
      !nombre ||
      !usuario ||
      !contraseña ||
      nombre.trim() < 1 ||
      usuario.trim().length < 1 ||
      contraseña.trim().length < 1
    ) {
      return toast.error('Todos los campos son obligatorios')
    }

    isEdit
      ? await editarUsuario(_id, {
          nombre,
          usuario,
          contraseña,
        })
      : await crearUsuario({
          nombre,
          usuario,
          contraseña,
        })
    //setteamos los inputs
    nombreRef.current.value = ''
    usuarioRef.current.value = ''
    contraseñaRef.current.value = ''

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
                  ref={nombreRef}
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='usuario' value='Usuario' />
                </div>
                <TextInput
                  type='text'
                  placeholder='Ingresa el nombre de usuario'
                  ref={usuarioRef}
                  required
                />
              </div>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='contraseña' value='Contraseña' />
                </div>
                <TextInput
                  type='password'
                  placeholder='Ingresa la contraseña'
                  ref={contraseñaRef}
                  required
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
