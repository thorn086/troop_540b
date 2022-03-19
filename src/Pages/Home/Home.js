import './Home.css'
// import IceFishing from '../../img/ice-fishing-derby-2022.jpg';
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
    // const openInNewTab = (url) => {
    //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    //     if (newWindow) newWindow.opener = null
    // }
    // const onClickUrl = (url) => {
    //     return () => openInNewTab(url)
    // }
    return (
        <div className="App">
            <Header />
            <section id='Main_title'>
                <h2 className='home-title'>Welcome to Troop 540 Main Page</h2>
            </section>
            <br/>
            <br/>
            <br/>
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