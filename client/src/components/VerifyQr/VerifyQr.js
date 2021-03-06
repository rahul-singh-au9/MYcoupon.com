import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import './verify.css';

const VerifyQr = () => {

    const coupons = ["Iphone", "One plus", "one plus", "oneplus", "Nokia", "nokia", "Samsung", "samsung", "iphone", "nike", "Nike", "Denim", "denim", "Adidas", "adidas", "mango", "Mango" ];

    const [value, setValue] = useState('');
    const [data, setData] = useState(false)
    const [error, setError] = useState("")

    const clickHandler = () => {
        for (var i = 0; i < coupons.length; i++) {
        if (coupons[i] === value) {
            setData(true);
        }
        }
        setError("The coupon is not valid or expired !")
    }

    return (
        <div className="main-container">

            <input
            type="text"
            className="search"
            placeholder="validate the Qr code..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />

            <Button size="small" color="default" variant="contained" onClick={clickHandler}>Validate</Button>
            <br/>


            {
                data && value ? (
                <div className="city">
                    <h2 className="city-name">
                        <span>{` your coupon code is ${value}`}</span> <br/>
                        <span>{`The coupon is valid on ${value}`}</span>
                    </h2>
                </div>

                ) : (
                <div className="city">
                    <h2 className="city-name">
                        <span>{error}</span>
                    </h2>
                </div>
                )
            }

        </div>
    );
}

export default VerifyQr;