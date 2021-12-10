import "./contacts.css";
import React, { Component } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import { MdEmail,MdPhoneInTalk } from "react-icons/md";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="Contacts_Info">
          <h2>Roles within Troop 540</h2>
          <ul className="j_pucel">
            <li>
              <h3 className="contact_name">Mr. Jeff Pucel</h3>
              <h4>"Scoutmaster" </h4>
              <div className="email_group">
                <MdEmail className="email_icon" size={25} />
                <a className="email" href="mailto:puceljj@ameritech.net">
                  Email
                </a>
              </div>
              <a className="phone"
                href="tel:4143037382"
                onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
              >
                <div className="email_group">
                <MdPhoneInTalk className="email_icon" size={25} />
                <p className="call-button">Call</p>
                </div>
              </a>
            </li>
            <li>
              <h3 className="contact_name">Mrs. Amanda Lewandowski</h3>
              <h4>"Rank Advancement Chair" </h4>
              <h4>"Fundraiser"</h4>
              <div className="email_group">
              <MdEmail className="email_icon" size={25} />
              <a className="email" href="mailto:all09@hotmail.com">
                Email
              </a>
              </div>
            </li>
            <li>
              <h3 className="contact_name">Mr. Greg Bach</h3>
              <h4>"Committee Chair" </h4>
              <div className="email_group">
              <MdEmail className="email_icon" size={25} />
              <a className="email" href="mailto:gregjandmaryj@icloud.com">
                Email{" "}
              </a>
              </div>
            </li>
            <li>
              <h3 className="contact_name">Mr. Jason Wallace</h3>
              <h4>"Assistant Scoutmaster" </h4>
              <div className="email_group">
              <MdEmail className="email_icon" size={25} />
              <a className="email" href="mailto:plumber7576@sbcglobal.net">
                Email{" "}
              </a>
              </div>
            </li>
            <li>
              <h3 className="contact_name">Mr. Jacob Bach</h3>
              <h4>"Outing Coordinator" </h4>
              <div className="email_group">
              <MdEmail className="email_icon" size={25} />
              <a className="email" href="mailto:jacobdbach1@gmail.com">
                Email{" "}
              </a>
              </div>
            </li>
            <li>
              <h3 className="contact_name">Mrs. Rosa Barillas</h3>
              <h4>"Treasurer" </h4>
              <div className="email_group">
              <MdEmail className="email_icon" size={25} />
              <a className="email" href="mailto:barillasrosa@hotmail.com">
                Email{" "}
              </a>
              </div>
            </li>
            <li>
              <h3 className="contact_name">Darren Rose</h3>
              <h4>"Committe Member" </h4>
              <div className="email_group">
              <MdEmail className="email_icon" size={25} />
              <a className="email" href="mailto:thorn086@gmail.com">
                Email{" "}
              </a>
              </div>
            </li>
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
