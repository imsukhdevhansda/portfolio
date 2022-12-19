import React from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';
import { useEffect } from "react";
import sukhdev_resume from "../../assets/Sukhdev_Hansda_Resume.pdf";
export default function Navbar() {
    let toggleMenuBar;
    const doSomething = () =>{
        toggleMenuBar = document.getElementById("navMenuCollapsibleMenu");
        let iTag = document.getElementById('fabtn');
        if(toggleMenuBar.classList.value === 'InActiveNavMenu'){
            toggleMenuBar.classList.remove('InActiveNavMenu');
            toggleMenuBar.classList.add('activeNavMenu');
            iTag.classList.remove('fa-bars');
            iTag.classList.add('fa-times');
        }
        else{
            toggleMenuBar.classList.add('InActiveNavMenu');
            toggleMenuBar.classList.remove('activeNavMenu');
            iTag.classList.remove('fa-times');
            iTag.classList.add('fa-bars');
        }
        
    }

    useEffect(() => {
        toggleMenuBar = document.getElementById("navMenuCollapsibleMenu");
        let iTag = document.getElementById('fabtn');
        document.addEventListener('click', (e) => {
            if(toggleMenuBar.classList.value === 'activeNavMenu' && e.target.classList.value !== "fa fa-times"){
                if(toggleMenuBar.classList.value === "activeNavMenu"){
                    toggleMenuBar.classList.add('InActiveNavMenu');
                    toggleMenuBar.classList.remove('activeNavMenu');
                    iTag.classList.remove('fa-times');
                    iTag.classList.add('fa-bars');
                }
            }
        })
    document.addEventListener('scroll', () =>{
        let navbar = document.querySelector('.navMenuBar');
        if(window.pageYOffset > 480){
            navbar.classList.add('stickyy');
        }
        else{
            navbar.classList.remove('stickyy');
        }
    })
    });
  return (
    <>
      <div className="navMenuBar">
        <div className="navMenuContainer">
          <div className="navMenuLogo">
            <Link to="Home" spy={true} smooth={true} offset={0} duration={500}>
              SH
            </Link>
          </div>
          <div id="toggleMenuButton" className="toggleMenuButton">
            <i
              className="fa fa-bars"
              id="fabtn"
              aria-hidden="true"
              onClick={doSomething}
            ></i>
          </div>
          <div className="navMenuBarMain">
            <Link to="Home" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>

            <Link to="About" spy={true} smooth={true} offset={0} duration={500}>
              About
            </Link>

            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>

            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </Link>

            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
            <a
              href={sukhdev_resume}
              target="_blank"
              download="Sukhdev_Hansda_Resume"
              style={{ color:"white",textDecoration:"none"}}
            >
              {/* Resume */}
              <button className="resumeButtonN">Get Resume</button>
            </a>
          </div>
        </div>
        <div id="navMenuCollapsibleMenu" className="InActiveNavMenu">
          <div className="navMenuCollapsibleArea">
            <Link to="Home" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>

            <Link to="About" spy={true} smooth={true} offset={0} duration={500}>
              About
            </Link>

            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>

            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </Link>

            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
