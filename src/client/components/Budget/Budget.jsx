import 'antd/dist/antd.css';
import '../../styles/_budget.scss';
import axios from 'axios';
import React from 'react';
import { Progress, Button } from 'antd';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';
import { PATH } from '../../constants';

const MAX_BUDGET = 50;

class Budget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: 0
    };
  }

  componentDidMount() {
    const _this = this;
    axios
      .get('/user/getBudget')
      .then(res => {
        if(res.data.budget){
          _this.setState({
            budget: res.data.budget
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { budget } = this.state;

    return (
      <div className="wrapper-budget">
        <Title title="Votre budget" />
        <div className="wrapper-progress-circle">
          <Progress
            type="circle"
            percent={(Math.round(budget / MAX_BUDGET * 100))}
            width={290}
            showInfo={false}
          />
          <p className="progress-circle-text">
            {Math.round(budget / MAX_BUDGET * 100)}% <span>de votre budget</span>
          </p>
          <p className="progress-circle-info">
            Vous avez utilisé la quasi totalité de votre budget.
          </p>
        </div>
        <p className="text-budget-info">
          Le montant de vos commandes s’élévent à {budget.toFixed(2)}€.<br />
          Ce montant sera prélevé directement sur votre salaire le 1er juillet 2018.
        </p>
        <Button>
          <Link to={PATH.HOME}>Voir plus</Link>
        </Button>
      </div>
    );
  }
}

export default Budget;
