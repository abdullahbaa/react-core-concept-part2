import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    function handleClick(){
      alert('button clicked');
    }
    const handleClick2 = () =>{
      alert('handle clicked 2')
    }

  return (
    <>
      <h3>React core concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <button onClick={handleClick2}>Click Me2</button>
      
    </>
  )
}

export default App
