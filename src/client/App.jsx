import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormCompanyEmployees from './components/Form/FormCompanyEmployees/FormCompanyEmployeesContainer';
import FormSignup from './components/Form/FormSignup/FormSignupContainer';
import FormLogin from './components/Form/FormLogin/FormLoginContainer';
import Home from './components/Home/HomeContainer';
import Categories from './components/Categories/Categories';
import Products from './components/Products/ProductsContainer';
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Home />
          <Route path="/activationAccount/:emailId" exact component={FormSignup}/>
          <Route path="/registerEmployees" exact component={FormCompanyEmployees}/>
          <Route path="/login" exact component={FormLogin}/>
          <Route path="/service/:typeService" component={Categories}/>
          <Route path="/service/:typeService/:categoryService" component={Products}/>
        </div>
      </Router>
    );
  }
}

export default App;
