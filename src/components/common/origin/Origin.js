import React, { useState } from "react";
import "./Origin.css"
import { useHistory } from 'react-router-dom';
import FirstArrow  from "../../../images/Previous.svg"
import SirstArrow  from "../../../images/Next.svg"


function Origin () {
    const [value, setValue] = useState('');
    console.log(value);

    const history = useHistory();

    const handleClick = () => {
        history.push("/page")
    }
    const backClick = ()=> {
        history.push("/")
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
    return(
        <div className="OriginPage">
            <div className="leftSide">
                <div className="OriginHeading">
                    <h2>Hey, Rocketeer, what are your coordinates?</h2>
                </div>
                <div className="firstForm">
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" minLength={2}  required /><br />
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name"  minLength={2} required/><br />
                    <input type="email" name="email" id="email" placeholder="E mail"  required /><br /> 
                    <input type="tel"  name="phone" id="phone" placeholder="+995 5_ _ _ _"  value={`+995 ${value}`} onChange={(e)=>{ 
                        setValue(e.target.value.slice(5,e.target.value.length))
                    }} /> 
                </div>
                <div className="paginattion">
                    <img src={FirstArrow} alt="firstArrow"  onClick={backClick}/>
                    <div className="eclipse" id="first1" onClick={originPage}></div>
                    <div className="eclipse" onClick={skillPage}></div>
                    <div className="eclipse" onClick={covidPage}></div>
                    <div className="eclipse" onClick={aboutPage}></div>
                    <div className="eclipse" onClick={submitPg}></div>
                    <img src={SirstArrow} alt="SecondArrow"  id="SecondArrow" onClick={handleClick}/>
                </div>
            </div>
            <div className="rightSide">
                <div className="originHeadingTwo">
                    <h2>Redberry Origins</h2>
                </div>
                <div className="rightSideText">
                    <p>You watch “What? Where? When?” Yeah. Our founders used to play it.
                        That’s where they got a question about a famous American author and screenwriter Ray Bradbury.
                        Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry.
                        And at that moment, a name for a yet to be born company was inspired - Redberry 😇
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Origin;