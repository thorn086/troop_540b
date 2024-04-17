import React from "react";
// import { Link } from "react-router-dom";
import "./Events.css";

function SigEvent() {
  return (
    <section id="significant__events">
      <h2>Significant Events</h2>
      <div id="significant-dates">
      {/* <p>No Significant Events at this time.</p> */}
      <h5 className='dates'> Court of Honor May 19th, 2024 5-7:30 PM
     <br />
     <a id='st_charels' target="blank" href="https://www.google.com/maps/place/St.+Charles+Borromeo+School/@42.942615,-87.9567306,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ad48ca715:0x4cdeaa0ccbf337!8m2!3d42.9426111!4d-87.9545366">
      St. Charels Borromeo
     </a></h5>
     <br />
      <h5 className='dates'> **Jaden's Eagle Project** May 4th, 2024 9:00- AM
      <br />
      <a id='st_charels' target="blank" href="https://www.google.com/maps/place/Wehr+Nature+Center/@42.9253151,-88.0385096,17z/data=!3m1!4b1!4m6!3m5!1s0x88050e738ee4886f:0xdb6a39f0d1abc3d!8m2!3d42.9253151!4d-88.0359347!16s%2Fg%2F1td1w04z?entry=ttu">
       Wehr Nature Center
      </a></h5>
      </div>
    </section>
  );
}
export default SigEvent;
