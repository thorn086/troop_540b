import './Home.css'
import construction from '../../img/construction_img.jpeg';
import NavBar from '../NavBar/NavBar';
import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img id='const_logo' src={construction} alt="construction workers" />
                </header>
                <nav>
                    <NavBar />
                </nav>
                <section id='Main_title'>
                    <h1>Site Under Construction</h1>
                    <h2>**** Future Home of Troop 540 ****</h2>
                    <h6>Check Back Soon!</h6>
                </section>
                <section id='events'>
                    <h2> Up Coming Events</h2>
                    <div id="event_dates">
                        <h5 className='dates'> May 27th, 2021 6:30 - 8:30 PM</h5>
                        <h5 className='dates'> June 10th, 2021 6:30 - 8:30 PM</h5>
                    </div>
                </section>
                <footer className='ft_page_main'>
                    <p>Copy Right 2021</p>
                    <p> Web_Master J.R.</p>
                </footer>
            </div>
        );
    }
}

export default Home;