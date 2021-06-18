import React , { useState } from 'react';
import bssym from '../../img/BSSYM.png';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';
import Info from '../Important_Info/Info';



function Header() {
    const [buttonPopup, setButtonPopup]= useState(false);

    return (
        <header className='header_title'>
           <Sidebar /> 
                <img id='bsa_logo' src={bssym} alt="boy scouts of america symbol" />
                <button id ='button_info' className='button_info_one' onClick={()=> setButtonPopup(true)} >540 Info</button>
                <h2 id='troop_tag'>Troop 540</h2>
                <Info trigger={buttonPopup} setTrigger={setButtonPopup}/>

        </header>
    )
}
export default Header;