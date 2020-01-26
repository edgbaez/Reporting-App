import React from 'react';
import './style.css';
import DrawToggleButton from './SideDrawer/DrawerToggleButton';

const Toolbar = (props) =>{
    return(
<header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar_toggle_button"><DrawToggleButton click={props.drawerClickHandler}/></div>
        <div className="toolbar__logo"><a href="/">LOGO</a></div>
        <div className = "spacer"/>
        <div className="toolbar_navigation-items">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/report">Reporting</a></li>
            <li><a href="/contact">About Us</a></li>
        </ul>
        </div>
    </nav>
</header>);
}

export default Toolbar;