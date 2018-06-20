import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const PageConfirmation = () => (
  <div className="wrapper-page-confirmation">
    <h3>Très bien, David.</h3>
    <p>Les membres ajoutés recevront un mail d’invitation pour se connecter.</p>
    <Link to="/home">Continuer</Link>
  </div>
);

export default PageConfirmation;
