import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/brawlers" element={<div>Brawlers</div>} />
        <Route path="/leaderboard" element={<div>LeaderBoard</div>} />
      </Routes>
    </Router>
  )
}

export default App
