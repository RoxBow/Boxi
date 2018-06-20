import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PATH } from '../../constants';

const { COMPANY } = PATH;

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: COMPANY, state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
