import 'antd/dist/antd.css';
import { Button } from 'antd';
import '../../styles/_page-plan.scss';
import React from 'react';
import Cart from '../Cart/Cart';
import Title from '../Title/Title';
import Header from '../Header/Header';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Plan from './Plan';


class PagePlan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper-page-plan">
        <Header />
        <Breadcrumb />
        <p className="text-summary">
            Vous avez séléctionné 2 mensuels et 1 quotidien.<br />
            Vous recevrez ces journaux en fontion de leur publication
        </p>
        <Title title="Quand souhaitez-vous recevoir ceci ?" />
        <Plan />
        <div className="wrapper-btns">
            <Button className="btn-action btn-secondary">
                Retour
            </Button>
            <Button className="btn-action btn-primary">
                Valider
            </Button>
        </div>
      </div>
    );
  }
}

export default PagePlan;
