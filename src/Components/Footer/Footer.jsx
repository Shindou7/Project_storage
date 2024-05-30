import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import facebook_icon from "../Assets/facebook_icon.png";

const Footer = () => {
    const [menu, setMenu] = useState("");

    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="Footer Logo" />
                <p>The Storage Place</p>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram_icon} alt="Instagram" />
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <img src={pintester_icon} alt="Pinterest" />
                    </a>
                </div>
                <div className="footer-icons-container">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook_icon} alt="Facebook" />
                    </a>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>&copy; 2024 All Rights Reserved , Made by : Hassnaa & Amine.</p>
            </div>
        </div>
    );
};

export default Footer;
