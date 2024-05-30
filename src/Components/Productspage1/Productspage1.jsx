import React from "react";
import "./Productspage1.css"

import hero_image0 from "../Assets/hero_image0.png"


const Productspage1 = () => {
    return (
        <div className="Productspage1">
            <div className="Productspage1-left">
                <h2>Welcome to the products scanning page!</h2>
                <p>Add information products to view CodeQr</p>
            </div>
            <div className="Productspage1-right">
                <img src={hero_image0} alt=""/>
            </div>
        </div>
    )
}

export default Productspage1
