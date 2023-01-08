import React, { useState } from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ Change, setChange, mensaje, setmessage }) => {
  const [presupuesto, setpresupuesto] = useState(0)
  const handleChange = e => {
    e.preventDefault()
    if (e.target[0].value !== '') {
      if (isNaN(e.target[0].value)) {
        setmessage('Debes introducir un numero')
      }
      else if (Number(e.target[0].value) > 0) {
        setChange(!Change);
        setpresupuesto(Number(e.target[0].value))
        setmessage("")
      }
      else {
        setmessage('Debes introducir un numero mayor a 0')
      }
    }
  }
  return (
    <header>
      <h1>Panificador de Gastos</h1>{
        Change ?
          <NuevoPresupuesto setpresupuesto={setpresupuesto} mensaje={mensaje} handleChange={handleChange} /> :
          <ControlPresupuesto presupuesto={presupuesto} />}
    </header>
  )
}

export default Header