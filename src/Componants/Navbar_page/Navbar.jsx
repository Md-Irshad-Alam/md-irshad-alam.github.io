import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sytle from './Navbar.css'

function Navbar() {
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <nav id="nav-menu">

        <Link to="/#home" className="nav-link home" onClick={()=> toggleNavList("#home")}>Home</Link>
        <Link to="#about" className="nav-link about" onClick={()=> toggleNavList("#about")}>About</Link>
        <Link to="#skills" className="nav-link skills" onClick={()=> toggleNavList("#skills")}>Skills</Link>
        <Link to="/#projects" className="nav-link projects" onClick={()=> toggleNavList("#projects")}>Projects</Link>
        <Link to="#contact" className="nav-link contact" onClick={()=> toggleNavList("#contact")}>Contact</Link>
        <Link to="https://drive.google.com/file/d/1oHkZz18nsRmy-WPqfIoHeFSYcx4X52WF/view?usp=share_link"  target='_blank' class="nav-link resume">Resume</Link>
    </nav>
  );
}

export default Navbar
