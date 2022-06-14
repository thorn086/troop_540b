import './Home.css'
import easterGroup from '../../Data/clean_imgs/easter_2022/easter_group.jpeg';
import React, { useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
import Events from '../Calendar/components_calendar/Events/Events';
import TroopMeet from '../Calendar/components_calendar/Events/TroopEvents';
import Info from '../../components/Important_Info/Info';
import SigEvent from '../Calendar/components_calendar/Events/SigEvents';
import PLC from '../Calendar/components_calendar/Events/PLC';

function Home() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="App">
            <Header />
            <section id='Main_title'>
                <img className='Troop_Photo' src={easterGroup} alt="Group of Troop 540 Scouts" />
                <h2 className='home-title'>Welcome to Troop 540 Main Page</h2>
            </section>
            <br />
            <div id="duble_ZZ">
                <SigEvent />
                <Events />
                <PLC />
                <TroopMeet />
            </div>
            <Info trigger={buttonPopup} setTrigger2={setButtonPopup} />
            <Footer />
        </div >
    );
}


export default Home;