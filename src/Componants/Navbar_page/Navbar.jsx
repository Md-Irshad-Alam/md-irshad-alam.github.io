import React from "react";
import { ThemeContext } from "../Context/Theme";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import sytle from './Navbar.css'
import { saveAs } from 'file-saver';

function Navbar() {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);
  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  const downloadFile = () => {
    window.open("https://drive.google.com/file/d/1hGJuXGIR5Y2q667O77Tdqh2VD9OwDc7U/view?usp=sharing", "_blank")
    const filename = 'Irshad_resume.pdf'; // the name of the file you want to download
    const file = 'Irshad_resume.pdf'; // the path to the file you want to download
    fetch(file)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, filename);
      })
      .catch((error) => console.error(error));
  };



  return (
    <nav id="nav-menu" className="center nav">


        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="nav-link home"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="nav-link about"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="nav-link skills"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="nav-link projects"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="nav-link contact"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            {/* <a
              href="https://drive.google.com/file/d/1oHkZz18nsRmy-WPqfIoHeFSYcx4X52WF/view?usp=share_link"
              onClick={toggleNavList}
              className="nav-link resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a> */}
            <button onClick={downloadFile} className="nav-link resume" id="resume-button-2">resune</button>
          
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
    </nav>
  );
}


export default Navbar