import "./Resources.css";
import NavBar from "../NavBar/NavBar";
import React, { Component } from "react";

class Resources extends Component {
  render() {
    return (
      <div className="App">
        <header id="Res-header">
          <h1>Resources Page </h1>
        </header>
        <nav>
          <NavBar />
        </nav>
        <section id="Res_Info">

          <div id="Res_box">
            <section id='troop_res'>
              <h2 >Resources for Troop 540</h2>
              <h3 id='Res_h3'>2021 Updates</h3>
              <a target="blank" href='https://www.scout.org' >Scouts</a>
              <a target="blank" href='https://www.threeharborsscouting.org' >Three Harbors Council</a>
            </section>
            <section id='bsa_res'>
              <h2 >Scouting Resources</h2>
              <h3 id='Res_h3'>2021 Updates</h3>
              <a target="blank" href='https://www.scout.org' >Scouts</a>
              <a target="blank" href='https://www.scouting.org' >BSA</a>
              <a target="blank" href='https://www.scoutshop.org' >BSA Store</a>
              <a target="blank" href='https://www.boyscouttrail.com/boy-scouts/bsa-merit-badges.asp' >Merit Badges</a>
            </section>
          </div>
        </section>
        <footer className="ft_page_main">
          <p>Copy Right 2021</p>
          <p> Web_Master J.R.</p>
        </footer>
      </div>
    );
  }
}

export default Resources;
