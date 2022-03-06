import React from "react";
import "./About.css";
import { useHistory } from 'react-router-dom';


function About () {
    const history = useHistory();
    const handleClick = () => {
        history.push("/submit")
    }
    return (
        <div className="about">
            <div className="aboutLeftBox">
                <div className="aboutHeading">
                    <h2>What about you?</h2>
                </div>
                <div className="aboutHeadingInputs">
                    <div className="aboutInput">
                        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
                        <input type="radio"  id="aboutdYes" name="Yes" value="Yes"/><lavel For="Yes">Yes</lavel><br/>
                        <input type="radio"  id="aboutNo" name="No" value="No"/><label for="No">No</label><br/>
                    </div>
                    <div className="aboutTextArea">
                        <h2>What would you speak about at Devtalk?</h2>
                        <textarea name="Devlak" id="devlak" cols="" rows="" placeholder="I Would"></textarea>
                    </div>
                    <div className="aboutTextArea">
                        <h2>Tell us something special</h2>
                        <textarea name="Special" id="Special" cols="" rows="" placeholder="I..."></textarea>
                    </div>
                </div>
                <div className="skillbutton">
                         <button type="button" onClick={handleClick}>Next</button>   
                </div>
            </div>
            <div className="aboutRightBox">
                <div className="aboutRightBoxHeading">
                    <h2>Redberrian Insights</h2>
                </div>
                <div className="AboutRightBoxHeading">
                    <p>We were soo much fun before the pandemic started! Parties almost every 
                        weekend and lavish employee birthday celebrations! Unfortunately, 
                        covid ruined that fun like it did almost everything else in the world. 
                        But we try our best to zhuzh it up a bit. For example, we host biweekly
                        Devtalks where our senior and lead developers talk about topics they are passionate about.
                        Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. 
                        We hold these talks in the office but you can join our Zoom broadcast as well.
                        Feel free to join either as an attendee or a speaker!</p>
                </div>
            </div>
        </div>
    )
}

export default About;