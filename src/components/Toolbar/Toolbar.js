import React from 'react';
import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar-navigation"> 
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">SmartHome-App</div>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Rooms</a></li>
                    <li><a href="/">Setting</a></li>                    
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;