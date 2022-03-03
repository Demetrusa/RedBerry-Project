import React from "react";
import "./Header.css";
import Rocket from "../../../images/rocketman.svg";
import { useNavigate } from 'react-router-dom';

function Header (){
    // const navigate = useNavigate();
    // function handleClick() {
    // navigate("/path");
//   }
     return (
         <div className="homePage">
            <div className="heading">
                <h1>Welcome Rocketeer !</h1>
            </div>
            <div className="startButton">
               <button type="button" >Start Questionnaire</button>   {/*onClick={handleClick}*/}
            </div>
            <div className="submitted-application">
                <a href="">Submitted Applications</a>
            </div>
            <div id="rocketman">
                <img src={Rocket} alt="rocketmanSVG" className="rocketImg"/>
            </div>
         </div>
     )
 }

 export default Header;
