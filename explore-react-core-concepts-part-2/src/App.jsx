 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countery';

function App() {
    function handleClick(){
      alert('button clicked');
    }
    const handleClick2 = () =>{
      alert('handle clicked 2')
    }
    const addToFive =(num) =>
    {
      alert(num + 5);
    }

    // function getSomething(){
    //   return [44,33];
    // }
    // const [one,two]= getSomething();

    

  return (
    <>
      <Counter></Counter>
      <h3>React core concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button> <br />
      <button onClick ={() =>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App
