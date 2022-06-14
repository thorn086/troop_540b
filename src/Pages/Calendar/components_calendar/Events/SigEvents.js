import React from "react";
import './Events.css';





function SigEvent() {
    return (
        <section id='significant__events'>
            <h2>Significant Events</h2>
            <div id="event_dates">
                <div id='significant-dates'>
                        <h5 className='dates'> Summer Camp July 23-30th, 2022
                        <br />
                        <a id='st_charels' target="blank" href="https://campphillips.org">
                            Camp Philips
                        </a></h5>
                        <br />
                    <h5 className='dates'> John's Eagle Court Of Honor June 25th, 2022 11:00 - 3:00 PM
                        <br />
                        <a id='st_charels' target="blank" href="http://www.franklinfpc.org">
                        Faith Presbyterian
                        </a></h5>
                </div>
            </div>
        </section>
    );
}
export default SigEvent;