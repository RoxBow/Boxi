import './styles/_reset.scss';
import './styles/_general.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import FormCompanyEmployees from './components/Form/FormCompanyEmployees';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <FormCompanyEmployees />
        </div>
      </Router>
    );
  }
}

export default App;
