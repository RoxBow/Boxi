import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import FormCompanyEmployees from '../Form/FormCompanyEmployees/FormCompanyEmployeesContainer';

const PageAdd = () => (
  <div className="wrapper-center-add">
    <h3>Bienvenue sur BOXI, David.</h3>
    <p>
      Vous n’avez plus qu’à inviter les membres de votre équipe à utiliser les services de BOXI.
    </p>
      <FormCompanyEmployees />
  </div>
);

export default PageAdd;
