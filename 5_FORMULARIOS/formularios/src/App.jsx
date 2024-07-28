import './App.css'

// import components
import Formularios from './components/Formularios'
import LabelInput from './components/LabelInput'
import ManipularValores from './components/ManipularValores'
import SendForm from './components/SendForm'

function App() {
  return (
    <>
      <h1>Formulários e React</h1>
      <Formularios />
      <LabelInput />
      <ManipularValores />
      <SendForm />
    </>
  )
}

export default App
