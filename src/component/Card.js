import React from "react";
import wedding from '../images/wedding-photography 1.png'
import bike from '../images/mountain-bike 1.png'
import man from '../images/image 12.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

function Card(){
    return(
        <div className="Card-container" >
            <div className="card-allitem">
                <div className="card-ele">
                
                <img src={man} alt='picnav' className="photo-item"/>
                <FontAwesomeIcon icon={faStar} className="icon" />
                <span>5.0 </span>
                <span className="value">(6).USA </span>
                
                <p>Life lessons with Katie Zaferes</p>
                <span>From $136 /</span>
                <span>person</span>
                </div>
                <div className="card-ele">
                
                <img src={wedding} alt='wedding' className="photo-item"/>
                <FontAwesomeIcon icon={faStar} className="icon"/>
                <span>5.0 </span>
                <span className="value">(30).USA </span>
                <p>Learn wedding photography</p>
                <span >From $125 / </span>
                <span>person</span>
                </div>
                <div className="card-ele">
                <img src={bike} alt='wedding' className="photo-item"/>
                <FontAwesomeIcon icon={faStar}className="icon" />
                <span>4.8 </span>
                <span  className="value">(2).USA </span>
                <p>Group Mountain Biking</p>
                <span>From $50 / </span>
                <span>person</span>
                
                </div>
            
            </div>
            
            
        </div>
    )
}
export default Card;