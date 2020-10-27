import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import lazyLoad from './utils/lazyLoad';

const BurgerBuilder = lazy(() =>
  import('./containers/BurgerBuilder/BurgerBuilder')
);
const Checkout = lazy(() => import('./containers/Checkout/Checkout'));
const Orders = lazy(() => import('./containers/Orders/Orders'));
const Auth = lazy(() => import('./containers/Auth/Auth'));
const Logout = lazy(() => import('./containers/Auth/Logout/Logout'));

const routes = () => [
  { path: '/', component: lazyLoad(BurgerBuilder), options: { exact: true } },
  {
    path: '/checkout',
    component: lazyLoad(Checkout),
    options: {}
  },
  {
    path: '/orders',
    component: lazyLoad(Orders),
    options: {}
  },
  {
    path: '/auth',
    component: lazyLoad(Auth),
    options: {}
  },
  {
    path: '/logout',
    component: lazyLoad(Logout),
    options: {}
  }
];

const Routes = () => {
  return (
    <Switch>
      {routes().map((item, index) => (
        <Route
          path={item.path}
          component={item.component}
          key={index}
          {...item.options}
        />
      ))}
      <Redirect from="*" to="/" />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Routes);
