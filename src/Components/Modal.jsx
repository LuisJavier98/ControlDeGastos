import React, { useEffect, useRef, useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { generarId } from '../Helpers/index'


const Modal = ({ setisModalActive, animarModal, setanimarModal, gastos, setgastos, mensaje, setmessage, editarGasto, seteditarGasto, presupuesto, totalGastado }) => {
  const ocultarModal = () => {
    setanimarModal(false)
    setTimeout(() => {
      setisModalActive(false)
      setmessage('')
      seteditarGasto({})
    }, 500);
  }
  console.log(totalGastado)
  console.log(presupuesto)

  const obtenerGastos = e => {
    e.preventDefault()
    const clear = () => {
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = 'seleccione'
    }
    const objetoGastos = {
      id: generarId(),
      fecha: new Date(),
      nombreGasto: e.target[0].value,
      cantidad: Number(e.target[1].value),
      categoria: e.target[2].value
    }
    if (isNaN(e.target[0].value) && e.target[2].value !== 'seleccione') {

      if (presupuesto >= (totalGastado + Number(e.target[1].value))) {
        if (Object.keys(editarGasto).length === 0) {
          setgastos([...gastos, objetoGastos])
          clear()
          setTimeout(() => {
            setisModalActive(false);
            setmessage('')
          }, 500);
        } else {
          setgastos(gastos.map(gasto => {
            if (editarGasto == gasto) {
              return {
                fecha: new Date(),
                nombreGasto: e.target[0].value,
                cantidad: Number(e.target[1].value),
                categoria: e.target[2].value
              }
            }
            else {
              return gasto
            }
          }))
          clear()
          setTimeout(() => {
            setisModalActive(false);
            setmessage('')
          }, 500);
          seteditarGasto({})
        }
      }
      else {
        setmessage('La cantidad introducida sobrepasa el presupuesto ')
      }
    }
    else if (e.target[2].value == 'seleccione') {
      setmessage('Seleccione una categoria')
    }
    else {
      setmessage('El nombre del gasto tiene que ser un String')
    }
  }
  const Datos = useRef()

  useEffect(() => {
    if (Object.keys(editarGasto).length !== 0) {
      Datos.current[0].value = editarGasto.nombreGasto
      Datos.current[1].value = editarGasto.cantidad
      Datos.current[2].value = editarGasto.categoria
    }
  }, [editarGasto])


  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBtn} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form ref={Datos} onSubmit={obtenerGastos} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} action="">
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input type="text" id='nombre' required placeholder='Añade el nombre del Gasto' />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" id='cantidad' required placeholder='Añade la cantidad del gasto: ej.300' />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Categoria</label>
          <select name="" id="categoria" defaultValue='seleccione' required>
            <option value="seleccione" disabled>-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>{
          Object.keys(editarGasto).length === 0 ?
            <input type="submit" value='Añadir Gasto' /> :
            <input type="submit" value='Editar Gasto' />
        }
      </form>

    </div >
  )
}

export default Modal
