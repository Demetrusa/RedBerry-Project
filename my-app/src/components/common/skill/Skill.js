import React, { useState } from "react";
import BasicDatePicker from "../covid/BasicDatePicker";
import "./Skill.css";

function Skill () {
    const [object, setSkill] = useState("");
    const skill = fetch('https://bootcamp-2022.devtest.ge/api/skills');
    skill.then(function (response){
        let responseJSON = response.json();
        responseJSON.then(function(title){
            let object = title[1];
            console.log(object);
        }).catch(function(){
            alert("error");
        });
    })
    return (
        <div className="skill">
            <div className="abouTSkill">
                <div className="skillHeading">
                    <h2>Tell us about your skills</h2>
                </div>
                <div className="skillForm">
                <select name="custom-select" id="skillChange" placeholder="Skills">
                    <option value={object[1]}>{}</option>
                    <option value="CSS"></option>
                    <option value="PHP"></option>
                    <option value="Laravel"></option>
                    <option value="React.JS"></option>
                    <option value="Vue.JS"></option>
                    <option value="Svelte"></option>
                    <option value="Angular"></option>
                </select><br />
                <div className="datapicker"><BasicDatePicker />
                </div>
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