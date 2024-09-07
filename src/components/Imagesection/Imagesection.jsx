import React from "react";
import secondSlideImage from "../../assets/secondslideimage.jpg";
import "./Imagesection.css";

function Imagesection() {
  return (
    <div className="container imagesection-container">
      <div className="row">
        <div className="col-md-6">
          <img src={secondSlideImage} alt="Description" className="img-fluid" />
        </div>
        <div className="col-md-6 right-column-plane"></div>
      </div>
    </div>
  );
}

export default Imagesection;
