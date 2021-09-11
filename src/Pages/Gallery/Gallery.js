import "./Gallery.css";
import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import Row from "../../components/Row/Row";
import Banner from '../../components/Banner/Banner';
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="Gallery_Info">
          <Banner />
          <h2 className='gallery__title'>Troop 540 Gallery</h2>
          <div id="gallery_para">
            <p id="gallery_para_1">
              Here are some fun things that Troop 540 has done recently.These
              are some things you can experience at the troop.
            </p>
            <Row title='Klondike' />
            <Row title='LaFebur' />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
