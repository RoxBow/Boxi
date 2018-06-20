import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import FormCompanyEmployees from '../Form/FormCompanyEmployees/FormCompanyEmployeesContainer';
import { connect } from 'react-redux';

const PageAdd = ({ company }) => (
  <div className="wrapper-center-add">
    <h3>Bienvenue sur BOXI, {company.director}.</h3>
    <p>
      Vous n’avez plus qu’à inviter les membres de votre équipe à utiliser les services de BOXI.
    </p>
    <FormCompanyEmployees />
  </div>
);

const mapStateToProps = state => ({
  company: state.company.info
});

export default connect(mapStateToProps)(PageAdd);
