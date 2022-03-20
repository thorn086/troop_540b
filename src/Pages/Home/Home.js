import './Home.css'
import Troop from '../../img/group_klondike_2022.JPG';
import React, { useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
import Events from '../../components/Events/Events';
import TroopMeet from '../../components/Events/TroopEvents';
import Info from '../../components/Important_Info/Info';
import SigEvent from '../../components/Events/SigEvents';
import PLC from '../../components/Events/PLC';

function Home() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className="App">
            <Header />
            <section id='Main_title'>
                <img className='Troop_Photo' src={Troop} alt="Group of Troop 540 Scouts" />
                <h2 className='home-title'>Welcome to Troop 540 Main Page</h2>
            </section>
            <br />
            <br />
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