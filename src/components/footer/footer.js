import React from 'react';
import './footer.css';
import scoutlogo from '../../img/BSA-Logo_Color_large.jpg';

function Footer(){
    return(
        <footer className="ft_page_main">
        <img id='scout_logo_phrase2' src={scoutlogo} alt='Scout moto'></img>
        <div className ='foot_tag'>
          <p className ='foot_tag_p'>Copy Right 2021</p>
          <p className ='foot_tag_p'> Web_Master J.R.</p>
        </div>
      </footer>
    );
}
export default Footer;