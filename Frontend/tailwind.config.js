/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backNaranja: '#FF8A00',
        backPink: '#F9D7F5',
        backPinkOsucuro: '#CD67C0',
        letrasHead: '#E454D1',
        letrasNaraOscuro: '#A6360D',
        negroClaro: '#0D0D0D',
        marronOscuro: '#591C05',
        marronClaro: '#F9D7F5',
        marronForm: '#7C593B',
      },
      backgroundImage: {
        'hero-Img': "url('src/assets/img/imgHero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'servicios-Img': "url('src/assets/img/divServicios.jpg')",
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
        satisfy: ['Satisfy', 'sans-serif'],
      },
      screens: {
        sm: '540px',
        // => @media (min-width: 640px) { ... }

        md: '800px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
})
