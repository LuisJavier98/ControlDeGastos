import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({ gastos }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length == 0 ? 'No hay gastos registrados' : 'Listado de gastos'}</h2>
      {gastos.map(gasto => <Gastos gasto={gasto} />)}
    </div>
  )
}

export default ListadoGastos
