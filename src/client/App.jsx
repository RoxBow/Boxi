import './styles/_reset.scss';
import './styles/_general.scss';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FormSignup from './components/Form/FormSignup/FormSignupContainer';
import FormLogin from './components/Form/FormLogin/FormLoginContainer';
import Home from './components/Home/Home';
import Popin from './components/Popin/PopinContainer';
import PageCategories from './components/PageCategories/PageCategories';
import PageRecap from './components/PageRecap/PageRecap';
import PageProducts from './components/PageProducts/PageProducts';
import PageCompany from './components/PageCompany/PageCompanyContainer';

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={PageCompany} />
          <Route path="/home" exact component={Home} />
          <Route path="/cart/recap" exact component={PageRecap} />
          <Route path="/activationAccount/:emailId" exact component={FormSignup} />
          <Route path="/login" exact component={FormLogin} />
          <Route path="/service/:typeService/:categoryService" exact component={PageProducts} />
          <Route path="/service/:typeService" exact component={PageCategories} />
          <Popin />
        </div>
      </Router>
    );
  }
}

export default App;
