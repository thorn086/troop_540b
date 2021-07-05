import "./About.css";
import React, { useState } from "react";
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
import EagleScout from '../../components/EagleScouts/EagleScout';
import ScoutLeader from '../../components/scoutleaders/scoutLeader';

function About() {
const [scoutPopup, setScoutPopup] = useState(false);
const [leaderPopup, setLeaderPopup] = useState(false);

    return (
      <div className="App">
                <EagleScout trigger={scoutPopup} setTrigger={setScoutPopup} />
                <ScoutLeader trigger2 = {leaderPopup} setTrigger2={setLeaderPopup} />
        <Header />
        <section id="About_Info">
          <h2 >More About Troop 540</h2>
          <h3 id='about_h3'>2021 Updates</h3>
          <div id="about_para">
            <section id='description'>
              <p id="about_para_1">
                {" "}
                This page explains parts of the troop's history, a bit about
                what 540 does, and some of our accomplishments. Troop 540
                operates out of the Southern Shores District of the Three Harbors Council.
                There have been 32 scouts that reached the rank of Eagle. The
                troop has been with St. Charles Borromeo parish in Milwaukee
                since 1962. In 2021, Troop 540 has 16 total active scouts,
                ranging from recently added Webelos to Eagle Scouts. Troop 540
                meets every second and fourth Thursday from 6:30-8:30 PM to
                discuss scouting topics and advancements. As a troop, we strive
                to have outdoor adventures every month as troop activities.
                Troop 540 takes pride in being an active member of the community
                by participating in Scouting for Food and other service
                projects, along with Eagle projects. Some highlights of 540 over
                recent years are:
              </p>
            </section>
            <button id ='button_scout'  onClick={()=> setScoutPopup(true)} >Past Eagle Scouts</button>
            <button id ='button_leader'  onClick={()=> setLeaderPopup(true)} >Past Scout Masters</button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }


export default About;
