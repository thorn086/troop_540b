import React from "react";
import './Events.css';





function Events(){
    return(
        <section id='events'>
        <h2> Up Coming Troop Outings</h2>
        <div id="event_dates">
            <div id='special-dates'>

            <h5 className='dates'> August 28th, 2021 - 9 PM to August 29th, 2021 - 6:30 AM "Guarding Tent Grounds"<br></br>
                                    <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                    St. Charels Borromeo
                </a></h5>

            </div>
        </div>
    </section>
    );
}
export default Events;