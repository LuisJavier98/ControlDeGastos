import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ListadoGastos from './Components/ListadoGastos'
import Mensaje from './Components/Mensaje'
import Modal from './Components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [Change, setChange] = useState(true)
  const [isModalActive, setisModalActive] = useState(false)
  const [animarModal, setanimarModal] = useState(false)
  const [gastos, setgastos] = useState([])
  const [mensaje, setmessage] = useState()

  const handleNuevoGasto = () => {
    setisModalActive(true)
    setTimeout(() => {
      setanimarModal(true)
    }, 300);
  }
  return (
    <div className="App">
      <Header setChange={setChange} Change={Change} mensaje={mensaje} setmessage={setmessage} />
      {!Change && (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {
        isModalActive && <Modal setisModalActive={setisModalActive} animarModal={animarModal} setanimarModal={setanimarModal} gastos={gastos} setgastos={setgastos} mensaje={mensaje} setmessage={setmessage} />
      }
    </div>
  )
}

export default App
