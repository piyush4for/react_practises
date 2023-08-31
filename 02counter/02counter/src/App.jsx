import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  const addValue =() => {
    if(count<20) setCount(count+1) 
  }

  const removeValue =()=>{
    if(count>0) setCount(count-1)
  }

  return (
    <>
      <div>
        <h1>piyush</h1>
       <button onClick={addValue}>add value {count}</button>
       <button onClick={removeValue}>remove value {count}</button>
      </div>
      
    </>
  )
}

export default App
