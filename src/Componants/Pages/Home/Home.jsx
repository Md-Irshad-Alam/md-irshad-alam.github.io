import React from 'react'
import style from './Home.css'
import { ThemeContext } from '../../Context/Theme';
import Navbar from '../../Navbar_page/Navbar';
function Home() {
    const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <header className={"header center " + themename} id="home">
          <h3>
            <a href="#home" className="link">
            Md. Irshad Alam
            </a>
          </h3>
          <Navbar />
      </header>
    </>
  );
}

export default Home
