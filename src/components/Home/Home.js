import './Home.css'
import construction from '../../img/construction_img.jpeg';
import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../Header/Header';
class Home extends Component {
    render() {
        return (
            <div className="App">
                <Header />       
                <section id='Main_title'>
                    <img id='const_logo' src={construction} alt="construction workers" />
                    <h1 id='home-title'>Site Under Construction</h1>
                    <h2 className='home-info'>**** Future Home of Troop 540 ****</h2>
                    <h6 className='home-info'>Check Back Soon!</h6>
                </section>
                <section id='events'>
                    <h2> Up Coming Events</h2>
                    <div id="event_dates">
                        <h5 className='dates'> May 27th, 2021 6:30 - 8:30 PM</h5>
                        <h5 className='dates'> June 10th, 2021 6:30 - 8:30 PM</h5>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Home;