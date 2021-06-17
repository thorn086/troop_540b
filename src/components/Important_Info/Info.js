import React from "react";
import './Info.css';


//  */


function Info(props) {
    return (props.trigger) ? (
        <div className='info'>
            <div className="info_content">
                <button className="close" onClick={() => props.setTrigger(false)}>X</button>
                <h2> Important Info</h2>
                <div id="info_text">
                    <p>Info text test</p>
                    <br></br>
                    <p>I am writing this paragraph to see if the information section will display the information we need.
                    Testing this beforehand makes sure that our website is as efficient as possible, which will help the rest of the troop.
</p>
                </div>
            </div>
        </div>
    ) : "";

}
export default Info;