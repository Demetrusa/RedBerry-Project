import React from "react";
import { Example } from "./Example";
import "./Covid.css";


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
                        <input type="radio"  id="office" name="work" value="From Sairme Office"/>From Sairme Office<br/>
                        <input type="radio"  id="home" name="work" value="From Home"/>From Home<br/>
                        <input type="radio"  id="hybrid" name="work" value="Hybrid"/>Hybrid<br/>
                    </div>
                    <div className="radioBox" id="box2">
                        <h2>Did you contact covid 19? :(</h2>
                        <input type="radio"  id="covidYes" name="Yes" value="Yes"/>Yes<br/>
                        <input type="radio"  id="covidNo" name="No" value="No"/>No<br/>
                    </div>
                    <div className="radioBox" id="box3">
                        <h2>When?</h2>
                        <Example />
                    </div>
                    <div className="radioBox" id="box4">
                        <h2>Have you been vaccinated?</h2>
                        <input type="radio"  id="vaccinadYes" name="Yes" value="Yes"/>Yes<br/>
                        <input type="radio"  id="vaccinaNo" name="No" value="No"/>No<br/>
                    </div>
                    <div className="radioBox" id="box5">
                        <h2>When did you get your last covid vaccine?</h2>
                        <Example />
                    </div>
                </div>
            </div>
            <div className="rightCovidBox">
                <div className="rightCovidBoxHeading">
                    <h2>Redberry Covid Policies</h2>
                </div>
                <div className="rightCovidBoxText">
                    <p>As this infamous pandemic took over the world, we
                        adjusted our working practices so that our
                        employees can be as safe and comfortable as
                        possible. We have a hybrid work environment, so you
                        can either work from home or visit our lovely office
                        on Sairme Street. If it was up to us, we would love you
                        to see us in the office because we think face-to-face 
                        communications  Zoom meetings. Both on the fun 
                        and productivity scales. </p>
                </div>
            </div>
        </div>
    )
}

export default Covid;