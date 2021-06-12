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
                    <h5 className='dates'> Scouting For Food June 12th, 2021 8:30 <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                  St. Charels Borromeo
                </a></h5>
                <h5 className='dates'> Scouting For Food June 19th, 2021 9:00 <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                  St. Charels Borromeo
                </a></h5>
                        <h5 className='dates'> Troop Meeting June 24th, 2021 6:30 - 8:30 PM <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                  St. Charels Borromeo
                </a></h5>
                        <h5 className='dates'> Troop Meeting July 15th, 2021 6:30 - 8:30 PM <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                  St. Charels Borromeo
                </a></h5>
                <p>***A month from June 10th's meeting, those scouts who partook in the physical training exercises will complete your second round of them to complete the requirement.***</p>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Home;