import React, { useState } from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = () => {
  const [presupuesto, setpresupuesto] = useState(0)
  return (
    <header>
      <h1>Panificador de Gastos</h1>
      <NuevoPresupuesto setpresupuesto={setpresupuesto} presupuesto={presupuesto} />
    </header>
  )
}

export default Header
