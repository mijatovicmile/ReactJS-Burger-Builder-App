import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Logo />
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default toolbar;
