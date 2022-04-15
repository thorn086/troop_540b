import React from "react";
import './Events.css';





function PLC() {
    return (
        <section id='plc__events'>
            <h2> PLC Meetings</h2>
            <div id="plc_dates">
                <div id='troop-dates'>
                    <h5 className='dates'> No events at this time.
                        <br />
                        {/* <p className="house">Mr. Pucel's House</p>  */}</h5>
                    <br />
                </div>
            </div>
        </section>
    );
}
export default PLC;