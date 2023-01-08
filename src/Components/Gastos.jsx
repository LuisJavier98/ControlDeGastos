import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
import { formatearFecha, images } from '../Helpers'


const Gastos = ({ gasto, seteditarGasto, setisModalActive, gastos, setgastos }) => {
  const i = images.find(image => image.split('_')[1].split(".")[0] == gasto.categoria)

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {
        seteditarGasto(gasto)
        setisModalActive(true)
      }}  >
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => {
        setgastos(gastos.filter(g => g !== gasto))
      }} >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}>
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gastos
