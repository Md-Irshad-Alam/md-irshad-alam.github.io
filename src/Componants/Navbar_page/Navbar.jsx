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

 

  const downloadFile = () =>{
    window.open(
      "https://onedrive.live.com/?authkey=%21AHsXK%5FwgBDjmcD8&cid=3F96436F355E0D18&id=3F96436F355E0D18%21382&parId=root&o=OneUp"
    );
    const url =
    "https://onedrive.live.com/download?cid=3F96436F355E0D18&resid=3F96436F355E0D18%21382&authkey=AJ81nci8_ZvqD4o&em=2";
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Irshad-resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
  
  

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
            <a

              className="nav-link resume"
              target="_blank"
              rel="noreferrer"
              id="resume-button-1"
              onClick={downloadFile}
            >
             Resume
            </a>
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