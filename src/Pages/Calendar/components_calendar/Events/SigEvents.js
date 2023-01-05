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
                        </a></h5>
                        <br />
                <h5 className='dates'> Klondike January 21st, 2023
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/Camp+Oh-Da-Ko-Ta/@42.6245431,-88.4358403,11.75z/data=!4m10!1m2!2m1!1scamp+odakoda!3m6!1s0x880586721cd4eec5:0x9ba5ce69d6712d0b!8m2!3d42.6076!4d-88.299794!15sCgxjYW1wIG9kYWtvZGGSAQRjYW1w4AEA!16s%2Fg%2F1263vfny9">
                            Camp Oh-Da-Ko-Ta
                        </a>
                        </h5>
                </div>
        </section>
    );
}
export default SigEvent;