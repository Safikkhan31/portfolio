import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Routes, Route } from "react-router-dom"
import { Homepage } from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  )
}

export default App
