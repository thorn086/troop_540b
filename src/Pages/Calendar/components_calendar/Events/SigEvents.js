import React from "react";
// import { Link } from "react-router-dom";
import "./Events.css";

function SigEvent() {
  // const linkStyle = {
  //   color: "white",
  //   padding: "6px",
  // };
  return (
    <section id="significant__events">
      <h2>Significant Events</h2>
      <div id="significant-dates">
      <h5 className='dates'> Summer Camp July 22-29th, 2023
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/dir/42.9522944,-87.9788032/camp+phillips+wi/@44.262081,-92.0088925,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x52ac545495f14d87:0x839ff6dc0b1362b8!2m2!1d-91.8262695!2d45.6158536?entry=ttu">
                            Camp Phillips
                        </a></h5>
        {/* <p>No upcoming Significant events at this time.</p> */}
      </div>
    </section>
  );
}
export default SigEvent;
