import React, {useState}  from 'react';
import bssym from '../../img/BSSYM.png';
import './Header.css';
import Sidebar from '../Sidebar/Sidebar';
import Info from '../../components/Important_Info/Info';




function Header() {
    const [buttonPopup, setButtonPopup]= useState(false);

    return (
        <header className='header_title'>
           <Sidebar /> 
                <img id='bsa_logo' src={bssym} alt="boy scouts of america symbol" />
                <h2 id='troop_tag'>Troop 540</h2>
                <button id ='button_info'  onClick={()=> setButtonPopup(true)} >540 Info</button>

                <Info trigger={buttonPopup} setTrigger2={setButtonPopup}/>

        </header>
    )
}
export default Header;