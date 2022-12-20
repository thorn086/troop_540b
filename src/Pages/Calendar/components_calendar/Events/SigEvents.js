import React from "react";
import './Events.css';





function SigEvent() {
    return (
        <section id='significant__events'>
            <h2>Significant Events</h2>
                <div id='significant-dates'>
                {/* <p>No upcoming Significant events at this time.</p> */}
                        <h5 className='dates'> Skiing at the Rock January 6th, 2023 4:15 - 7:00 PM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/The+Rock+Snowpark/@42.9199403,-88.0172681,17z/data=!3m1!4b1!4m5!3m4!1s0x88050dfec918fe0f:0xf644bfab6e32b2c0!8m2!3d42.9199364!4d-88.0150741">
                            The Rock Snowpark
                        </a>
                        <br />
                        <a id='st_charels' target="blank" href="https://shop.rocksnowpark.com/groups">
                            Money form **DUE DEC 22nd** GROUP CODE: 1.6.23
                        </a></h5>
                        <br />
                <h5 className='dates'> Klondike January 21st, 2023
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/Indian+Mound+Scout+Reservation/@43.0719237,-88.4938727,17z/data=!3m1!4b1!4m5!3m4!1s0x8805c9e6f986a059:0xaa690f5a4b5d8a1!8m2!3d43.0719909!4d-88.4915933">
                            Indian Mound
                        </a>
                        </h5>
                </div>
        </section>
    );
}
export default SigEvent;