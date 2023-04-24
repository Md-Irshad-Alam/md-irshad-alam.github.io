import React from 'react'
import Navbar from '../../Navbar_page/Navbar'
import style from './Home.css'
import Typewriter from 'typewriter-effect'
function Home() {

  const handleDownload = () => {
    const url = 'Irshad_resume.pdf'; // replace with your file path
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Irshad_resume.pdf'; // replace with your file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home">
     <div className='inner_home'>
     <img src="irshad.jpg" alt="Profile" className="home-img" />
      <h1 id="user-detail-name">Md Irshad Alam </h1>
      <Typewriter
        options={{
          strings: ["A Full Stack Web Developer", "Backend Developer", "Frontend Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 60
        }}
      />
     </div>
      <p id="user-detail-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus, voluptas temporibus quam sequi obcaecati
         consequuntur pariatur nobis omnis consectetur!</p>
        <button id="resume-button-2" onClick={handleDownload}>Download Resume</button>
    </section>
  );
}

export default Home
