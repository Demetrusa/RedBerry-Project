import React from "react";
import "./Covid.css";

function Covid() {
    return (
        <div className="covid-box">
            <div className="leftCovidBox">
                <div className="covidHeading">
                    <h2>Covid Stuff</h2>
                </div>
                <div className="CovidRadio">
                    <div className="radioBox">
                        <h2>how would you prefer to work?</h2>
                        <input type="radio"  id="Office" name="work" value="From Sairme Office"/>From Sairme Office<br/>
                        <input type="radio"  id="Home" name="work" value="From Home"/>From Home<br/>
                        <input type="radio"  id="Hybrid" name="work" value="Hybrid"/>Hybrid<br/>
                    </div>
                    <div className="radioBox" id="box2">
                        <h2>Did you contact covid 19? :(</h2>
                        <input type="radio"  id="CovidYes" name="Yes" value="Yes"/>Yes<br/>
                        <input type="radio"  id="CovidNo" name="No" value="No"/>No<br/>
                    </div>
                    <div className="radioBox" id="box3">
                        <h2>When?</h2>
                
                    </div>
                    <div className="radioBox" id="box4">
                        <h2>Have you been vaccinated?</h2>
                        <input type="radio"  id="VaccinadYes" name="Yes" value="Yes"/>Yes<br/>
                        <input type="radio"  id="VaccinaNo" name="No" value="No"/>No<br/>
                    </div>
                </div>
            </div>
            <div className="rightCovidBox"></div>
        </div>
    )
}

export default Covid;