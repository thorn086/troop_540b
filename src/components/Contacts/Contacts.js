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
          <ul id="j_pucel">
            <li>
              <h3 className="contact_name">Mr. Jeff Pucel</h3>
              <a href="mailto:thorn086@gmail.com">Email </a>
              <p>414-350-0061</p>
            </li>
            <li>
              <h3 className="contact_name">Mr. Jeff Pucel</h3>
              <a href="mailto:thorn086@gmail.com">Email </a>
              <p>414-350-0061</p>
            </li>
            <li>
              <h3 className="contact_name">Mr. Jeff Pucel</h3>
              <a href="mailto:thorn086@gmail.com">Email </a>
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
