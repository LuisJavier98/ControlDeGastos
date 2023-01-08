import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({ gastos, seteditarGasto, setisModalActive, seteliminarGasto, setgastos }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length == 0 ? 'No hay gastos registrados' : 'Listado de gastos'}</h2>
      {gastos.map(gasto => <Gastos key={gasto.id} gasto={gasto} seteditarGasto={seteditarGasto} setisModalActive={setisModalActive} seteliminarGasto={seteliminarGasto} gastos={gastos} setgastos={setgastos} />)}
    </div>
  )
}

export default ListadoGastos
