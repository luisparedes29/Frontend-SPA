import { useContext } from 'react'
import Header from './Header'
import BtnReserva from './BtnReserva'
import wave from '../assets/img/wave.svg'
import flor from '../assets/img/florLanding.png'
import IMG from '../assets/img/imgHero.jpg'
import Footer from './Footer'
import { ServiciosContext } from '../context/ServiciosContext'
import { Link } from 'react-router-dom'
import React from 'react'
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
const Hero = () => {
  const { servicios } = useContext(ServiciosContext)
  return (
    <>
      <section className='bg-hero-Img h-[90vh] bg-no-repeat bg-cover bg-center lg:h-screen'>
        <div className='bg-backPink hidden md:flex w-full  items-center justify-between p-3 text-sm'>
          <div className='flex gap-7'>
            <p className='flex items-center gap-2'>
              <FaMapMarkerAlt /> San luis, calle principal Casa 714
            </p>
            <p className='flex items-center gap-2'>
              <FaCalendarAlt />
              Lun-Sab: 9am-5pm
            </p>
            <p className='flex items-center gap-2'>
              <FaPhoneAlt />
              0424-7238989
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <Header />
        <div className='flex flex-col justify-center h-[80vh] w-full items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-workSans p-7 text-white font-normal leading-10 tracking-[3px] break-words'>
              Sumérgete en la serenidad absoluta Explora nuestro oasis de
              bienestar
            </h1>
            <BtnReserva />
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-16 relative bg-backPink min-h-screen'>
        <img
          className='absolute -top-20 left-0 right-0 w-full h-auto z-0 sm:-top-28 md:-top-40 lg:-top-44 xl:-top-56'
          src={wave}
          alt=''
        />
        <div className='relative z-20 text-center pt-7 md:w-full'>
          <div id='text-seccion' className='flex flex-col gap-7 items-center'>
            <h2 className='font-satisfy text-[34px] text-backPinkOsucuro md:w-3/4'>
              Para nuestros clientes
            </h2>
            <p className='text-[20px] md:w-3/4 m-2'>
              Servicios de Spa de alta calidad
            </p>
            <p className='text-[16px] w-80 md:text-2xl md:w-3/4'>
              Nuestro Spa se adapta a todas sus necesidades de relajación.
              Tendrás tu día perfecto aquí, en Toque Sanador. Visite una
              categoría a continuación para ver todas las excelentes opciones
              que tenemos para ofrecer
            </p>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-0'>
          {servicios ? (
            servicios.slice(0, 4).map((servicio) => (
              <Link to='/Reserva' key={servicio._id}>
                <article
                  key={servicio._id}
                  className='flex flex-col w-[300px] mb-10'
                >
                  <figure className='w-full flex flex-col justify-center items-center gap-6'>
                    <div className='w-8/12 h-28 flex justify-center'>
                      <img src={IMG} alt='imagen predeterminada' />
                    </div>
                    <figcaption>
                      <p>{servicio.servicio}</p>
                    </figcaption>
                    <div className='bg-backPinkOsucuro h-[2px] w-3/5'></div>
                  </figure>
                </article>
              </Link>
            ))
          ) : (
            <h2 className='font-satisfy text-center text-[60px]'>
              No estamos ofreciendo servicios
            </h2>
          )}
        </div>
        <div className='flex justify-center pb-16'>
          <BtnReserva />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Hero
