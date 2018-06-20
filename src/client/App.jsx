import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormSignup from './components/Form/FormSignup/FormSignupContainer';
import FormLogin from './components/Form/FormLogin/FormLoginContainer';
import Home from './components/Home/Home';
import Popin from './components/Popin/PopinContainer';
import PageCategories from './components/PageCategories/PageCategories';
import PageRecap from './components/PageRecap/PageRecap';
import PageProducts from './components/PageProducts/PageProducts';
import PageCompany from './components/PageCompany/PageCompanyContainer';
import PagePlan from './components/PagePlan/PagePlan';
import PrivateRoute from './components/PrivateRoute/PrivateRouteContainer';
import { PATH } from './constants';

const { HOME, TYPESERVICE, CATEGORYSERVICE, RECAP, LIVRAISON } = PATH;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoading, popinIsOpen } = this.props;

    return (
      <Router>
        <div className={popinIsOpen ? 'lock' : ''}>
          <Route path="/company" exact component={PageCompany} />
          <Route path="/login" exact component={FormLogin} />
          <Route path="/activationAccount/:emailId" exact component={FormSignup} />
          {popinIsOpen && <Popin />}

          {!isLoading && (
            <Switch>
              <PrivateRoute path={HOME} exact component={Home} />
              <PrivateRoute path={TYPESERVICE} exact component={PageCategories} />
              <PrivateRoute path={CATEGORYSERVICE} exact component={PageProducts} />
              <PrivateRoute path={LIVRAISON} exact component={PagePlan} />
              <PrivateRoute path={RECAP} exact component={PageRecap} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  popinIsOpen: state.popin.open
});

export default connect(mapStateToProps)(App);
