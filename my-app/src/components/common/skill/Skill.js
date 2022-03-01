import React, { useState } from "react";
import "./Skill.css";

function Skill () {
    const [skills, setSkill] = useState("");
    const skillApi = () => {
        fetch("https://bootcamp-2022.devtest.ge/api/skills")
        .then((response) => response.json())
        .then((data)=>{
            setSkill(data.setup + " ... " + data.title)
        });

    }
    return (
        <div className="skill">
            <div className="abouTSkill">
                <div className="skillHeading">
                    <h2>Tell us about your skills</h2>
                </div>
                <div className="skillForm">
                <select name="custom-select" id="skillChange" placeholder="Skills" onClick={setSkill} >
                    <option value="HTML">{skills}</option>
                    <option value="CSS">{skills}</option>
                    <option value="PHP">{skills}</option>
                    <option value="Laravel">{skills}</option>
                    <option value="React.JS">{skills}</option>
                    <option value="Vue.JS">{skills}</option>
                    <option value="Svelte">{skills}</option>
                    <option value="Angular">{skills}</option>
                </select>
                </div>
            </div>
            <div className="AboutRedberry">
                <div className="aboutreadberry-heading">
                    <h2>A bit about our battles</h2>
                </div>
                <div className="AboutTextContent">
                    <p>
                    As we said, Redberry has been on the field for quite some time now,
                    and we have touched and embraced a variety of programming languages,
                    technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.
                    js, refined in React, and allies with Serverside technologies like Docker and Kubernetes,
                    and now we have set foot in the web3 industry.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Skill;