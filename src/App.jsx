import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ListadoGastos from './Components/ListadoGastos'
import Modal from './Components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [Change, setChange] = useState(true)
  const [isModalActive, setisModalActive] = useState(false)
  const [animarModal, setanimarModal] = useState(false)
  const [gastos, setgastos] = useState([])
  const [mensaje, setmessage] = useState()
  const [editarGasto, seteditarGasto] = useState({})
  const [presupuesto, setpresupuesto] = useState(0)
  const [totalGastado, settotalGastado] = useState(0)


  const handleNuevoGasto = () => {
    setisModalActive(true)
    setTimeout(() => {
      setanimarModal(true)
    }, 300);
  }
  return (
    <div className={isModalActive ? 'fijar' : ''}>
      <Header setChange={setChange} Change={Change} mensaje={mensaje} setmessage={setmessage} gastos={gastos} presupuesto={presupuesto} setpresupuesto={setpresupuesto} totalGastado={totalGastado} settotalGastado={settotalGastado} />
      {!Change && (
        <>
          <main>
            <ListadoGastos gastos={gastos} seteditarGasto={seteditarGasto} setisModalActive={setisModalActive} setgastos={setgastos} />
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
