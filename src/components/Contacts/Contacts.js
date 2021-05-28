import "./contacts.css";
import NavBar from "../NavBar/NavBar";
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header id="Contacts-header">
          <h1>Contacts Page </h1>
        </header>
        <nav>
          <NavBar />
        </nav>
        <section id="Contacts_Info">
          <h2>Roles within Troop 540</h2>
          <ul className="j_pucel">
            <li>
              <h3 className="contact_name">Mr. Jeff Pucel</h3>
              <h4>"Scoutmaster" </h4>
              <a href="mailto:puceljj@ameritech.net">Jeff's Email </a>
              <p>414-303-7382</p>
            </li>
            <li>
              <h3 className="contact_name">Mrs. Amanda Lewandowski</h3>
              <h4>"Rank Advancement Chair/Fundraiser" </h4>
              <a href="mailto:all09@hotmail.com">Amanda's Email </a>
              <p>414-617-3505</p>
            </li> 
            <li>
              <h3 className="contact_name">Mr. Greg Bach</h3>
              <h4>"Committee Chair" </h4>
              <a href="mailto:gregjandmaryj@icloud.com">Greg's Email </a>
              <p>414-915-1524</p>
            </li> 
            <li>
              <h3 className="contact_name">Mr. Jason Wallace</h3>
              <h4>"Assistant Scoutmaster" </h4>
              <a href="mailto:plumber7576@sbcglobal.net">Jason's Email </a>
              <p>414-659-9735</p>
            </li> 
            <li>
              <h3 className="contact_name">Mr. Jacob Bach</h3>
              <h4>"Outing Coordinator" </h4>
              <a href="mailto:jacobdbach1@gmail.com">Jacob's Email </a>
              <p>414-550-7031</p>
            </li> 
            <li>
              <h3 className="contact_name">Mrs. Rosa Barillas</h3>
              <h4>"Treasurer" </h4>
              <a href="mailto:barillasrosa@hotmail.com">Rosa's Email </a>
              <p>414-840-3458</p>
            </li> 
            <li>
              <h3 className="contact_name">Darren Rose</h3>
              <h4>"Committe Member" </h4>
              <a href="mailto:thorn086@gamil.com">Darren's Email </a>
              <p>414-350-0061</p>
            </li> 
          </ul>

        </section>
        <footer className="ft_page_main">
          <p>Copy Right 2021</p>
          <p> Web_Master J.R.</p>
        </footer>
      </div>
    );
  }
}

export default Home;
