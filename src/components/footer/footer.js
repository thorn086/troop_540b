import React from "react";
import "./footer.css";
import scoutlogo from "../../img/BSA-Logo_Color_large.jpg";
import threeharbors from "../../img/ThreeHarborsCouncil-insignia.jpeg";

function Footer() {
  return (
    <footer className="ft_page_main">
      <div>
        <img id="scout_counsil_logo" src={threeharbors} alt="council"></img>
        <img id="scout_logo_phrase2" src={scoutlogo} alt="Scout moto"></img>
      </div>

      <div id='footer_text'>
        <h4 id='footer-text-title'>Links</h4>

        <ul id="foot_link">
          <li>
            <a
              id="foot_link1"
              target="blank"
              href="https://scoutbook.scouting.org/?_gl=1*ja4vgd*_ga*NDI4MTQyMTA1LjE2MjMzNTc5MDE.*_ga_20G0JHESG4*MTYyMzM1NzkwMC4xLjAuMTYyMzM1NzkwMC42MA.."
            >
              Scoutbook
            </a>
          </li>
          <li>
            <a id="foot_link2" target="blank" href="https://www.scouting.org/">
              BSA
            </a>
          </li>
          <li>
            <a id="foot_link3" target="blank" href="https://www.scoutshop.org/">
              BSA Store
            </a>
          </li>
        </ul>
      </div>

      <div className="foot_tag">
          <h5 className="foot_tag_p">Copy Right 2021</h5>
          <h5 className="foot_tag_p"> Web_Master J.R.</h5>
        </div>

    </footer>
  );
}
export default Footer;
