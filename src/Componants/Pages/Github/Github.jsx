import React from 'react'
import style from './Github.css'
import Githubcalendar from "react-github-calendar";
export default function Github() {
  return (
    <div className='git_hub'>
      <Githubcalendar
          username="Md-Irshad-Alam"
          blockSize={15}
          blockMargin={5}
        //   theme="light"
          fontSize={16}
        />
        <div>
            <img src="./gitHub_star.png" alt=""   id="github-streak-stats"/>
        </div>
    </div>
  )
}
