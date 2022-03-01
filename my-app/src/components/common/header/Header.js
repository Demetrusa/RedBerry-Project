import React from "react";
import "./Header.css"

function Header (){
     return (
         <div className="homePage">
            <div className="heading">
                <h1>Welcome Rocketeer !</h1>
            </div>
            <div className="startButton">
                <button>Start Questionnaire</button>
            </div>
         </div>
     )
 }

 export default Header;
