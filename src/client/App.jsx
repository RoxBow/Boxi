import './styles/_reset.scss';
import './styles/_general.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';

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
        </div>
      </Router>
    );
  }
}

export default App;
