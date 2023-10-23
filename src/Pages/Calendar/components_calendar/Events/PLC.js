import React from "react";
import './Events.css';





function PLC() {
    return (
        <section id='plc__events'>
            <h2> PLC Meetings</h2>
            <div id="plc_dates">
                <div id='troop-dates'>
                    <h5 className='dates'> PLC December 11th, 2022 6:00 - 6:30 PM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/St.+Charles+Borromeo+School/@42.942615,-87.9567306,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ad48ca715:0x4cdeaa0ccbf337!8m2!3d42.9426111!4d-87.9545366">
                            St. Charels Borromeo
                        </a></h5>
                        {/* <h5 className='dates'> PLC October 9th, 2022 6:00 - 6:30 PM
                        <br />
                        <p className="house">Mr. Pucel's House</p></h5> */}

                </div>
            </div>
        </section>
    );
}
export default PLC;