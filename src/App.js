



import Navbar from "./Componants/Navbar_page/Navbar";
import About from "./Componants/Pages/About/About";
import Contact from "./Componants/Pages/Contact/Contact";
import Github from "./Componants/Pages/Github/Github";
import Home from "./Componants/Pages/Home/Home";
import Projects from "./Componants/Pages/Projects/Projects";
import Skills from "./Componants/Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
     <section>
      <Navbar/>
     </section>
     <main>
      <Home/>
      <About/>
     <Skills/>
     <section>
      <Projects/>
     </section>
     <section>
      <Github/>
     </section>
     <section>
      <Contact/>
     </section>
     </main>
    </div>
  );
}

export default App;
