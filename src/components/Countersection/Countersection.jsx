import React from "react";
import "./Countersection.css";

const Countersection = () => {
  return (
    <div className="background-container">
      <div className="section2-container">
        <div className="row">
          <div className="col-md-6 content-containercount">
            <h2>We believe you're bright</h2>
          </div>
          <div className="col-md-6 image-containercount">
            <img
              src="https://i.ibb.co/VNqgt3P/image2.jpg"
              alt="Your image description"
            />
            <div className="overlay-infoone">
              <div className="info-box">
                <span>320+</span>
                <p>Lenders</p>
              </div>
            </div>
            <div className="overlay-infotwo">
              <div className="info-box">
                <span>20+</span>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countersection;
