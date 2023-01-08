import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ mensaje, handleChange }) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handleChange} action="" className='formulario'>
        <div className='campo'>
          <label htmlFor="">Definir Presupuesto</label>
          <input type="text" className='nuevo-presupuesto' placeholder='Añade tu Presupuesto' required />
        </div>
        <input type="submit" value='Añadir' />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
