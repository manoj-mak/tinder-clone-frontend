import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img
              className="Header_logo"
              src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png"
              alt="tinder-logo"
            />
           
           <IconButton>
           <ForumIcon fontSize="large" className="header_icon" />
           </IconButton>
            
        </div>
    )
}

export default Header
