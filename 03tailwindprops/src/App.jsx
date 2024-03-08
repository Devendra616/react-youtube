import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username='Rahul' url='https://cdn.pixabay.com/photo/2016/11/29/06/08/woman-1867715_1280.jpg'/>
      <Card url='https://cdn.pixabay.com/photo/2016/11/20/18/18/girl-1843477_1280.jpg'/>
      <Card url='https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg'/>
    </>
  )
}

export default App
