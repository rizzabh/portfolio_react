import React, { useRef } from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div ref={constraintsRef} className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          <div className="flexColStart hero-left gap-4">
            <a href="https://youtu.be/OT0rT0bbc7k?si=sd04mKWoUlZlFrDj" target="_blank"><div className="pl-4 pr-2 py-2 bg-gray-800 border border-gray-500 bg-opacity-50 text-white rounded-3xl max-sm:text-sm flex items-center cursor-pointer">
              Watch Seminar
              <div className="play-logo-inisde-circle ml-1">
                <img src="/play.svg" alt="" />
                
              </div>
            </div>
            </a>
            <div className="hero-title">
              <motion.div
                drag
                dragConstraints={constraintsRef}
                animate={{
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bggrad1"
              ></motion.div>

              <div className="bggrad2"></div>
            </div>
            <div className="hero-section-left">
              <div className="font-semibold text-6xl max-sm:text-5xl Name">
                Rishabh Pandey
              </div>
              <div className="text-xl role mt-2 mb-2">Developer & Designer</div>
              <div className="description mb-4">
                <p>
                  I'm a software developer based in India. I have a passion for
                  web design <br className="max-sm:hidden" /> and love to create
                  for web and mobile devices. I have worked
                  <br className="max-sm:hidden" /> on a variety of projects
                  ranging from web development
                  <br className="max-sm:hidden" /> to web design.
                </p>
              </div>
            </div>

            <div className="cta1">
              <a href="https://drive.google.com/file/d/1MFsjkTYBcEAr_yb1o23-WMl9bVwD7ak4/view?usp=sharing" target="_blank">
                <button className="button2">Resume</button>
              </a>
              <a href="#Contact">
                <button className="button1 phone">Contact</button>
              </a>
            </div>
          </div>

          <div className="flexCenter hero-right">
            <div className="img-container"></div>
          </div>
        </div>

        <div className="flexCenter innerWidth socials">
          <div className=" linkedin">
            <a href="https://linkedin.com/in/rizzabh" target="_blank">
              <img src="/mdi_linkedin.png" alt="Linkedin" />
            </a>
          </div>
          <div className=" github">
            <a href="https://github.com/rizzabh" target="_blank">
              <img src="/mdi_github.png" alt="Linkedin" />
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/rizzabh/" target="_blank">
              <img src="/mdi_instagram.png" alt="Linkedin" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
