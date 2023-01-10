import React from 'react'
import Gastos from './Gastos'

const ListadoGastos = ({ gastos, seteditarGasto, setisModalActive, seteliminarGasto, setgastos, filtro, setanimarModal }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length == 0 ? 'No hay gastos registrados' : 'Listado de gastos'}</h2>
      {gastos.map(gasto => {
        if (filtro !== "todos") {
          if (gasto.categoria == filtro) {
            return <Gastos key={gasto.id} gasto={gasto} seteditarGasto={seteditarGasto} setisModalActive={setisModalActive} seteliminarGasto={seteliminarGasto} gastos={gastos} setgastos={setgastos} setanimarModal={setanimarModal} />
          }
        }
        else {
          return <Gastos key={gasto.id} gasto={gasto} seteditarGasto={seteditarGasto} setisModalActive={setisModalActive} seteliminarGasto={seteliminarGasto} gastos={gastos} setgastos={setgastos} setanimarModal={setanimarModal} />
        }
      })}
    </div>
  )
}

export default ListadoGastos
