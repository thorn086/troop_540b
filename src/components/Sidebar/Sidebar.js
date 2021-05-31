import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

import './Sidebar.css';


function Sidebar() {
    
    const [itembar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!itembar);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="sidebar">
                <Link to="#" className="sidebar-bars fa-lg">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <nav className={itembar ? 'sidebar-menu active' : 'sidebar-menu'}>
                <ul className='sb-menu-items' onClick={showSidebar}>
            <li className='sb-toggle'>
              <Link to='#' className='sidebar-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
                </nav>
            </div>
            </IconContext.Provider>
        </>
    )
        
}

export default Sidebar;
