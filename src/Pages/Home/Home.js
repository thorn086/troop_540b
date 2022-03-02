import './Home.css'
import IceFishing from '../../img/ice-fishing-derby-2022.jpg';
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
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }
    return (
        <div className="App">
            <Header />

            {/* <section id='Main_title'>
                <img id='const_logo' src={IceFishing} alt="Boy scouts ice fishing" />
                <h2 className='home-title'>Saturday, February 26th - 9:00 am - 12:30 pm</h2>
                <h4 className="home-title">
                    Cub Scouts, Scouts BSA and families can enjoy ice fishing at Camp Oh-Da-Ko-Ta on Saturday,
                    February 26, 2022.  Holes will be drilled for each family and fishing poles will be available to Scouts if they need them.
                    There will be plenty of support for Scouts who are new to ice fishing.</h4>
                <button className='main_button' onClick={onClickUrl('https://www.threeharborsscouting.org/event/2829156')} >Register</button>

            </section> */}
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