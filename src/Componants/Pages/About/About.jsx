import React from 'react'
import style from './About.css'
import { Type } from "../Type";
import { Introduction } from "../Introduction";
import { Timeline } from "../Timeline";
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import DownloadIcon from '@mui/icons-material/Download';
import downloadFile from '../Resume/HandleDownlod';
function About() {
  // https://drive.google.com/file/d/1hGJuXGIR5Y2q667O77Tdqh2VD9OwDc7U/view?usp=sharing
  // const handleDownload = () => {
  //   
  // window.location.href='https://drive.google.com/uc?export=download&id=1hGJuXGIR5Y2q667O77Tdqh2VD9OwDc7U'

  // };


  return (
    <>
    <div id="about" className="about section">
    <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
      <h5 data-aos="fade-right">
        Hi, I am <span id="user-detail-name">Irshad Alam</span>
      </h5>
      <Type />
      {/* write two tech word loke Tech word */}
      <p className="about__desc" data-aos="fade-right" id="user-detail-intro">
            Strong problem-solving skills and ability to learn new technologies some , ReactJs, Nodejs, tech words,  tech words ,  Like.  quickly. Seeking an opportunity to work 
        in a dynamic and collaborative team where I can leverage my skills and gain further experience in full-stack web development."
      </p>
     <div className='resume_section'>
      <div className='Download_resume'>
        <DownloadIcon/>
           <button  id="resume-button-2" onClick={downloadFile}>Resume </button>
      </div>
     </div>
    </div>
    {/* write About keywoord in camel case  */}
    
    <Introduction />
    <Timeline />
    <section id="#skills">
     <Skills/>
    </section>
  </>
  );
}

export default About
