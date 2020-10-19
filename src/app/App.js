import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Routes from './Routes';

function App() {
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

export default App;
