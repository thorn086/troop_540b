import "./About.css";
import React, { useState } from "react";
import Footer from '../footer/footer';
import Header from '../Header/Header';
import EagleScout from '../EagleScouts/EagleScout'


function About() {
const [scoutPopup, setScoutPopup] = useState(false);

    return (
      <div className="App">
                <EagleScout trigger={scoutPopup} setTrigger={setScoutPopup} />

        <Header />

        <section id="About_Info">
          <h2 >More About Troop 540</h2>
          <h3 id='about_h3'>2021 Updates</h3>

          <div id="about_para">

            <section id='description'>
              <p id="about_para_1">
                {" "}
              This page explains some parts of the history of the troop. Things
              that show a bit about what 540 does. Along with some of our
              accomplishments. Overall, Troop 540 has had 32 scouts reach the
              rank of Eagle. We have been with St. Charles Borromeo since 1962. In 2021, we have a total of 16 scouts active in the troop,
              ranging from recently added Webelos to Eagle Scouts. Some
              highlights of 540 over recent years are ____.
              </p>
            </section>
            <button id ='button_scout'  onClick={()=> setScoutPopup(true)} >Past Eagle Scouts</button>

            <div id='text-boxs'>

              <div id='leaders'>
                <p>The last bit of information I want to share with you is the names of our past to present scoutmasters:</p>
                <ul id='scout-masters'>
                  <li>1962-63: Art Solie</li>
                  <li>1963-66: Michael Gilgenbach</li>
                  <li>1966-67: Richard Brzezinski</li>
                  <li>1967-71: Matthew Videkoucit</li>
                  <li>1971-81: William Ehlers</li>
                  <li>1981-85: Richard Hankewicc</li>
                  <li>1985-85: John Shields</li>
                  <li>1985-88: James West</li>
                  <li>1988-91: Don Eliley</li>
                  <li>1991-94: Dennis Pajot</li>
                  <li>1994-95: William Ehlers</li>
                  <li>1995-2000: Robert Ehlers</li>
                  <li>2000-08: Donald Schumacker</li>
                  <li>2008-09: Anna Marie Kaminski</li>
                  <li>2009-: Jeffrey Pucel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }


export default About;
