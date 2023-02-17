import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Figma from './pages/Figma'
import Microsoft from './pages/Microsoft'
import Youtube from './pages/Youtube'
import ReactLogo from './pages/ReactLogo'
import Google from './pages/Google'
import Mcdonalds from './pages/Mcdonalds'
import Git from './pages/Git'
import Switch from './pages/Switch'
import Android from './pages/Android'
import Flowers from './pages/Flowers'
import Adidas from './pages/Adidas'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/figma' element={<Figma />}>F</Route>
            <Route path='/microsoft' element={<Microsoft />}></Route>
            <Route path='/youtube' element={<Youtube />}></Route>
            <Route path='/reactlogo' element={<ReactLogo />}></Route>
            <Route path='/google' element={<Google />}></Route>
            <Route path='/mcdonalds' element={<Mcdonalds />}></Route>
            <Route path='/git' element={<Git />}></Route>
            <Route path='/switch' element={<Switch />}></Route>
            <Route path='/android' element={<Android />}></Route>
            <Route path='/adidas' element={<Adidas />}></Route>
            <Route path='/circles' element={<Flowers />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
