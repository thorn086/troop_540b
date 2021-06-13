import "./About.css";
import React, { Component } from "react";
import Footer from '../footer/footer';
import Header from '../Header/Header';

class Home extends Component {
  render() {
    return (
      <div className="App">
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
            <div id='text-boxs'>
              <div id='scouts'>
                <p>Here is the list of all of the scouts who reached Eagle </p>
                <ul id='eagle-scouts'>
                  <li>1969: David E.</li>
                  <li>1969: Richard V.</li>
                  <li>1969: Kenneth W.</li>
                  <li>1970: Mark H.</li>
                  <li>1973: Lane Scr.</li>
                  <li>1973: Lane Sch.</li>
                  <li>1978: Geoffrey G.</li>
                  <li>1980: Robert E.</li>
                  <li>1991: John P.</li>
                  <li>1993: Benedict R.</li>
                  <li>1993: Jason D.</li>
                  <li>1998: Jared G.</li>
                  <li>1998: Jay E.</li>
                  <li>2000: Caleb H.</li>
                  <li>2001: Thomas F.</li>
                  <li>2002: Jessie C.</li>
                  <li>2003: Kevin G.</li>
                  <li>2004: Nghia L.</li>
                  <li>2005: Joshua D.</li>
                  <li>2005: Andrew Ku.</li>
                  <li>2006: Andrew Ko.</li>
                  <li>2008: Jacob B.</li>
                  <li>2012: Mitchell B.</li>
                  <li>2012: Anthony P.</li>
                  <li>2013: Joseph P.</li>
                  <li>2015: Anthony A.</li>
                  <li>2016: John M</li>
                  <li>2017: Evan P.</li>
                  <li>2017: Tyler B.</li>
                  <li>2021: Nathan W.</li>
                  <li>2021: Steven E.</li>
                  <li>2021: Joe M.</li>
                  <li>2021: Owen W.</li>
                  <li>2021: John V.</li>
                </ul>
              </div>
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
}

export default Home;