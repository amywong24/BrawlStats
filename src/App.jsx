import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Brawlers from './components/Brawlers'
import BrawlerDetails from './components/BrawlerDetails'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/brawlers" element={<Brawlers />} />
        <Route path="/brawler/:id" element={<BrawlerDetails />} />
      </Routes>
    </Router>
  )
}

export default App