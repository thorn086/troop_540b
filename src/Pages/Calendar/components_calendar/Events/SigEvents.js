import React from "react";
import './Events.css';





function SigEvent() {
    return (
        <section id='significant__events'>
            <h2>Significant Events</h2>
            <div id="event_dates">
                <div id='significant-dates'>
                {/* <p>No upcoming Significant events at this time.</p> */}
                <h5 className='dates'> Pablo's Eagle Scout Project Saturday September 24th, 2022 9:30 AM
                        <br />
                        <p className="house">Mr. Pucel's House</p></h5>
                </div>
            </div>
        </section>
    );
}
export default SigEvent;