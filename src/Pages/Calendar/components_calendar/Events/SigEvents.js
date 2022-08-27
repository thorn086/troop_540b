import React from "react";
import './Events.css';





function SigEvent() {
    return (
        <section id='significant__events'>
            <h2>Significant Events</h2>
            <div id="event_dates">
                <div id='significant-dates'>
                {/* <p>No upcoming Significant events at this time.</p> */}
                <h5 className='dates'> SCB Picnic August 27-28th, 2022 8 PM, pickup at 6:30 AM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/St.+Charles+Borromeo+School/@42.942615,-87.9567306,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ad48ca715:0x4cdeaa0ccbf337!8m2!3d42.9426111!4d-87.9545366">
                            St. Charels Borromeo
                        </a></h5>
                </div>
            </div>
        </section>
    );
}
export default SigEvent;