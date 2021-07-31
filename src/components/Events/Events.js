import React from "react";
import './Events.css';





function Events(){
    return(
        <section id='events'>
        <h2> Up Coming Troop Outings</h2>
        <div id="event_dates">
            <div id='special-dates'>

            <h5 className='dates'> Summer Camp July 24th (departing: 9:00 AM) 
                                    - 31st (returning 3:00 PM), 2021  <br></br>
                                    <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                    St. Charels Borromeo
                </a></h5>
                <br></br>
                
                <h5 className='dates'> Summer Camp Family Day July 30th, 2021  <br></br><a id='camp_phillips' target="blank" href="https://campphillips.org/parents">
                    Camp Phillips
                </a></h5>
                <br></br>

            </div>
        </div>
    </section>
    );
}
export default Events;