import React from "react";
import "./Homepage1.css";
import Package from "../Assets/package.png";

const Homepage1 = () => {
  const scrollToNextPage = () => {
    const nextPage = document.getElementById("homepage2");
    if (nextPage) {
      nextPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="homepage1">
        <div className="homepage1-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <p>New Methode of Storage</p>
        </div>
        <div className="homepage1-right">
          <img src={Package}></img>
        </div>
      </div>
      <div className="homepage1-latest-btn" onClick={scrollToNextPage}>
        Our Services
      </div>
    </>
  );
};

export default Homepage1;
