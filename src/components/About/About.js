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
              accomplishments. Overall, Troop 540 has had ___ scouts reach the
              rank of Eagle. We have been with St. Charles Borromeo for ___
              years. In 2021, we have a total of ___ scouts active in the troop,
              ranging from recently added Webelos to Eagle Scouts. Some
              highlights of 540 over recent years are ____.
            </p>

            <p>
              Other exciting things about the troop.... I like this part and I
              want to see how it looks
            </p>

            <p>The last bit of information I want to share with you....</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
