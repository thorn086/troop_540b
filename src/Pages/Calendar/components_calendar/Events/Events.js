import React from "react";
import './Events.css';





function Events(){
    return(
        <section id='events'>
        <h2> Troop Outings</h2>
            <div id='special-dates'>
            {/* <h4>**Summer Camp MEDICAL FORMS DUE July 1st!!!**</h4> */}
                {/* <p>No Troop Outings at this time.</p> */}
                <h5 className='dates'> Can Drive September 9th, 2023 8-12:00 PM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/St.+Charles+Borromeo+School/@42.942615,-87.9567306,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ad48ca715:0x4cdeaa0ccbf337!8m2!3d42.9426111!4d-87.9545366">
                            St. Charels Borromeo
                        </a>
                        <a id='st_charels' target="blank" href="https://www.signupgenius.com/go/20F0948ACAB2FA6FF2-aluminum1">
                            Sign Up Genius
                        </a></h5>
            </div>
    </section>
    );
}
export default Events;