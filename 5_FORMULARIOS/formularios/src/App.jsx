import { useState } from 'react'
import './App.css'

// import components
import Formularios from './components/Formularios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Formulários e React</h1>
      <Formularios />
    </>
  )
}

export default App
