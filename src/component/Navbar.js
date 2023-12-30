import React from "react";
import picnav from '../images/airbnb 1.png'

function Navbar(){
    return(
        <div className="navheader">
            <nav className="navbar">
      <img src={picnav} alt='picnav' />
      </nav>
        </div>
    )
}
export default Navbar;