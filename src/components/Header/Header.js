import React, { useState, useEffect } from 'react';
import bssym from '../../img/BSSYM.png';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';
import Info from '../../components/Important_Info/Info';




function Header() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);
    return (
        <header className={`header_title ${show && "nav__black"}`}>
            <Sidebar />
            <img id='bsa_logo' src={bssym} alt="boy scouts of america symbol" />
            <h2 id='troop_tag'>Troop 540</h2>
            <button id='button_info' onClick={() => setButtonPopup(true)} >540 Info</button>

            <Info trigger={buttonPopup} setTrigger2={setButtonPopup} />

        </header >
    )
}
export default Header;