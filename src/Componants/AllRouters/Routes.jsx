import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar_page/Navbar'
import Contact from '../Pages/Contact/Contact'
import About from '../Pages/About/About'
import Skills from '../Pages/Skills/Skills'
import Projects from '../Pages/Projects/Projects'
import Resume from '../Pages/Resume/Resume'
import Home from '../Pages/Home/Home'
function AllRouter() {
  return (
    <div>
        <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/skill' element={<Skills/>} />
        <Route path='/resume' element={<Resume/>} />
      </Routes>
    </div>
  )
}

export default AllRouter
