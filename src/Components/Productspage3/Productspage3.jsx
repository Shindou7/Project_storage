import React from "react";
import "./Productspage3.css"

import Productspage3_image from "../Assets/scanqr_banner.webp"


const Productspage3 = () => {
    return (
        <div className="Productspage3">
            <div className="Productspage3-left">
            <h2>Thank you for using our QR code generator and scanner!</h2>
            <div>
                <p>We hope you found it helpful. Keep up the good work!</p>
            </div>

            </div>
            <div className="Productspage3-right">
                <img src={Productspage3_image} alt=""/>

            </div>
        </div>
    )
}

export default Productspage3
