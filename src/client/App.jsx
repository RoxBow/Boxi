import './styles/_reset.scss';
import './styles/_general.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Test from './components/Test/Test';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Test />
        </div>
      </Router>
    );
  }
}

export default App;
