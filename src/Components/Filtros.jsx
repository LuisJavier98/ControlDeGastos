

const Filtros = ({ filtro, setfiltro }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action="">
        <div className='campo'>
          <label htmlFor="">Filtrar gastos</label>
          <select onChange={(e) => setfiltro(e.target.value)} >
            <option value="todos" >-- Todos --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option onClick={() => console.log("hi")} value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
