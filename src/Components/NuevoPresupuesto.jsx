import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ setpresupuesto, presupuesto }) => {
  const [Change, setChange] = useState(true)
  const [mensaje, setmessage] = useState()
  console.log(presupuesto)
  const handleChange = e => {
    e.preventDefault()
    if (e.target[0].value !== '') {
      if (isNaN(e.target[0].value)) {
        setmessage('Debes introducir un numero')
      }
      else if (Number(e.target[0].value) > 0) {
        setChange(!Change);
        setpresupuesto(Number(e.target[0].value))
      }
      else {
        setmessage('Debes introducir un numero mayor a 0')
      }
    }
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      {
        Change ?
          <form onSubmit={handleChange} action="" className='formulario'>
            <div className='campo'>
              <label htmlFor="">Definir Presupuesto</label>
              <input type="text" className='nuevo-presupuesto' placeholder='Añade tu Presupuesto' required />
            </div>
            <input type="submit" value='Añadir' />
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
          </form>
          :
          <div >

          </div>
      }


    </div>
  )
}

export default NuevoPresupuesto
