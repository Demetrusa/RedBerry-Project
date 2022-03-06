import React from 'react';
import "./SubmitPage.css";
import { useHistory } from 'react-router-dom';

function SubmitPage () {
    const history = useHistory();
    const handleClick = () => {
        history.push("/ThankYou")
    }
    return(
        <div className="submitPage">
            <div className="submitButton">
            <button id='finalButton' onClick={handleClick}>Submit</button><br/>
            <a href="" id='final-a'>go back</a>
            </div>
        
        </div>
    )
}

export default  SubmitPage;
