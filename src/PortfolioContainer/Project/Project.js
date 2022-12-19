import React, { useState, useEffect } from 'react';
import './Project.css';
import myhoursProject from "../../assets/myhours.png";
import nordstromProject from "../../assets/nordstrom.png";
import zee5 from "../../assets/zee5.png";
import shoppingbazzar from "../../assets/shoppingbazzar.png";
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs1.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import redux from "../../assets/redux.png";
import github from "../../assets/github.png";
import chakraui from "../../assets/chakraui.png";
import firebase from "../../assets/firebase.png";

export default function Project() {
    
  return (
    <div className="project-container" id="Projects">
      <div className="project-header">
        <h3>Projects</h3>
        <p>Tech Stack and Projects</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="projectDetails">
        <div className="projectCard">
          <div className="project-card">
            <div className="projectName">
              <h3>My Hours</h3>
            </div>
            <div className="projectImg">
              <img src={myhoursProject} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
                About My Hours is a cloud-based time tracking solution best
                suited for small teams and freelancers. This project is about
                building a time management app for the users.It was a
                collaborative project. Cloned within a duration of 4 days.
              </div>
              <div className="techStack">
                <img src={react} />
                <img src={redux} />
                <img src={chakraui} />
                <img src={css3} />
                <img src={nodejs} />
                <img src={express} />
                <img src={mongodb} />
                <img src={js} />
                <img src={github} />
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/Thannzz/Myhours-Clone"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://myhoursclone.vercel.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>Nordstrom</h3>
            </div>
            <div className="projectImg">
              <img src={nordstromProject} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
                Nordstrom is an E-commerce website from Seattle, WA. A leading
                fashion retailer offering compelling clothing, shoes and
                accessories for men, women and kids. It was a collaborative
                project. Cloned within a duration of 4 days.
              </div>
              <div className="techStack">
                <img src={html5} />
                <img src={css3} />
                <img src={js} />
                <img src={github} />
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/LaxmiWavale/NordStrom_clone"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://brilliant-froyo-8fead7.netlify.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>Shopping Bazaar</h3>
            </div>
            <div className="projectImg">
              <img src={shoppingbazzar} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
                About Shopping bazaar is a amazing Ecommerce website with the
                sign in, signup, sorting and filtering functionality. Easily you
                can find your favourite product and buy it. It was a
                collaborative project. Cloned within a duration of 4 days.
              </div>
              <div className="techStack">
                <img src={react} />
                <img src={redux} />
                <img src={chakraui} />
                <img src={css3} />
                <img src={firebase} />
                <img src={github} />
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/imsukhdevhansda/shopping-bazaar"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://shoppingbazzar.vercel.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="projectName">
              <h3>Zee5</h3>
            </div>
            <div className="projectImg">
              <img src={zee5} alt="" />
            </div>
            <div className="projectInfo">
              <div className="contentProject">
                It was a collaborative project , we were 5 members in our group.
                In this project we have clone the ZEE5.com. ZEE5 is a OTT
                platform. where you can watch your favorite movies and shows.
              </div>
              <div className="techStack">
                <img src={html5} />
                <img src={css3} />
                <img src={js} />
                <img src={github} />
              </div>
              <div className="projectLinks">
                <a
                  className="projectbtn1"
                  href="https://github.com/LaxmiWavale/ZEE5_clone"
                  target="_blank"
                >
                  <AiOutlineGithub /> GitHub
                </a>
                <a
                  className="projectbtn2"
                  href="https://papaya-tarsier-523843.netlify.app/"
                  target="_blank"
                >
                  Demo <TbExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
