import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Routes from './Routes';

import * as actions from './store/actions/index';

import './App.css';

const App = (props) => {
  const { onAutoSignUp } = props;

  useEffect(() => {
    onAutoSignUp();
  }, [onAutoSignUp]);

  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);
