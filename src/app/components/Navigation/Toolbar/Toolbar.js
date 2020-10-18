import React from 'react';
import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>
        <h1 style={{ color: 'white', fontSize: 25 }}>Burger Builder</h1>
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
