import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'

const Toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <SideDrawerToggle toggleSideDrawer={props.toggleSideDrawer}></SideDrawerToggle>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default Toolbar;