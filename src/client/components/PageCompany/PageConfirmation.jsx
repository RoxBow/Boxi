import 'antd/dist/antd.css';
import '../../styles/_page-company.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { LOGIN } from '../../constants';
import { showPopin } from '../../redux/Popin/action';

const PageConfirmation = ({ company, showPopin }) => (
  <div className="wrapper-page-confirmation">
    <h3>Très bien, {company.director}.</h3>
    <p>Les membres ajoutés recevront un mail d’invitation pour se connecter.</p>
    <Button onClick={() => showPopin(LOGIN)}>Continuer et me connecter</Button>
  </div>
);

const mapStateToProps = state => ({
  company: state.company.info
});

const mapDispatchToProps = dispatch => ({
  showPopin: popinType => dispatch(showPopin(popinType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageConfirmation);
