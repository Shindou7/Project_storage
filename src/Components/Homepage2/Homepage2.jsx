import React from "react";
import "./Homepage2.css";
import Storage_Management from "../Assets/1_Store_Management.jpg";
import Preparation_Packaging from "../Assets/2_Preparation_Packaging.jpg";
import Inventory_Tracking from "../Assets/3_Inventory_Tracking.jpg";
import Quality_Control from "../Assets/4_Quality_Control.jpg";
import Expiry_Date_Management from "../Assets/5_Expiry_Date_Management.png";

const Homepage2 = () => {
  return (
    <div id="homepage2" className="homepage2">
      <h2>Storage Services</h2>
      <div className="service-cards-container">
        <div className="service-card">
          <div className="icon">
            <img src={Storage_Management} alt="Storage Management" />
          </div>
          <h3>Storage Management</h3>
          <p>Efficiently organize and manage your storage facilities with our advanced storage solutions.</p>
        </div>
        
        <div className="service-card">
          <div className="icon">
            <img src={Preparation_Packaging} alt="Preparation & Packaging" />
          </div>
          <h3>Preparation & Packaging</h3>
          <p>Ensure your products are properly prepared and packaged for storage and distribution.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src={Inventory_Tracking} alt="Inventory Tracking" />
          </div>
          <h3>Inventory Tracking</h3>
          <p>Keep accurate records of your inventory levels and movements with our tracking systems.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src={Quality_Control} alt="Quality Control" />
          </div>
          <h3>Quality Control</h3>
          <p>Maintain high standards of quality with regular inspections and controls of stored goods.</p>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src={Expiry_Date_Management} alt="Expiry Date Management" />
          </div>
          <h3>Expiry Date Management</h3>
          <p>Monitor and manage the expiry dates of your products to ensure timely usage and minimal waste.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage2;