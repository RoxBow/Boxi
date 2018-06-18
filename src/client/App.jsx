import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import PageCategories from './components/PageCategories/PageCategories';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormCompanyEmployees from './components/Form/FormCompanyEmployees/FormCompanyEmployeesContainer';
import FormSignup from './components/Form/FormSignup/FormSignupContainer';
import FormLogin from './components/Form/FormLogin/FormLoginContainer';
import Home from './components/Home/HomeContainer';
import Products from './components/Products/ProductsContainer';
import Popin from './components/Popin/PopinContainer';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/activationAccount/:emailId" exact component={FormSignup}/>
          <Route path="/registerEmployees" exact component={FormCompanyEmployees}/>
          <Route path="/login" exact component={FormLogin}/>
          <Route path="/service/:typeService/:categoryService" exact component={Products}/>
          <Route path="/service/:typeService" exact component={PageCategories}/>
          <Popin />
        </div>
      </Router>
    );
  }
}

export default App;
