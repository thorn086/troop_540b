import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

function SigEvent() {
  const linkStyle = {
    color: "white",
    padding: "6px",
  };
  return (
    <section id="significant__events">
      <h2>Significant Events</h2>
      <div id="significant-dates">
        <h5 className="dates">
          {" "}
          Mother's Day Flower Sale May 13-14th, 2023
          <br />
          <Link to="/mothersday" style={linkStyle}>
            Mother's Day Sale Info
          </Link>
          <br />
          <a
            id="st_charels"
            target="blank"
            href="https://www.signupgenius.com/go/20f0948acab2fa6ff2-mothers3/64272282#/">
            Sign Up Genius
          </a>
        </h5>
        <br />
        <h5 className="dates">
          {" "}
          Court of Honor May 21st, 2023
          <br />
          <a
            id="st_charels"
            target="blank"
            href="https://www.google.com/maps/place/St.+Charles+Borromeo+School/@42.942615,-87.9567306,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ad48ca715:0x4cdeaa0ccbf337!8m2!3d42.9426111!4d-87.9545366">
            St. Charels Borromeo
          </a>
          <br />
          <a
            id="st_charels"
            target="blank"
            href="https://www.signupgenius.com/go/20f0948acab2fa6ff2-spring2/64272282#/">
            Sign Up Genius
          </a>
        </h5>
        {/* <p>No upcoming Significant events at this time.</p> */}
      </div>
    </section>
  );
}
export default SigEvent;
