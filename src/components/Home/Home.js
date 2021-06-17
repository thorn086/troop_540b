import './Home.css'
import construction from '../../img/construction_img.jpeg';
import React, {  useState } from 'react';
import Footer from '../footer/footer';
import Header from '../Header/Header';
import Events from '../Events/Events';
import Info from '../Important_Info/Info';

function Home() {
    
    
        const [buttonPopup, setButtonPopup]= useState(false);
        return (
                <div className="App">
                    <Header />
                    <section id='Main_title'>
                        <img id='const_logo' src={construction} alt="construction workers" />
                        <h1 id='home-title'>Site Under Construction</h1>
                        <h2 className='home-info'>**** Future Home of Troop 540 ****</h2>
                        <h6 className='home-info'>Check Back Soon!</h6>
                        <button id ='button_info' className='button_info_one' onClick={()=> setButtonPopup(true)} >Important Info</button>
                    </section>

                    <Events />
                    <Info trigger={buttonPopup} setTrigger={setButtonPopup}/>
                    

                    <Footer />
                </div>
        );
    }


export default Home;