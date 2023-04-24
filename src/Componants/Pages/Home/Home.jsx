import React from 'react'
import Navbar from '../../Navbar_page/Navbar'
import style from './Home.css'
import Typewriter from 'typewriter-effect'
function Home() {
  return (
    <div id="home">
  
      <h4 id="user-detail-name">Hi, I am Irshad Alam</h4>
      <Typewriter
        options={{
          strings: ["A Full Stack Web Developer", "Backend Developer", "Frontend Developer", "A MERN Stack Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 60
        }}
      />
    </div>
  )
}

export default Home
