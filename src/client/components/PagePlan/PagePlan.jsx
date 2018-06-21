import 'antd/dist/antd.css';
import '../../styles/_page-plan.scss';
import { Button } from 'antd';
import { withRouter } from 'react-router';
import React from 'react';
import Title from '../Title/Title';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Plan from './Plan';
import TemplatePage from '../TemplatePage/TemplatePage';

const PagePlan = props => (
  <div className="wrapper-page-plan">
    <TemplatePage>
      <Breadcrumb />
      <div className="container wrapper-padding">
        <p className="text-summary">
          Vous avez séléctionné 2 mensuels et 1 quotidien.<br />
          Vous recevrez ces journaux en fontion de leur publication
        </p>
        <Title title="Quand souhaitez-vous recevoir ceci ?" />
        <Plan />
        <div className="wrapper-btns">
          <Button className="btn-action btn-secondary" onClick={() => props.history.goBack()}>
            Retour
          </Button>
        </div>
      </div>
    </TemplatePage>
  </div>
);

export default withRouter(PagePlan);
