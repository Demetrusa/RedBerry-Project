import React from "react";
import "./Skill.css";

function Skill () {
    const skillApi = () => {
        
    }
    return (
        <div className="skill">
            <div className="abouTSkill">
                <h2>Tell us about your skills</h2>
                <select name="custom-select" id="skillChange" >
                    <option value="HTML"></option>
                    <option value="CSS"></option>
                    <option value="PHP"></option>
                    <option value="Laravel"></option>
                    <option value="React.JS"></option>
                    <option value="Vue.JS"></option>
                    <option value="Svelte"></option>
                    <option value="Angular"></option>
                </select>
            </div>
            <div className="AboutRedberry">
                <h2>A bit about our battles</h2>
                <p>
                As we said, Redberry has been on the field for quite some time now,
                and we have touched and embraced a variety of programming languages,
                technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.
                js, refined in React, and allies with Serverside technologies like Docker and Kubernetes,
                and now we have set foot in the web3 industry.
                </p>
            </div>
        </div>
    )
}
export default Skill;