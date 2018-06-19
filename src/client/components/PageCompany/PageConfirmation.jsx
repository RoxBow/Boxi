import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';

class PageAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="wrapper-page-confirmation">
            <img src="" alt="image confirmation" />
            <h3>Très bien, David.</h3>
            <p>Les membres ajoutés recevront un mail d’invitation pour se connecter.</p>
        </div>
    );
  }
}

export default PageAdd;
