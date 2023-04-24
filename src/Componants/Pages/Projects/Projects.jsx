import React from 'react'
import projectdata from './Projectdata';
import style from './Project.css'
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {
        projectdata.map((ele)=>{
          return(
            <div className="project-card">
                <h3 className="project-title">{ele.title}</h3>
                <img src={ele.image} alt="Project" />
                <p className="project-description">{ele.Description}</p>
                  <h3>Tech Stack</h3>
                <p className="project-tech-stack">{ele.tech_stack}</p>
                <div className="project-link">
                <a href={ele.GIthub_link} target="_blank" rel="noreferrer" className="project-github-link">GitHub repository</a>
                <a href={ele.devployed_link} target="_blank" rel="noreferrer" className="project-deployed-link">Deployed link</a>
                </div>
          </div>
          )
        })
      }
    </section>
  );
}

export default Projects
