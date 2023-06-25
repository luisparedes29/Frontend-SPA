import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardServicios from '../components/cardServicios'
import waveServicios from '../assets/img/waveServicios.svg'
import CardTestimonios from '../components/CardTestimonios'
import ModalTestimonios from '../components/ModalTestimonios'

const Servicios = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Header condicion={true} />
      <main className='flex flex-col gap-20'>
        <section id='servicios' className='min-h-screen flex flex-col gap-8'>
          <header className='flex flex-col gap-4 items-center'>
            <h2 className='font-satisfy text-center text-[35px] text-backPinkOsucuro'>
              Servicios
            </h2>
            <p className='text-center text-[14px] w-[350px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis
            </p>
          </header>
          <div
            id='lista de servicios'
            className='w-full min-h-[45vh] bg-servicios-Img bg-no-repeat bg-cover bg-center flex flex-col gap-5 p-7 justify-center items-center'
          >
            <CardServicios />
            <CardServicios />
            <CardServicios />
          </div>
        </section>

        <section id='testimonios' className='min-h-[60vh] bg-backPink relative'>
          <img
            src={waveServicios}
            alt='wave'
            className='w-full absolute top-[-65px] left-0 right-0 z-10'
          />
          <div className='relative flex flex-col gap-5 items-center z-20 pt-7'>
            <h2 className='font-satisfy text-center text-[35px] text-backPinkOsucuro'>
              Testimonios
            </h2>
            <section className='flex flex-col gap-6 mb-5'>
              <CardTestimonios />
              <CardTestimonios />
            </section>
          </div>
          <div className='flex justify-center mb-4'>
            <ModalTestimonios />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Servicios
