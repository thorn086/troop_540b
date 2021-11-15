import React from "react";
import './Events.css';





function SigEvent() {
    return (
        <section id='significant__events'>
            <h2> Up Coming Significant Events</h2>
            <div id="event_dates">
                <div id='significant-dates'>
                <h5 className='dates'> Wreath Pickup November 20th, 2021
                        <br />
                        <p>Mr. Pucel's House</p> </h5>
                    <br />
                    <h5 className='dates'> Poinsettia Sale November 20-21st, 2021
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                            St. Charels Borromeo
                        </a><a id='st_charels' target="blank" href="https://www.signupgenius.com/go/20f0948acab2fa6ff2-poinsettia1">
                            signupgenius
                        </a></h5>
                </div>
            </div>
        </section>
    );
}
export default SigEvent;