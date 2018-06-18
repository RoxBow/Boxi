import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_budget.scss';
import React from 'react';
import { Progress, Button } from 'antd';
import { Link } from 'react-router-dom'
import Title from '../Title/Title';

class Budget extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-budget">
        <Title title="Votre budget" />
        <div className="wrapper-progress-circle">
            <Progress type="circle" percent={75} width={290} showInfo={false} />
            <p className="progress-circle-text">75% <span>de votre budget</span></p>
            <p className="progress-circle-info">Vous avez utilisé la quasi totalité de votre budget.</p>
        </div>
        <p className="text-budget-info">Le montant de vos commandes s’élévent à 30€.<br />
        Ce montant sera prélevé directement sur votre salaire le 1er juillet 2018.</p>
        <Button><Link to="/see-more">Voir plus</Link></Button>
      </div>
    );
  }
}

export default Budget;
