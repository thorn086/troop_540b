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
      <h5 className='dates'> **Logan's Eagle Project** April 13th, 2024 11:00- AM
      <br />
      <a id='st_charels' target="blank" href="https://www.google.com/maps/place/Hidden+View+Farm,+L.L.C./@43.2537624,-88.013211,17z/data=!3m1!4b1!4m6!3m5!1s0x8804e4b4ec6b66e3:0xcaa255ba177828e5!8m2!3d43.2537624!4d-88.0106361!16s%2Fg%2F11bx89xkvs?entry=ttu">
       Hidden View Farm
      </a></h5>
      </div>
    </section>
  );
}
export default SigEvent;
