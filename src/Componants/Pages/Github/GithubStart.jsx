import React from 'react'
import GithubCalendar from 'react-github-calendar';
import style from './Github.css'
function GithubStart() {
  return (
    <div className='github_clalander'>
        <div className="first_two">
            <div className='streat'>
                {/* <h3 className='hide_name'>GitHub Streak Stats</h3> */}
                <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=MyHobbies0&theme=dark&hide_border=true&type=png)](https://git.io/streak-stats" alt="GitHub Streak Stats" />
            </div>
     <br />
            <div className="stats">
           {/* <h3 className='hide_name'>GitHub Stats Card</h3> */} 
            <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=MyHobbies0&show_icons=true&theme=radical" alt="GitHub Stats Card" />
            </div>

        </div>
    <div className='lang'>
        {/* <h3 className='hide_name'>GitHub Top Languages</h3> */} 
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=MyHobbies0&theme=radical&hide_border=false&include_all_commits=true&count_private=false&layout=compact" alt="GitHub Top Languages" />
    </div>
    </div>
  )
}

export default GithubStart
