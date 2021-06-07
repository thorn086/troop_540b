import React from 'react';
import bssym from '../../img/BSSYM.png';
import './Header.css';
//import Navbar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

//<Navbar />
function Header() {
    return (
        <header className='header_title'>
           <Sidebar /> 
            <div id='logo_box'>
                <img id='bsa_logo' src={bssym} alt="boy scouts of america symbol" />
                <h2 id='troop_tag'>Troop 540</h2>
            </div>
            
        </header>
    )
}
export default Header;