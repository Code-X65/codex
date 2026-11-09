/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const VariantContext = createContext(null)

export const VARIANTS = [
  {
    id: 1,
    label: 'V1',
    name: 'Exact Replica (Stitch)',
    description: 'Boluwatife Portfolio - Exact Replica',
    color: '#bbf451',
  },
  {
    id: 2,
    label: 'V2',
    name: 'Neo-Editorial',
    description: 'Dark architectural grid (Original)',
    color: '#ff6b35',
  },
  {
    id: 3,
    label: 'V3',
    name: 'Variation 3',
    description: 'Coming soon',
    color: '#7c9fff',
  },
]

export function VariantProvider({ children }) {
  const [activeVariant, setActiveVariant] = useState(1)

  return (
    <VariantContext.Provider value={{ activeVariant, setActiveVariant, VARIANTS }}>
      {children}
    </VariantContext.Provider>
  )
}

export function useVariant() {
  const ctx = useContext(VariantContext)
  if (!ctx) throw new Error('useVariant must be used within VariantProvider')
  return ctx
}
