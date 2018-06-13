import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRouteContainer';
import UserProfile from '../UserProfile/UserProfile';
import { connect } from 'react-redux';
import FormSignup from '../Form/FormSignupContainer';

const Home = ({ isLoading }) => (
  <main>
    <p>Home</p>
    <FormSignup />
    
    {!isLoading && (
      <Switch>
        <PrivateRoute path="/user/me" exact component={UserProfile} />
      </Switch>
    )}
  </main>
);

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
});

export default withRouter(connect(mapStateToProps)(Home));
