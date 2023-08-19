import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
        
       
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="bggrad1"></div>
                <div className="bggrad2"></div>
                <div className="name"><h1>Rishabh Pandey</h1></div>
            </div>
            <div className="hero-subtitle">
            <h2>Developer & Designer</h2>
            </div>
            <div className="flexColStart desc">
                <span>Hello, Im an aspiring software Developer and Engineer</span>
                <span>I Talk About App Development, UI-UX, and Cinema</span>
            </div>
            <div className="cta1">
            <a href = "https://drive.google.com/file/d/1ZE0uFdpDIj-E8wJFjxSFgOj2Nn6TaTut/view?usp=sharing">
            <button className="button2">Resume</button></a>
            <a href="#Contact"><button className="button1 phone">Contact</button></a>

        </div>
            
        </div>
        <div className="flexCenter hero-right">
          <div className="img-container">
            <img src="Group 1.png" alt="Profile Pic" />
          </div>
        </div>
       
        
      </div>
      <div className="flexCenter innerWidth socials">
            <div className=" linkedin">
            <a href="https://linkedin.com/in/rizzabh"  target="_blank"><img src="/mdi_linkedin.png" alt="Linkedin" /></a>
            </div>
            <div className=" github">
            <a href="https://github.com/rizzabh" target="_blank"><img src="/mdi_github.png" alt="Linkedin" /></a>
            </div>
            <div className="instagram">
            <a href="https://www.instagram.com/rizzabh/" target="_blank"><img src="/mdi_instagram.png" alt="Linkedin" /></a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
