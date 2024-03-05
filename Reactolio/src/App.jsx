import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {MainNavBar, Footer, ProjectGrid, Contact} from "./Components"
import {Home} from "./Pages"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
  <Router>
    <MainNavBar />
    <Routes>
      <Route path="home" element={ <Home /> } />
      <Route path="projects" element={ <ProjectGrid /> } />
      <Route path="contact" element={ <Contact /> } />
    </Routes>
    <Footer></Footer>
  </Router>
  )
}

export default App
