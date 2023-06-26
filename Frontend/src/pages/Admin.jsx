import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TablaServicios from '../components/TablaServicios'
import TablaTestimonios from '../components/TablaTestimonios'
import TablaUsuarios from '../components/TablaUsuarios'
import TablaReservaciones from '../components/TablaReservaciones'
import TablaPromociones from '../components/TablaPromociones'

const Admin = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Header condicion={true} />
      <main className='flex flex-col min-h-[70vh] items-center gap-6'>
        <h2 className='text-backPinkOsucuro text-center text-[40px] font-workSans '>
          Panel Admin
        </h2>
        <section className='flex flex-col gap-10'>
          <TablaServicios />
          <TablaReservaciones />
          <TablaPromociones />
          <TablaTestimonios />
          <TablaUsuarios />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Admin
