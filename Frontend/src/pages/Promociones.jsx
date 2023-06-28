import React, { useContext } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardPromocion from '../components/CardPromocion'
import { PromocionesContext } from '../context/PromocionesContext'

const Promociones = () => {
  const { promociones } = useContext(PromocionesContext)

  return (
    <div className='flex gap-5 flex-col'>
      <Header condicion={true} />
      <h2 className='text-center font-satisfy text-[35px] text-backPinkOsucuro'>
        Promociones
      </h2>
      <main className='min-h-screen flex flex-wrap justify-evenly gap-5 xl:gap-10'>
        {promociones.map((promocion) => (
          <CardPromocion key={promocion._id} promocion={promocion} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default Promociones
