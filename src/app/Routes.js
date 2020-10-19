import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import lazyLoad from './utils/lazyLoad';

const BurgerBuilder = lazy(() =>
  import('./containers/BurgerBuilder/BurgerBuilder')
);
const Checkout = lazy(() => import('./containers/Checkout/Checkout'));
const Orders = lazy(() => import('./containers/Orders/Orders'));

const routes = () => [
  { path: '/', component: lazyLoad(BurgerBuilder), options: { exact: true } },
  {
    path: '/checkout',
    component: lazyLoad(Checkout),
    options: {},
  },
  {
    path: '/orders',
    component: lazyLoad(Orders),
    options: {},
  },
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

export default Routes;
