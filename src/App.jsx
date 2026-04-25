import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        Hi, I am Safik
      </div>
    </>
  )
}

export default App
