import React from 'react'
import skill from './skill'
import style from './Skill.css'
function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {
        skill.map((ele)=>{
          return(
            <div className="skills-card">
            <img src="path-to-skills-image.jpg" alt="img" className="skills-card-img" />
            <h3 className="skills-card-name">{ele}</h3>
        </div>
            )
          })
        }
    </section>
  );
}

export default Skills
