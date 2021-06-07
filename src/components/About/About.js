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
            <p id="about_para_1">
              {" "}
              This page explains some parts of the history of the troop. Things
              that show a bit about what 540 does. Along with some of our
              accomplishments. Overall, Troop 540 has had 32 scouts reach the
              rank of Eagle. We have been with St. Charles Borromeo since 1962. In 2021, we have a total of ___ scouts active in the troop,
              ranging from recently added Webelos to Eagle Scouts. Some
              highlights of 540 over recent years are ____.
            </p>

            <p>
              Other exciting things about the troop.... I like this part and I
              want to see how it looks
            </p>

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
            <li>2000-08: Donald Scitomacker</li>
            <li>2008-09: Anna Marie Kaminski</li>
            <li>2009-: Jeffrey Pucel</li>
            </ul>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
