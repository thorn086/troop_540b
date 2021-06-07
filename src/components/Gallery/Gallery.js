import "./Gallery.css";
import React, { Component } from "react";
import Footer from '../footer/footer';
import Header from '../Header/Header';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="Gallery_Info">
          <h2 >Troop 540 Gallery</h2>
          <h3 id='gallery_h3'>2021 Gallery</h3>
          <div id="gallery_para">
            <p id="gallery_para_1">
              {" "}
            Here are some fun things that Troop 540 has done recently.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
