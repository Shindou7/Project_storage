import React, { useState } from "react";
import "./NavigatorBar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const NavigatorBar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navgbar'>
            <div className="navg-logo">
                <img src={logo} alt=""/>
                <p>STORAGE</p>
            </div>
            <ul className="navg-menu">
                <li onClick={() => { setMenu("home"); }}>
                    <Link style={{ textDecoration: "none" }} to="/">Home</Link>
                    {menu === "home"?<hr /> : <> </>}
                </li>
                <li onClick={() => { setMenu("products"); }}>
                    <Link style={{ textDecoration: "none" }} to="/products">Products</Link>
                    {menu === "products"?<hr /> : <> </>}
                </li>
                <li onClick={() => { setMenu("blog"); }}>
                    <Link style={{ textDecoration: "none" }} to="/blog">Blog</Link>
                    {menu === "blog"?<hr /> : <> </>}
                </li>
                <li onClick={() => { setMenu("contact"); }}>
                    <Link style={{ textDecoration: "none" }} to="/contact">Contact us</Link>
                    {menu === "contact"?<hr /> : <> </>}
                </li>
            </ul>
            <div className="navg-login">
                <Link to="/login"><button>Login</button></Link>
            </div>
        </div>
    );
};

export default NavigatorBar;
