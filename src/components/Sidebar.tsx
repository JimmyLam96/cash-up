import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'
import { SidebarData } from '../tmp/SidebarData';
import { IconContext } from 'react-icons';
import SidebarButton from '../components/SidebarButton';

function Sidebar() {
    return(
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='sidebar-container'>
            <div className='sidebar-items'>
            {SidebarData.map((item, index) => {
              return (
                <SidebarButton key={index} name={item.title} buttonStyle={"btn--default"}>
                  <Link to={item.path}>
                    {item.icon}
                  </Link>
                </SidebarButton>
              );
            })}
            </div>
          </div>
      </IconContext.Provider>
    );
}

export default Sidebar;