import React from "react";
import './Info.css';


//  */


function Info(props) {
    return (props.trigger) ? (
        <div className='info'>
            <div className="info_content">
                <button className="close" onClick={() => props.setTrigger2(false)}>X</button>
                <h2> Important Troop 540 Information</h2>
                <div id="info_text">
                    <p>Summer Camp 2021 Notice</p>
                    <br />
                    <p>*** Just a friendly reminder that we need your medical forms no later than July 7th, 2022. One copy for Camp Phillips,
                        one copy for the troop and one copy for you. Mr. Pucel has to mail them to camp two weeks prior to our arrival.
                        Even if you are not attending summer camp, we need a copy on file as they are used as a reference
                        throughout the year on all outings. ***</p>
                    <br />
                    <a href="https://filestore.scouting.org/filestore/HealthSafety/pdf/680-001_ABC.pdf?_gl=1*euoxqa*_ga*MjExNjEyMzEyMC4xNjIzNDI4MzA2*_ga_20G0JHESG4*MTYyMzQyODMwNS4xLjAuMTYyMzQyODMwNS42MA.."
                        target="blank" id='med_tag'>
                        Medical Health Form </a>

                </div>
            </div>
        </div>
    ) : "";

}
export default Info;