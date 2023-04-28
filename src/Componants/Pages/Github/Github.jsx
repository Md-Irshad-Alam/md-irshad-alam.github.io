import React from 'react'
import style from './Github.css'
import GitHubCalendar from 'react-github-calendar';
import { ThemeContext } from '../../Context/Theme';
import GithubStart from './GithubStart';
import { DiGithub } from 'react-icons/di';

export default function Github() {
  const colourTheme = {
    // background: "transparent",
    // text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename} data-aos="fade-right">
        <h2 className="section__title different">
         
          GitHub <span className="different"> Calander</span>
        </h2>
        <GitHubCalendar
          username="MyHobbies0"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
        <br />
        <GithubStart/>
      </div>
      
    </>
  );
}
