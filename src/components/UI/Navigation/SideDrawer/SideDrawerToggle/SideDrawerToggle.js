import React from 'react';
import classes from './SideDrawerToggle.css'

const SideDrawerToggle = (props) => (
    <div onClick={props.toggleSideDrawer} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default SideDrawerToggle;