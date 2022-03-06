import React, { useEffect, useState } from "react";
import "./Skill.css";
import { useHistory } from 'react-router-dom';

function Skill () {
    const [skill, setSkill] = useState([]);
    const [selected, setSelected] = useState('');
    const [date,setDate] = useState();
    const [click, setClick] = useState(false);

    const history = useHistory();

    const handleClick = () => {
        history.push("/covid")
    }

    useEffect(()=>{
        fetch('https://bootcamp-2022.devtest.ge/api/skills')
        .then( (response) => response.json())
        .then(function(data){
                setSkill(data)
            }).catch(function(){
                alert("error");
            });
    },[])

    const addSkill = (e) => { 
      const selectedSkill = e.target.value;
      setSelected(selectedSkill);
    }

    const addDate = (e) => {
        const addedDate = e;
        setDate(addedDate)
    }
    return (
        <div className="skill">
            <div className="abouTSkill">
                <div className="skillHeading">
                    <h2>Tell us about your skills</h2>
                </div>
                <div className="skillForm">
                <select name="custom-select" id="skillChange" placeholder="Skills" onChange={addSkill}>
                    {skill? skill.map((item, index ) => {
                        return (
                            <option key={item.id} value={item.title}>{item.title}</option>    
                        )
                    }) : null
                }
                </select><br />
                    <div className="datapicker">
                        <input type='date' onChange={addDate} style={{ width: 455,height: 54,alignItems: "center"}}/>
                    </div>
                </div>
                <div className="add-button">
                    <button onClick={() => {
                        setClick(true);
                        addDate();
                        addSkill();
                    }}>Add Programing Language</button>
                </div>
                {click && 
                    <div className="saved-programs">
                        <p>{selected}</p>
                        <p>{date}</p>
                        <p>-</p>
                    </div>
                }
                <div className="skillbutton">
                <button type="button" onClick={handleClick}>Next</button>   
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