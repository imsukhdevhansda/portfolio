import React from 'react';
import "./About.css";
import profilePic from "../../assets/Profilepic.jpg";
import sukhdev_resume from "../../assets/Sukhdev_Hansda_Resume.pdf";

export default function About() {
    
  return (
    <div className="about-container" id="About">
      <div className="about-header">
        <h3>About Me</h3>
        <p>Why Choose Me?</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="about-content-box">
        <div className="aboutCard">
          <div className="profilePic">
            <img src={profilePic} alt="" />
          </div>
          <div className="profile-content">
            <div className="profilesummary">
              Hi Everyone, I am Sukhdev Hansda from Jharkhand, India. Full Stack
              Web Developer with excellent problem-solving skills and the
              ability to perform well in a team. Passionate about implementing
              new things and developing new projects.
            </div>
            <div>
              <h3>Here are a Few Highlights</h3>
              <ul className="keyHighlights">
                <li>Full Stack web development</li>
                <li>1200+ Hours of Coding</li>
                <li>300+ Hours of DSA</li>
                <li>60+ Mini Project</li>
                <li>5+ Project</li>
                <li>Soft Skill Development</li>
              </ul>
            </div>
            <div className="profile-optins resumeBtn">
              <a
                href={sukhdev_resume}
                target="_blank"
                download="Sukhdev_Hansda_Resume"
              >
                <button className="resumeButton2">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
