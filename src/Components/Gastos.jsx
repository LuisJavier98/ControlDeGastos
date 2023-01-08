import React from 'react'
import { formatearFecha, images } from '../Helpers'
import casa from '../img/icono_casa.svg'


const Gastos = ({ gasto }) => {
  const i = images.find(image => image.split('_')[1].split(".")[0] == gasto.categoria)
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={i} alt={gasto.categoria} />
        <div className='descripcion-gasto'>
          <p className='categoria'>{gasto.categoria}</p>
          <p className='nombre-gasto'>{gasto.nombreGasto}</p>
          <p className='fecha-gasto'>
            Agregado el :{" "}
            <span>{formatearFecha(gasto.fecha)}</span></p>
        </div>
      </div>
      <p className='cantidad-gasto'>${gasto.cantidad}</p>
    </div>
  )
}

export default Gastos
