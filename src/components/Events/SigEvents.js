import React from "react";
import './Events.css';





function SigEvent() {
    return (
        <section id='significant__events'>
            <h2>Significant Events</h2>
            <div id="event_dates">
                <div id='significant-dates'>
                        <h5 className='dates'> Court of Honor May 22th, 2022 5:00 - 7:00 PM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                            St. Charels Borromeo
                        </a></h5>
                        <br />
                        <h5 className='dates'> Summer Camp July 23-30th, 2022
                        <br />
                        <a id='st_charels' target="blank" href="https://campphillips.org">
                            Camp Philips
                        </a></h5>
                        <br />
                        <h5 className='dates'> Will's Eagle Project May 21st, 2022 9:00 AM
                        <br />
                        <p className="house">Will's House</p></h5>
                </div>
            </div>
        </section>
    );
}
export default SigEvent;