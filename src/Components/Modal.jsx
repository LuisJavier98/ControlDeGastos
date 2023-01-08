import React, { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { generarId } from '../Helpers/index'


const Modal = ({ setisModalActive, animarModal, setanimarModal, gastos, setgastos, mensaje, setmessage }) => {
  const ocultarModal = () => {
    setanimarModal(false)
    setTimeout(() => {
      setisModalActive(false)
      setmessage('')
    }, 500);
  }

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
      setgastos([...gastos, objetoGastos])
      clear()
      setTimeout(() => {
        setisModalActive(false);
        setmessage('')
      }, 500);
    }
    else if (e.target[2].value == 'seleccione') {
      setmessage('Seleccione una categoria')
    }
    else {
      setmessage('El nombre del gasto tiene que ser un String')
    }
  }
  console.log(gastos)


  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBtn} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form onSubmit={obtenerGastos} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} action="">
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
            <option value="gastos varios">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value='Añadir Gasto' />
      </form>

    </div >
  )
}

export default Modal
