import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ presupuesto, gastos, setgastos, setpresupuesto, totalGastado, settotalGastado, setChange }) => {
  const formatearCantidad = (presupuesto) => {
    return presupuesto.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }


  const handleReset = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')
    if (resultado) {
      setgastos([])
      setpresupuesto(0)
      setChange(true)
    }
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

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas' >
      <div >
        <CircularProgressbar
          value={(totalGastado / presupuesto) * 100}
          circleRatio='1'
          strokeWidth='9'
          text={`${((totalGastado / presupuesto) * 100).toFixed(2)}% Gastado`}
        />
      </div>
      <div className='contenido-presupuesto'>
        <button className='reset-app' type='button' onClick={handleReset}>Resetear App</button>
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
