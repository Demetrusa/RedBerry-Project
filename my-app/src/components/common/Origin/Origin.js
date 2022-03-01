import React from "react";
import "./Origin.css"

function Origin () {
    return(
        <div className="OriginPage">
            <div className="leftSide">
                <div className="OriginHeading">
                    <h2>Hey, Rocketeer, what are your coordinates?</h2>
                </div>
                <div className="firstForm">
                    <input type="text" name="firstName" id="firstName" placeholder="First Name"/><br />
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name"/><br />
                    <input type="text" name="email" id="email" placeholder="E mail" /><br />
                    <input type="number"  name="number" id="mobileNumber" placeholder="+995 5_ _ _ _"/>
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