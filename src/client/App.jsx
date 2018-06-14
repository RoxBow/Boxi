import './styles/_reset.scss';
import './styles/_general.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import FormCompanyEmployees from './components/Form/FormCompanyEmployees';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import QuickActions from './components/QuickActions/QuickActions';
import TypeNewspapers from './components/TypeNewspapers/TypeNewspapers';
import Newspapers from './components/Newspapers/Newspapers';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Banner />
          <QuickActions />
          <TypeNewspapers />
          <Newspapers />
          <Cart totalPrice="11,50 €" />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
