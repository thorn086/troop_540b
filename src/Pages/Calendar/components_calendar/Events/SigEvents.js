import React from "react";
// import { Link } from "react-router-dom";
import "./Events.css";

function SigEvent() {
  return (
    <section id="significant__events">
      <h2>Significant Events</h2>
      <div id="significant-dates">
                        <h5 className='dates'> Open Historic Milwaukee September 23-24th.
                        <br />
                        <a id='st_charels' target="blank" href="https://historicmilwaukee.org/doors-open/buildings/">
                            Historic Milwaukee
                        </a></h5>
                        <br />
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
      {/* <p>No Significant Events at this time.</p> */}
      </div>
    </section>
  );
}
export default SigEvent;
