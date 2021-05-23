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
                    <h1>Site Under Construction</h1>
                    <h2>**** Future Home of Troop 540 ****</h2>
                    <h6>Check Back Soon!</h6>
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