import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Routes, Route } from "react-router-dom"
import { Homepage } from './pages/homepage'
import { Projects } from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  )
}

export default App
