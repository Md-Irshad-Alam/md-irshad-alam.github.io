
import React from "react";
import Aos from "aos";

import About from "./Componants/Pages/About/About";
import Contact from "./Componants/Pages/Contact/Contact";
import Github from "./Componants/Pages/Github/Github";
import Home from "./Componants/Pages/Home/Home";
import { ThemeContext } from "./Componants/Context/Theme";
import Projects from "./Componants/Pages/Projects/Projects";
import { Footer } from "./Componants/Pages/Footar/Footer";
import "./App.css";
import { ScrollToTop } from "./Componants/ScrollToTop/ScrollToTop";
function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
   Aos.init({ duration: 1500 });
  }, []);

  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Home />
      </section>
      <main>
        <About />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#github">
        <Github />
        <br/>
        <Contact />
        </section>
        {/* <section id="#contact">
         
        </section> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
