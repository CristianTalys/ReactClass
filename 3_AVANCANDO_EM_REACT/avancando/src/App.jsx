// import useState
import { useState } from 'react';

// import components  
import ImageUse from './components/ImageUse';
import Hooks from './components/Hooks';
import RenderList from './components/RenderList';
import CondicionalRender from './components/CondicionalRender';
import Props from './components/Props';
import ComponentReciled from './components/ComponentReciled';
import LoopComponent from './components/LoopComponent';
import ChildrenProp from './components/ChildrenProp';
import PorpFunction from './components/PorpFunction';
import StateLift from './components/StateLift';
import ChangeMessage from './components/ChangeMessage';

// import styles
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)
  function showMessage() {
    console.log('Funcionando');
  }; 

  // state lift
  const [message, setMessage] = useState ("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <>
    <h1 className='title'>Avançando no React</h1>
      <ImageUse />
      <Hooks />
      <RenderList />
      <CondicionalRender />
      <Props name="Cristian" brand="Toyota" km={1300} color="Verde"/>
      <ComponentReciled />
      <LoopComponent />
      <ChildrenProp />
      <PorpFunction myFunction={showMessage}/>
      <StateLift msg={message}> </StateLift>
      <ChangeMessage handleMessage={handleMessage}/>
    </>
  )
}

export default App
