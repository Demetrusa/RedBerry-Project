import React from "react";
import "./Header.css";
import Rocket from "../../../images/rocketman.svg";
import { useHistory } from 'react-router-dom';

function Header (){
    // const navigate = useNavigate();
    // function handleClick() {
    // navigate("/path");
//   }
    const history = useHistory();

    const handleClick = () => {
        history.push("/origin")
    }
     return (
         <div className="homePage">
            <div className="heading">
                <h1>Welcome Rocketeer !</h1>
            </div>
            <div className="startButton">
               <button type="button" onClick={handleClick} >Start Questionnaire</button>   
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
