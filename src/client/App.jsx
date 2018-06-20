import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import PageCategories from './components/PageCategories/PageCategories';
import PageRecap from './components/PageRecap/PageRecap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormCompanyEmployees from './components/Form/FormCompanyEmployees/FormCompanyEmployeesContainer';
import FormSignup from './components/Form/FormSignup/FormSignupContainer';
import FormLogin from './components/Form/FormLogin/FormLoginContainer';
import Home from './components/Home/Home';
import Popin from './components/Popin/PopinContainer';
import PageProducts from './components/PageProducts/PageProducts';


import PageCompany from './components/PageCompany/PageCompany';
import CartConfirmationPage from './components/Cart/CartConfirmationPage';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/cart/recap" exact component={PageRecap}/>
          <Route path="/activationAccount/:emailId" exact component={FormSignup}/>
          <Route path="/registerEmployees" exact component={FormCompanyEmployees}/>
          <Route path="/login" exact component={FormLogin}/>
          <Route path="/service/:typeService/:categoryService" exact component={PageProducts}/>
          <Route path="/service/:typeService" exact component={PageCategories}/>
          <Popin />
        </div>
      </Router>
    );
  }
}

export default App;
