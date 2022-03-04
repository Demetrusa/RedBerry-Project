import React, { useEffect, useState } from "react";
import BasicDatePicker from "../covid/BasicDatePicker";
import "./Skill.css";

function Skill () {
    const [skill, setSkill] = useState([]);
   
    useEffect(()=>{
        fetch('https://bootcamp-2022.devtest.ge/api/skills')
        .then( (response) => response.json())
        .then(function(data){
                setSkill(data)
            }).catch(function(){
                alert("error");
            });
    },[])
        console.log(skill)
    return (
        <div className="skill">
            <div className="abouTSkill">
                <div className="skillHeading">
                    <h2>Tell us about your skills</h2>
                </div>
                <div className="skillForm">
                <select name="custom-select" id="skillChange" placeholder="Skills">
                    {skill? skill.map((item, index ) => {
                        return (
                            
                            <option key={item.id} value={item.title}>{item.title}</option>
                            // optionis magivrad ul li
                            
                        )
                    }) : null
                }
                </select><br />
                <div className="datapicker">
                    <BasicDatePicker />
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