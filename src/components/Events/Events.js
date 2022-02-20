import React from "react";
import './Events.css';





function Events(){
    return(
        <section id='events'>
        <h2> Troop Outings</h2>
        <div id="event_dates">
            <div id='special-dates'>
            <h5 className='dates'> Hiking/Skiing Febuary 26th, 2022
                        <br />
                        <a id='st_charels' target="blank" href="https://www.visitmilwaukee.org/partners/whitnall-park-3060/">
                            Whitnall Park
                        </a></h5>
            </div>
        </div>
    </section>
    );
}
export default Events;