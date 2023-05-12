import React from 'react'
import style from './About.css'
import { Type } from "../Type";
import { Introduction } from "../Introduction";
import { Timeline } from "../Timeline";
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from '../../Context/Theme';


function About() {
  const downloadFile = () => {
    window.location.href =
      "https://onedrive.live.com/download?cid=3F96436F355E0D18&resid=3F96436F355E0D18%21382&authkey=AJ81nci8_ZvqD4o&em=2";
  };

  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
    <div id="about" className="about section">

      <h2 className="section__title">
            About <span className="different">Me</span>
      </h2>
      <br />
      <Type />
     <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
            <div class="image-container">
                  <img class="home-img" src="./irshad.jpg" alt="Your image description"/>
                  <div class="overlay">
                  <p>Irshad Alam</p>
              </div>
            </div>
            </div>

            <div className="introduction_datacontainer">
              <h4  id="user-detail-intro" >
                Hi Everyone, I am {" "}
                     <span className="different" id="user-detail-name"> Moh. Irshad Alam </span> from{"Jharkhand "} <br />,
                 I have completed my bachelor's degree in physics, in 2022. Apart from this, I have 
              Strong problem-solving skills and ability to learn new technologies like JavaScript, React Js, Node Js, Redux and MongoDB etc. quickly. Seeking an opportunity to work 
            in a dynamic and collaborative team where I can leverage my skills and gain further experience in full-stack web development

              </h4>

              <div className='resume_section'>
                  <a id="resume-button-2" onClick={downloadFile} >
                     <div className='Download_resume'>
                        <DownloadIcon />
                        Resume 
                    </div>
                    </a>
             </div>

              <h4>
                Some of my interests apart form Coding :
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Football{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
    </div>
 
    <section> <Timeline /></section>
     <section><Skills/></section>

  </>
  );
}

export default About
