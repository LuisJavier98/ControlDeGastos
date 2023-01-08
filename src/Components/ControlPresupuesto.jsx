import React, { useEffect, useState } from 'react'

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [totalGastado, settotalGastado] = useState(0)


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
        <p>Grafica aqui</p>
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
