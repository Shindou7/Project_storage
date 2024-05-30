import React from "react";
import "./Homepage1.css";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";

const Homepage1 = () => {
  const scrollToNextPage = () => {
    const nextPage = document.getElementById("homepage2");
    if (nextPage) {
      nextPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="homepage1">
      <div className="homepage1-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="homepage1-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Methode</p>
          <p>of Storage</p>
        </div>
        <div className="homepage1-latest-btn" onClick={scrollToNextPage}>
          <div>Our Services</div>
        </div>
      </div>
      <div className="homepage1-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Homepage1;
