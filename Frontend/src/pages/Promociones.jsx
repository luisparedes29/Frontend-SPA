import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import CardPromocion from '../components/CardPromocion'

const Promociones = () => {
  return (
    <div className='flex gap-5 flex-col'>
      <Header condicion={true} />
      <h2 className='text-center font-satisfy text-[35px] text-backPinkOsucuro'>
        Promociones
      </h2>
      <main className='min-h-[80vh] flex flex-wrap justify-center  '>
        <CardPromocion />
      </main>
      <Footer />
    </div>
  )
}

export default Promociones
