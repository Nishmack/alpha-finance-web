import React from "react";
import "./Home.css";

import CustomCarousel from "../../components/Carousal/Carousal";
import Storyandmission from "../../components/Storyandmission/Storyandmission";
import Ourservices from "../../components/Ourservices/Ourservices";
import Imagesection from "../../components/Imagesection/Imagesection";
import Countersection from "../../components/Countersection/Countersection";
import Founder from "../../components/Founder/Founder";
import Contactus from "../../components/Contact/Contactus";
import Imagesec from "../../components/Imagesec/Imagesec";

function Home() {
  return (
    <div>
      <CustomCarousel />
      <Storyandmission />
      <Ourservices />
      <Imagesection />
      <Countersection />
      <Founder />
      <Contactus />
      <Imagesec />
    </div>
  );
}

export default Home;
