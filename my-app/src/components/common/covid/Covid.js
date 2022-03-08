import React from "react";
import { Example } from "./Example";
import "./Covid.css";
import { useHistory } from 'react-router-dom';
import FirstArrow  from "../../../images/Previous.svg"
import SirstArrow  from "../../../images/Next.svg"


import "./Covid.css";
import BasicDatePicker from "../dataPicker/BasicDatePicker";


function Covid() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/about")
    }
    const backClick = ()=> {
        history.push("/page")
    }
    const originPage = () => {
        history.push("/origin")
    }
    const skillPage = () => {
        history.push("/page")
    }
    const covidPage = () => {
        history.push("/covid")
    }
    const aboutPage = () =>{
        history.push("about")
    }
    const submitPg =() => {
        history.push("submit")
    }
   
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
                        <input type="radio"  id="home" name="work" value="From Home"/>
                        <label name="work" for="From home">From home</label> <br/>

                        <input type="radio"  id="hybrid" name="work" value="Hybrid"/>Hybrid<br/>
                    </div>
                    <div className="radioBox" id="box2">
                        <h2>Did you contact covid 19? :(</h2>
                        <input type="radio"  id="covidYes" name="Yes" value="Yes"/>
                        <label for="Yes">Yes</label><br/>
                        <input type="radio"  id="covidNo" name="No" value="No"/>
                        <label for="No">No</label><br/>
                    </div>
                    <div className="radioBox" id="box3">
                        <h2>When?</h2>
                        <BasicDatePicker />
                    </div>
                    <div className="radioBox" id="box4">
                        <h2>Have you been vaccinated?</h2>
                        <input type="radio"  id="vaccinadYes" name="Yes" placeholder="yes"/>
                        <label for="Yes">Yes</label><br/>
                        <input type="radio"  id="vaccinaNo" name="No" placeholder="no"/>
                        <label for="No">No</label><br/>
                    </div>
                    <div className="radioBox" id="box5">
                        <h2>When did you get your last covid vaccine?</h2>
                        <BasicDatePicker />
                    </div>

                <div className="paginattion">
                    <img src={FirstArrow} alt="firstArrow"  onClick={backClick}/>
                    <div className="eclipse" onClick={originPage}></div>
                    <div className="eclipse" onClick={skillPage}></div>
                    <div className="eclipse" onClick={covidPage} id="first1"></div>
                    <div className="eclipse" onClick={aboutPage}></div>
                    <div className="eclipse" onClick={submitPg}></div>
                    <img src={SirstArrow} alt="SecondArrow"  id="SecondArrow" onClick={handleClick}/>
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