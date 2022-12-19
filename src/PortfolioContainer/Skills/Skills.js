import React from 'react'
import './Skills.css'
import  {FaJava} from 'react-icons/fa';
import  {GiSkills} from 'react-icons/gi';
import  {ImHtmlFive, ImDatabase} from 'react-icons/im';
import  {GrJava, GrNode, GrReactjs} from 'react-icons/gr';
import  {RiGitBranchLine} from 'react-icons/ri'
import GitHubCalendar from 'react-github-calendar';

export default function Skills() {
  return (
    <div className="skills-container" id="Skills">
      <div className="skills-header">
        <h3>Skills</h3>
        <p>Hands On Experience</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>
      <div className="skillsDetails">
        <div className="boxContainer">
          <div className="skillBox skillbox1">
            <div className="sillIcon">
              <ImHtmlFive color="red" />
            </div>
            <div className="skillTitle">Web Technologies</div>
            <div className="skillInfo">HTML, CSS, JavaScript</div>
          </div>
          <div className="skillBox skillbox2">
            <div className="sillIcon">
              <GrJava />
            </div>
            <div className="skillTitle">Web frameworks</div>
            <div className="skillInfo">React,Redux</div>
          </div>
          <div className="skillBox skillbox3">
            <div className="sillIcon">
              <FaJava color="blue" />
            </div>
            <div className="skillTitle">CSS</div>
            <div className="skillInfo">
              Material-UI,Styled-Components,Bootstrap
            </div>
          </div>
          <div className="skillBox skillbox4">
            <div className="sillIcon">
              <GrNode />
            </div>
            <div className="node"></div>
            <div className="skillTitle">Node Js</div>
            <div className="skillInfo">Backend</div>
          </div>
          <div className="skillBox skillbox5">
            <div className="sillIcon">
              <GiSkills color="rgb(109, 152, 0)" />
            </div>
            <div className="skillTitle">Soft Skills</div>
            <div className="skillInfo">
              Team work, Ready to learn new things, Communication Skills
            </div>
          </div>
          <div className="skillBox skillbox6">
            <div className="sillIcon">
              <RiGitBranchLine color="blue" />
            </div>
            <div className="skillTitle">Code Version Control</div>
            <div className="skillInfo">GitHub, Git</div>
          </div>

          <div className="skillBox skillbox7">
            <div className="sillIcon">
              <img src="https://cdn-icons-png.flaticon.com/512/848/848525.png"></img>
            </div>
            <div className="skillTitle">Data Structure</div>
            <div className="skillInfo">300+ Hours of DSA</div>
          </div>

          <div className="skillBox skillbox8">
            <div className="sillIcon">
              <img src="https://png.pngtree.com/png-vector/20190607/ourmid/pngtree-frontendinterfacemobilephonedeveloper-line-icon-png-image_1235458.jpg"></img>
            </div>
            <div className="skillTitle">Fronted Developer</div>
            <div className="skillInfo">1200+ Hours of coding</div>
          </div>

          <div className="skillBox skillbox9">
            <div className="sillIcon">
              <img src="https://c3.klipartz.com/pngpicture/737/709/sticker-png-numix-circle-for-windows-mongodb-icon-thumbnail.png"></img>
            </div>
            <div className="skillTitle">Mongo DB</div>
            <div className="skillInfo">Data Base</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <h1 className="calender_heading">Github Statistics</h1>
      </div>

      {/* <div
        style={{ margin: "auto", width: "65%", marginTop: "6%", height: "30%" }}
      >
        <img
          alt=" Sukhdev Hansda Activity Graph"
          src="https://activity-graph.herokuapp.com/graph?username=imsukhdevhansda"
          style={{ width: "100%" }}
        />
      </div> */}

      {/* <div style={{ width: "30%", marginLeft: "20%" }}>
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=omkundu&show_icons=true&locale=en&layout=compact"
          alt="omkundu"
          style={{ width: "100%" }}
        />
      </div> */}

      <div style={{ width: "100%", marginLeft: "0%", display: "flex" }}>
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=omkundu&show_icons=true&locale=en&layout=compact"
          alt="omkundu"
          style={{ width: "30%", marginLeft: "15%" }}
        />
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=imsukhdevhansda&show_icons=true&locale=en&theme=tokyonight"
          alt="imsukhdevhansda"
          style={{ width: "30%", marginLeft: "7%" }}
        />
      </div>

      <div style={{ width: "37%", marginLeft: "30%" }}>
        <p align="center">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=imsukhdevhansda&show_icons=true&locale=en&theme=tokyonight"
            alt="imsukhdevhansda"
            style={{ width: "100%"}}
          />
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <h1 className="calender_heading">Github Calendar</h1>
      </div>

      <div className="calender">
        <GitHubCalendar
          username="imsukhdevhansda"
          style={{ margin: "auto", padding: "20px" }}
        />
      </div>
    </div>
  );
}
