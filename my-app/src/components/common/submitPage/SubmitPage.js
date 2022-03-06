import React from 'react';
import "./SubmitPage.css";
import { useHistory } from 'react-router-dom';

function SubmitPage () {
    const history = useHistory();
    const handleClick = () => {
        history.push("/thankYou")
    }

    const backClick = ()=> {
        history.push("/submit")
    }
    return(
        <div className="submitPage">
            <div className="submitButton">
            <button id='finalButton' onClick={handleClick}>Submit</button><br/>
            <a href="" id='final-a' onClick={backClick}>go back</a>
            </div>
        
        </div>
    )
}

export default  SubmitPage;
