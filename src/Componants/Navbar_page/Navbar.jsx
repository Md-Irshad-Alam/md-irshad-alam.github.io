import React from 'react'
import { Link } from 'react-router-dom'
import sytle from './Navbar.css'
function Navbar() {
  return (
    <div id="nav-menu">
      <Link to='/' className='nav-link home'>Home</Link>
      <Link to="/about" className=' nav-link about'>About</Link>
      <Link to="/skill" className=' nav-link skills'>Skills</Link>
      <Link to="/project" className=' nav-link projects'>Project</Link>
      <Link to="/contact" className="nav-link contact">Contact</Link>
      <Link to="/resume" className='nav-link resume'>Resume</Link>
    </div>

  )
}

export default Navbar
