import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../Helpers'
import ahorro from '../img/icono_ahorro.svg'
import casa from '../img/icono_casa.svg'
import comida from '../img/icono_comida.svg'
import gast from '../img/icono_gastos.svg'
import ocio from '../img/icono_ocio.svg'
import salud from '../img/icono_salud.svg'
import suscripciones from '../img/icono_suscripciones.svg'


const Gastos = ({ gasto, seteditarGasto, setisModalActive, gastos, setgastos, handleNuevoGasto }) => {
  const iconos = {
    ahorro, casa, comida, gast, ocio, salud, suscripciones
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {
        seteditarGasto(gasto)
        setisModalActive(true)
        handleNuevoGasto()
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
            <img src={iconos[gasto.categoria]} alt={gasto.categoria} />
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
