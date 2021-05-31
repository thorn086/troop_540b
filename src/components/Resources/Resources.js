import "./Resources.css";
import React, { Component } from "react";
import Footer from '../footer/footer';
import Header from '../Header/Header';
class Resources extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="Res_Info">
          <div id="Res_box">
            <section id="troop_res">
              <h2>Resources for Troop 540</h2>
              <h3 id="Res_h3">2021 Updates</h3>
              <div className="sites">
                <a className='link_btn' target="blank" href="https://www.scout.org">
                  Scouts
                </a>
                <br />
                <a className='link_btn' target="blank" href="https://www.threeharborsscouting.org">
                  Three Harbors Council
                </a>
              </div>
            </section>
            <section id="bsa_res">
              <h2>Scouting Resources</h2>
              <h3 id="Res_h3">2021 Updates</h3>
              <div className="sites">
                <a className='link_btn' target="blank" href="https://www.scout.org">
                  Scouts
                </a>
                <br />
                <a className='link_btn' target="blank" href="https://www.scouting.org">
                  BSA
                </a>
                <br />
                <a className='link_btn' target="blank" href="https://www.scoutshop.org">
                  BSA Store
                </a>
                <br />
                <a
                  className='link_btn' target="blank"
                  href="https://www.boyscouttrail.com/boy-scouts/bsa-merit-badges.asp"
                >
                  Merit Badges
                </a>
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Resources;
