import React from 'react';
import { connect } from 'react-redux';
import classes from './Layout.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar isAuth={props.isAuthenticated} />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(layout);
