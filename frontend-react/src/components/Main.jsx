import React from "react"
import Button from "./Button"

function Main() {

    return (
        <>
            <div className="container">
                <div className="pb-5 text-center bg-light-dark">
                    <h1 className="text-light">Stock Prediction Portal</h1>
                    <p className="text-light">A powerful stock prediction portal delivering data-driven insights and market trends.
Analyze real-time signals, forecasts, and performance metrics in one place.
Make smarter investment decisions with confidence and clarity.</p>
                    <Button text="Login" class="btn-outline-info"/>
                </div>
            </div>
        </>
    );

}

export default Main