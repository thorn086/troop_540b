import './Home.css'
import construction from '../../img/construction_img.jpeg';
import React, {useState}  from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/Header/Header';
import Events from '../../components/Events/Events';
import TroopEvents from '../../components/Events/TroopEvents';
import Info from '../../components/Important_Info/Info';

function Home() {
    const [buttonPopup, setButtonPopup] = useState(false);
    
        return (
                <div className="App">
                    <Header />

                    <section id='Main_title'>
                        <img id='const_logo' src={construction} alt="construction workers" />
                        <h1 id='home-title'>Site Under Construction</h1>
                        <h3 className='home-info'> Future Home of Troop 540 </h3>
                        <h2 className='home-info'>**** Parents don't forget to click the "540 Info" button for important troop information! ****</h2>
                        <h6 className='home-info'>Check Back Soon!</h6>
                    </section>
                    <Events />   
                    <TroopEvents />  
                    <Info trigger={buttonPopup} setTrigger2={setButtonPopup}/>
       
                    <Footer />
                </div>
        );
    }


export default Home;