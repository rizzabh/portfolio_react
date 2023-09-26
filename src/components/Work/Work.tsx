import React from "react";
import "./Work.scss";
const Work = () => {
  return (
    <>
      <div className="container">
        <p className="container-title padddings">
          Work Experience
        </p>

        <div className="gradient-cards">
          <div className="card">
            <div className="container-card bg-green-box">
              
              <p className="card-title">Jt Technical Head</p>
              <p className="card-subtitle">Google Developers Student Club - TCET</p>
              <p className="card-description secondaryText">
              August 2023- Present, Mumbai <br/>
• Maintaining the official website of GDSC-TCET.<br/>
• Getting involved in Technical work Pre-Events.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-white-box">
              
              <p className="card-title">L5 Engineer </p>
              <p className="card-subtitle">TCET Open Source</p>
              <p className="card-description secondaryText">
              TCET Open Source August 2023 - Present, Mumbai<br/>
• Currently Designing Sites as a Maintainer.<br/>
• Utilizing Figma
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-yellow-box">
              
              <p className="card-title">4th Rank SIH Institute Level </p>
              <p className="card-subtitle">Team: Codeport Pioneers </p>
              <p className="card-description secondaryText">
              SIH 2023<br/>
              • Frontend and Designing<br/>
              • Presentation, PPT, Videos. <br/>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="container-card bg-blue-box">
             
              <p className="card-title">Ui/Ux Designer Intern</p>
              <p className="card-subtitle">TCET Open Source </p>
              <p className="card-description secondaryText">
              June 2023 - July 2023, Mumbai<br/>
              • Designed 5+ Websites and Applications.<br/>
• Learned about UX, UI Principles and its Implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
