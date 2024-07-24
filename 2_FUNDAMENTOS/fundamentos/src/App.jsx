import { useState } from 'react'
// importação de componentes
import FirstComponent from './components/FirstComponent'
import Comentarios from './components/Comentarios'
import TemplateExpressions from './components/TemplateExpressions'
import ComponentHierarchy from './components/ComponentHierarchy'
import ClickEvent from './components/ClickEvent'
import EventFunctions from './components/EventFunctions'
import RenderFunction from './components/RenderFunction'
// importação de estilos
import './App.css'
import './firstComponent.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>Fundamentos do React</h1>
      <FirstComponent />
      <Comentarios />
      <TemplateExpressions />
      <ComponentHierarchy />
      <ClickEvent />
      <EventFunctions />
      <RenderFunction />
    </>
  )
}

export default App
