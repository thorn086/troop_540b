import './Home.css'
import construction from '../img/construction_img.jpeg'
import React, {Component} from 'react';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img id='const_logo' src={construction} alt="construction workers" />
                </header>
                <section id='Main_title'>
                    <h1>Site Under Construction</h1>
                    <h2>**** Future Home of Troop 540 ****</h2>
                    <h6>Check Back Soon!</h6>
                </section>
                <footer id='ft_page_main'>
                    <p>Copy Right 2021</p>
                    <p> Web_Master J.R.</p>
                </footer>
            </div>
        );
    }
}

export default Home;