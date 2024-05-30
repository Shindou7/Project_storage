import React from "react";
import "./Productspage3.css"
import productImage3 from "../Assets/product-image3.png"


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
                <img src={productImage3} alt=""/>
            </div>
        </div>
    )
}

export default Productspage3
