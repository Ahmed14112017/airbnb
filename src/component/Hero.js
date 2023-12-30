import React from "react";
import pichero from '../images/Group 77.png'

function Hero(){
    return(
        <div className="hero-container" >
            {/* <div className="hero-pic"> */}
            <img src={pichero} alt='picnav' className="pichero" />
            {/* </div> */}
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
export default Hero;