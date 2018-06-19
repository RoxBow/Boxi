import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import InputText from '../InputText/InputText';
import { Link } from 'react-router-dom';

class PageAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="wrapper-center-add">
            <h3>Bienvenue sur BOXI, David.</h3>
            <p>Vous n’avez plus qu’à inviter les membres de votre équipe à utiliser les services de BOXI.</p>
            <div className="wrapper-input-fields">
                <InputText label="Saisissez une adresse mail"/>
                <button className="btn-add"></button>
            </div>
            <Link to="#">Continuer</Link>
        </div>
    );
  }
}

export default PageAdd;
