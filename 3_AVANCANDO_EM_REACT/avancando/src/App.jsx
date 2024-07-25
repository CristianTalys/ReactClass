import { useState } from 'react';
// import components  
import ImageUse from './components/ImageUse';
import Hooks from './components/Hooks';
import RenderList from './components/RenderList';
import CondicionalRender from './components/CondicionalRender';
import Props from './components/Props';
// importanto imagem

// import styles
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='title'>Avançando no React</h1>
      <ImageUse />
      <Hooks />
      <RenderList />
      <CondicionalRender />
      <Props name="Cristian" brand="Toyota" km={1300} color="Verde"/>
    </>
  )
}

export default App
