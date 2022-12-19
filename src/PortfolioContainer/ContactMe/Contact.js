import React from "react";
// import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");


  


  var templateParams = {
      name: name,
      email: email,
      message: message,
    };

 

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send('service_3c0oigr', 'template_pnjjhc8', templateParams,'2Qowuf2uPNuVz2jcl')


            .then((response) => {


                console.log('SUCCESS!', response.status, response.text);


                alert('Message sent successfully');

                setMessage('');
                setName('');
                setEmail('');
                e.target.reset();
            },(error) => {
                console.log('FAILED...', error);
                alert('Some technical error');
            });
  };

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p>Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
          <div className="topCtn">
            <div className="callBtn btnTp">
              <FaPhoneAlt />
              <p>PHONE</p>
              <span>Contact me </span>
              <p className="contactNo">
                <a href="tel:917321059171" target="_blank">
                  917321059171
                </a>
              </p>
            </div>
            <div className="emailBtn btnTp">
              <MdEmail />
              <p>EMAIL</p>
              <span>Contact me on email address</span>

              <p className="contactNo">
                <a href="mailto: sukhdevhansda8@gmail.com" target="_blank">
                  sukhdevhansda8@gmail.com
                </a>
              </p>
            </div>
            <div className="addrBtn btnTp">
              <FaMapMarkerAlt />
              <p>LOCATION</p>
              <span>Dist- Dhanbad, Jharkhand 828205 </span>

              <p className="contactNo">
                <a
                  href="https://www.google.com/maps/dir/DHANBAD+RAILWAY+STATION(South+Side),+Dhanbad+Railway+Station+Road,+Purana+Bazar,+Damodarpur,+Dhanbad,+Jharkhand/22.9543624,86.0552782/@23.3727329,85.6985317,9z/data=!3m1!4b1!4m10!4m9!1m5!1m1!1s0x39f6bcc87fce1323:0xc0e2c978a0ddee87!2m2!1d86.4285936!2d23.7906814!1m1!4e1!3e0"
                  target="_blank"
                >
                  View on Google Map
                </a>
              </p>
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="formInput">
              <div className="leftForm">
                <div className="rows">
                  <input
                    type="text"
                    name="user_name"
                    pattern="[A-Za-z]{3,}"
                    id="name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    placeholder="Full Name: "
                    required={true}
                  />
                </div>
                <div className="rows">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                    placeholder="Your Email:"
                    required={true}
                  />
                </div>
              </div>
              <div className="rightForm">
                <div className="rows">
                  <textarea
                    name="message"
                    id="inputMessage"
                    cols="0"
                    rows="9"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                    placeholder="Your Message:"
                    required={true}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="formSubmit">
              <div className="sendButton" colSpan="2">
                <button type="submit" value="Send">
                  Send Message
                </button>
              </div>
            </div>
          </form>

          <div className="main_form"></div>
        </div>
      </div>
    </div>
  );
}
