import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ presupuesto, gastos, totalGastado, settotalGastado }) => {



  const formatearCantidad = (presupuesto) => {
    return presupuesto.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const Totales = gastos.map(gasto => gasto.cantidad)
  useEffect(() => {

    if (Totales.length !== 0) {
      settotalGastado(Totales.reduce((a, b) => a + b))
    }
    else {
      settotalGastado(0)
    }
  }, [gastos])

  console.log(totalGastado)


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas' >
      <div>
        <CircularProgressbar
          value={(totalGastado / presupuesto) * 100}
          text={`${((totalGastado / presupuesto) * 100).toFixed(2)}% Gastado`}
          styles={buildStyles({
            background: '#181818',
            textColor: 'red',
            pathColor: 'red'
          })}
        />
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto:</span>{formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span>{formatearCantidad(presupuesto - totalGastado)}
        </p>
        <p>
          <span>Gastado:</span>{formatearCantidad(totalGastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
