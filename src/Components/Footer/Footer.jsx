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
                <p>The Storage</p>
            </div>
            <ul className="footer-links">
                <li onClick={() => setMenu("company")}>
                    <Link style={{ textDecoration: "none" }} to="/company">Company</Link>
                    {menu === "company"?<hr /> : <> </>}
                </li>

                <li onClick={() => setMenu("offices")}>
                    <Link style={{ textDecoration: "none" }} to="/offices">Offices</Link>
                    {menu === "offices" && <hr />}
                </li>
                <li onClick={() => setMenu("about")}>
                    <Link style={{ textDecoration: "none" }} to="/about">About</Link>
                    {menu === "about" && <hr />}
                </li>
            </ul>
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
                <p>&copy; 2024 All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
