import React from "react";
import "./About.css";

function About () {
    return (
        <div className="about">
            <div className="aboutLeftBox">
                <div className="aboutHeading">
                    <h2>What about you?</h2>
                </div>
                <div className="aboutHeadingInputs">
                    <div className="aboutInput">
                        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
                        <input type="radio"  id="aboutdYes" name="Yes" value="Yes"/>Yes<br/>
                        <input type="radio"  id="aboutNo" name="No" value="No"/>No<br/>
                    </div>
                    <div className="aboutTextArea">
                        <h2>What would you speak about at Devtalk?</h2>
                        <textarea name="Devlak" id="devlak" cols="" rows="" value="I would..."></textarea>
                    </div>
                    <div className="aboutTextArea">
                        <h2>Tell us something special</h2>
                        <textarea name="Special" id="Special" cols="" rows="" value="I..."></textarea>
                    </div>
                </div>
            </div>
            <div className="aboutRightBox">
                <div className="aboutRightBoxHeading">
                    <h2></h2>
                </div>
                <div className="AboutRightBoxHeading">
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default About;