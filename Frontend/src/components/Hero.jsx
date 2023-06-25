import React from 'react'
import Header from './Header'
import BtnReserva from './BtnReserva'
import wave from '../assets/img/wave.svg'
import flor from '../assets/img/florLanding.png'
import IMG from '../assets/img/imgHero.jpg'
import Footer from './Footer'
const Hero = () => {
  return (
    <>
      <section className='bg-hero-Img h-[90vh] bg-no-repeat bg-cover bg-center'>
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
          className='absolute top-0 left-0 right-0 -mt-20 w-full h-auto z-10'
          src={wave}
          alt=''
        />
        <div className='relative z-20 text-center pt-7'>
          <div id='text-seccion' className='flex flex-col gap-7 items-center'>
            <h2 className='font-satisfy text-[34px] text-backPinkOsucuro'>
              Para nuestros clientes
            </h2>
            <p className='text-[20px]'>Servicios de Spa de alta calidad</p>
            <img className='w-[70px] h-[50px]' src={flor}></img>
            <p className='text-[16px] w-80'>
              Nuestro Spa se adapta a todas sus necesidades de relajación.
              Tendrás tu día perfecto aquí, en Toque Sanador. Visite una
              categoría a continuación para ver todas las excelentes opciones
              que tenemos para ofrecer
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center gap-14'>
          <article className='flex flex-col w-[300px]'>
            <figure className='w-full flex flex-col justify-center items-center gap-6'>
              <div className='w-8/12 h-28 flex justify-center'>
                <img src={IMG} alt='' />
              </div>
              <figcaption>
                <p>Medi-SPA y Masaje</p>
              </figcaption>
              <div className='bg-backPinkOsucuro h-[2px] w-3/5'></div>
            </figure>
          </article>

          <article className='flex flex-col w-[300px]'>
            <figure className='w-full flex flex-col justify-center items-center gap-6'>
              <div className='w-8/12 h-28 flex justify-center'>
                <img src={IMG} alt='' />
              </div>
              <figcaption>
                <p>Medi-SPA y Masaje</p>
              </figcaption>
              <div className='bg-backPinkOsucuro h-[2px] w-3/5'></div>
            </figure>
          </article>

          <article className='flex flex-col w-[300px]'>
            <figure className='w-full flex flex-col justify-center items-center gap-6'>
              <div className='w-8/12 h-28 flex justify-center'>
                <img src={IMG} alt='' />
              </div>
              <figcaption>
                <p>Medi-SPA y Masaje</p>
              </figcaption>
              <div className='bg-backPinkOsucuro h-[2px] w-3/5'></div>
            </figure>
          </article>
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
