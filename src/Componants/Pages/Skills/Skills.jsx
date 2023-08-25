import React from 'react'
import style from './Skill.css'
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiChakraui,
  SiExpress,
  SiNpm,
  SiNetlify,
  SiTailwindcss,
  SiSocketdotio
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

function Skills() {
  return (
    <>
    <div className="section main" data-aos="fade-right" id="skills">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        <div className='skills-card'>
          <DiJava className='skills-card-img'/>
          <h5 className='skills-card-name'>Java</h5>
        </div>
        <div className='skills-card'>
          <SiJavascript className='skills-card-img'/>
          <h5 className='skills-card-name'>Javascript</h5>
        </div>
        <div className='skills-card'>
          <SiHtml5 className='skills-card-img' />
          <h5 className='skills-card-name'>HTML</h5>
        </div>
        <div className='skills-card'>
          <DiCss3  className='skills-card-img'/>
          <h5 className='skills-card-name'>CSS</h5>
        </div>
        <div className='skills-card'>
          <SiTailwindcss  className='skills-card-img'/>
          <h5 className='skills-card-name'>Tailwind CSS</h5>
        </div>
        <div className='skills-card'>
          <FaReact className='skills-card-img' />
          <h5 className='skills-card-name'>React</h5>
        </div>

        <div className='skills-card'>
          <FaNodeJs className='skills-card-img'/>
          <h5 className='skills-card-name'>Nodejs</h5>
        </div>

        <div className='skills-card'>
          <SiRedux className='skills-card-img'/>
          <h5 className='skills-card-name'>Redux</h5>
        </div>
        <div className='skills-card'>
          <SiSocketdotio className='skills-card-img'/>
          <h5 className='skills-card-name'>Socket.io</h5>
        </div>
        <div className='skills-card'>
          <DiMongodb className='skills-card-img'/>
          <h5 className='skills-card-name'>MongoDb</h5>
        </div>

        <div className='skills-card'>
          <SiExpress className='skills-card-img'/>
          <h5 className='skills-card-name'>Express</h5>
        </div>

        <div className='skills-card'>
          <SiChakraui className='skills-card-img'/>
          <h5 className='skills-card-name'>Chakra Ui</h5>
        </div>
        <div className='skills-card'>
          <BsBootstrap className='skills-card-img'/>
          <h5 className='skills-card-name'>Bootstrap</h5>
        </div>
        <div className='skills-card'>
          <SiNpm className='skills-card-img'/>
          <h5 className='skills-card-name'>NPM</h5>
        </div>
        <div className='skills-card'>
          <SiNetlify className='skills-card-img' />
          <h5 className='skills-card-name'>Netlify</h5>
        </div>

        <div className='skills-card'>
          <VscGithub className='skills-card-img'/>
          <h5 className='skills-card-name'>Github</h5>
        </div>
      </div>
    </div>
  </>
  );
}

export default Skills
