import { useState } from 'react'
import './App.css'

// components imports
import { CssGlobal } from './components/CssGlobal'
import CssComponent from './components/CssComponent'
import InlienStyle from './components/InlienStyle'
import DinamicInlineCSS from './components/DinamicInlineCSS'
import DinamicClasses from './components/DinamicClasses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>CSS no React</h1>
      <CssGlobal />
      <CssComponent />
      <InlienStyle />
      <DinamicInlineCSS />
      <DinamicClasses />
    </>
  )
}

export default App
