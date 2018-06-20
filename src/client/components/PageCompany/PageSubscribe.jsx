import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import InputText from '../InputText/InputText';
import { Link } from 'react-router-dom';

class PageSubscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <div className="wrapper-center-susbscribe">
            <InputText label="Nom de votre entreprise"/>
            <InputText label="Votre nom"/>
            <InputText label="Votre adresse mail"/>
            <InputText label="Votre mot de passe"/>
            <p className="text-conditions">En cliquant sur « Continuer » vous acceptez nos conditions d’utilisation.</p>
            <Link to="#">Continuer</Link>
        </div>
    );
  }
}

export default PageSubscribe;
