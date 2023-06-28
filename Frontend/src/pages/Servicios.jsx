import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardServicios from '../components/cardServicios'
import waveServicios from '../assets/img/waveServicios.svg'
import CardTestimonios from '../components/CardTestimonios'
import ModalTestimonios from '../components/ModalTestimonios'
import { TestimoniosContext } from '../context/TestimoniosContext'
import { ServiciosContext } from '../context/ServiciosContext'

const Servicios = () => {
  const { testimonios } = useContext(TestimoniosContext)
  const { servicios } = useContext(ServiciosContext)
  return (
    <div className='flex flex-col'>
      <Header condicion={true} />
      <main className='flex flex-col'>
        <section id='servicios' className='min-h-max flex flex-col justify-end'>
          <header className='flex flex-col gap-4 items-center p-3'>
            <h2 className='font-satisfy text-center text-[35px] text-backPinkOsucuro md:text-4xl'>
              Servicios
            </h2>
            <p className='text-center text-[14px] w-[350px] md:w-3/4 md:text-xl md:m-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis
            </p>
          </header>
          <div
            id='lista de servicios'
            className='w-full min-h-[45vh] sm:min-h-screen lg:min-h-[140vh] bg-servicios-Img bg-no-repeat bg-cover bg-center flex flex-wrap gap-10 p-20 justify-center items-center'
          >
            {servicios ? (
              servicios.map((servicio) => (
                <CardServicios key={servicio._id} servicio={servicio} />
              ))
            ) : (
              <h3>No contamos con servicios por los momentos</h3>
            )}
          </div>
        </section>

        <section id='testimonios' className='min-h-[60vh] bg-backPink relative'>
          <img
            src={waveServicios}
            alt='wave'
            className='w-full absolute z-0 -top-20 left-0 right-0 sm:-top-36 xl:-top-52'
          />
          <div className='relative flex flex-col gap-5 items-center z-20 pt-7'>
            <h2 className='font-satisfy text-center text-[35px] text-backPinkOsucuro'>
              Testimonios
            </h2>
            <section className='flex flex-wrap justify-evenly gap-6 mb-5'>
              {testimonios ? (
                testimonios
                  .slice(0, 3)
                  .map((testimonio) => (
                    <CardTestimonios
                      key={testimonio._id}
                      testimonio={testimonio}
                    />
                  ))
              ) : (
                <h3 className='font-satisfy text-[60px]'>NO HAY TESTIMONIOS</h3>
              )}
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
