import React from "react";
import "./Founder.css";
import founder from "../../assets/unnamed.jpg";

function Founder() {
  return (
    <div className="person-container">
      <h2>Meet Our Founder</h2>
      <img src={founder} alt="Person's image" />

      <div className="divsec">
        <span>Mr. Pawan Punjabi</span>

        <p>Founder</p>
      </div>
    </div>
  );
}

export default Founder;
