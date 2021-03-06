import "./Gallery.css";
import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import Row from "../../components/Row/Row";
import Banner from '../../components/Banner/Banner';

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="Gallery_Info">
          <Banner />
          <h2 className='gallery__title'>Troop 540 Gallery</h2>
          <div id="gallery_para">
            <Row title='Klondike' />
            <Row title='LaFebur' />
            <Row title='BSA' />
            <Row title='Eagle' />
            <Row title='Camporee' />
            <Row title='Pancake' />
            <Row title='Merit Badge' />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
