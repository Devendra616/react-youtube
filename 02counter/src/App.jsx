import { useState } from 'react';
import './App.css'

function App() {
  // let counter =15;
  //counter is variable, setCounter is method that updates the counter, 
  // 15 is passed as initial value of counter
  const [counter, setCounter] = useState(15);

  const addValue =() => {
    // counter++
    setCounter(counter+1);
    console.log(counter)
  }

  const removeValue =()=> {
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
      <h1>React course with Hitesh</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
