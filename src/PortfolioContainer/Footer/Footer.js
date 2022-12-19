import React from "react";
import "./Footer.css";
import { ImHeart, ImGithub } from "react-icons/im";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-footer">
        <div className="">
          <div className=" footer-toop">
            <h3 id="NameFooter">SUKHDEV HANSDA</h3>
            <p>
              Full Stack Web Developer skilled in
              React,Redux,JavaScript,NodeJS,Express,MongoDB with excellent
              problem-solving skills and the ability to perform well in a team.
              Passionate about implementing new things and developing new
              projects.
            </p>
            <div className="footer-social">
              <a href="https://github.com/imsukhdevhansda" target="_blank">
                <BsGithub/>
              </a>
              <a
                href="https://www.linkedin.com/in/sukhdev-hansda/"
                target="_blank"
              >
                
                <BsLinkedin/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-footer-text">
        <p>
          ©{date}. Design with {<ImHeart color="red" />} by Sukhdev Hansda.
        </p>
      </div>
    </footer>
  );
}
