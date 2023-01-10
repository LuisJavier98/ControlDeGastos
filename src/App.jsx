import { useEffect, useState } from 'react'
import './App.css'
import Filtros from './Components/Filtros'
import Header from './Components/Header'
import ListadoGastos from './Components/ListadoGastos'
import Modal from './Components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [Change, setChange] = useState(true)
  const [isModalActive, setisModalActive] = useState(false)
  const [animarModal, setanimarModal] = useState(false)
  const [gastos, setgastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [])
  const [mensaje, setmessage] = useState()
  const [editarGasto, seteditarGasto] = useState({})
  const [presupuesto, setpresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  const [totalGastado, settotalGastado] = useState(0)
  const [filtro, setfiltro] = useState('todos')


  const handleNuevoGasto = () => {
    setisModalActive(true)
    setTimeout(() => {
      setanimarModal(true)
    }, 300);
  }

  useEffect(() => {
    localStorage.setItem('presupuesto', (presupuesto) ?? 0)
    localStorage.setItem('gastos', JSON.stringify(gastos))
  }, [presupuesto, gastos])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto'))
    if (presupuestoLS > 0) {
      setChange(false)
    }
  }, [])

  return (
    <div className={isModalActive ? 'fijar' : ''}>
      <Header setChange={setChange} Change={Change} mensaje={mensaje} setmessage={setmessage} gastos={gastos} setgastos={setgastos} presupuesto={presupuesto} setpresupuesto={setpresupuesto} totalGastado={totalGastado} settotalGastado={settotalGastado} />
      {!Change && (
        <>
          <main>
            <Filtros filtro={filtro} setfiltro={setfiltro} />
            <ListadoGastos gastos={gastos} seteditarGasto={seteditarGasto} setisModalActive={setisModalActive} setgastos={setgastos} filtro={filtro} handleNuevoGasto={handleNuevoGasto} />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {
        isModalActive && <Modal setisModalActive={setisModalActive} animarModal={animarModal} setanimarModal={setanimarModal} gastos={gastos} setgastos={setgastos} mensaje={mensaje} setmessage={setmessage} editarGasto={editarGasto} seteditarGasto={seteditarGasto} presupuesto={presupuesto} totalGastado={totalGastado} />
      }
    </div>
  )
}

export default App
