import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Navbar from "./PortfolioContainer/Navbar/Navbar";
import Resume from "./PortfolioContainer/Resume/Resume";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import Project from "./PortfolioContainer/Project/Project";
import Footer from "./PortfolioContainer/Footer/Footer";
import Skills from "./PortfolioContainer/Skills/Skills";
import Calender from "./PortfolioContainer/Calender/Calender";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        {/* <Resume/> */}
        <Project/>
        <Skills/>
      
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
