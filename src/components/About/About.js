import './About.css'
import NavBar from '../NavBar/NavBar';
import React, {Component} from 'react';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <header id="About-header">
                    <h1>About Page </h1>
                </header>
                <nav>
                    <NavBar />
                </nav>
                <section id='About_Info'>
                    <h2>More About Troop 540</h2>
                    <h3>2021 Updates</h3>
                    <p> THis is all the information I want the world to know.</p>
                    <p>Other exciting things about the troop....</p>
                    <p>The last bit of information I want to share with you....</p>
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