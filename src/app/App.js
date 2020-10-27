import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Routes from './Routes';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignUp();
  }
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);
