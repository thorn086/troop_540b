import React from "react";
import './footer.css';
import scoutlogo from '../../img/BSA-Logo_Color_large.jpg';

function Footer(){
    return(
        <footer className="ft_page_main">
        <p>Copy Right 2021</p>
        <p> Web_Master J.R.</p>
        <ul>
        <li><a target="blank" href="https://scoutbook.scouting.org/?_gl=1*ja4vgd*_ga*NDI4MTQyMTA1LjE2MjMzNTc5MDE.*_ga_20G0JHESG4*MTYyMzM1NzkwMC4xLjAuMTYyMzM1NzkwMC42MA..">Scoutbook</a></li>
        <li><a target="blank" href="https://www.scouting.org/">BSA</a></li>
        <li><a target="blank" href="https://www.scoutshop.org/">BSA Store</a></li>
        </ul>


        <img id='scout_logo_phrase2' src={scoutlogo} alt='Scout moto'></img>
        <div className ='foot_tag'>
          <p className ='foot_tag_p'>Copy Right 2021</p>
          <p className ='foot_tag_p'> Web_Master J.R.</p>
        </div>
      </footer>
      
    );

}
export default Footer;