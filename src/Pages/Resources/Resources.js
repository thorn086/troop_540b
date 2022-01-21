import "./Resources.css";
import React, { Component } from "react";
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
class Resources extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="Res_Info">
        <h2 id="about_h2" >Resources for Scouts</h2>
          <h3 id='about_h3'>Click Links Below:</h3>
          <div id="Res_box">
            <section id="troop_res">
              <h4 id="Res_h4">Resources for Troop 540</h4>
              <h5 id="Res_h3">2021 Updates</h5>
              <div className="sites">
                <a className='link_btn' target="blank" href="https://scoutbook.scouting.org/?_gl=1*ja4vgd*_ga*NDI4MTQyMTA1LjE2MjMzNTc5MDE.*_ga_20G0JHESG4*MTYyMzM1NzkwMC4xLjAuMTYyMzM1NzkwMC42MA..">
                  Scout Book
                </a>
                <br />
                <a className='link_btn' target="blank" href="https://www.threeharborsscouting.org">
                  Three Harbors Council
                </a>
              </div>
            </section>
            <section id="bsa_res">
              <h4 id="Res_h4">Scouting Resources</h4>
              <h5 id="Res_h3">2021 Updates</h5>
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
