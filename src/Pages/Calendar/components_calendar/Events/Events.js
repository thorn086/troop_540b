import React from "react";
import './Events.css';





function Events(){
    return(
        <section id='events'>
        <h2> Troop Outings</h2>
            <div id='special-dates'>
            <h5 className='dates'> Canoeing at the Urban Ecology Center, October 7th, 10-2 PM, Meet at 9:45
            <br />
            <a id='st_charels' target="blank" href="https://calendar.urbanecologycenter.org/event/take-it-outside-day-canoeing/">
                Urban Ecology Center
            </a></h5>
            <br />
            <h5 className='dates'> Urban Ecology Center Climbing, November 3rd, 4-6 PM
            <br />
            <a id='st_charels' target="blank" href="https://calendar.urbanecologycenter.org/event/on-belay-outdoor-rock-climbing-9/">
                Urban Ecology Center
            </a></h5>
            {/* <h4>**Summer Camp MEDICAL FORMS DUE July 1st!!!**</h4> */}
                {/* <p>No Troop Outings at this time.</p> */}
            </div>
    </section>
    );
}
export default Events;