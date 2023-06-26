import { useContext } from 'react'
import { PromocionesContext } from './PromocionesContext'

export function usePromociones() {
  return useContext(PromocionesContext)
}
