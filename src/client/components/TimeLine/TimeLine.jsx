import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_timeline.scss';
import React from 'react';
import { Row, Col, Timeline, Button } from 'antd';
import { Link } from 'react-router-dom'
import Title from '../Title/Title';

import QuickAction from '../QuickAction/QuickAction';

class QuickActions extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-timeline">
        <Title title="Votre activité" />
        <Timeline>
            <Timeline.Item>
                <p>Vous venez de commander :</p>
                <img src="../../images/icon-roses.png" alt="roses" />
                <div className="wrapper-content">
                    <p className="type-order">Fleurs</p>
                    <p className="price-order">15.99€</p>
                </div>
                <Link to='/details-commande'>Voir plus</Link>
            </Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            <Button>Voir plus</Button>
        </Timeline>
      </div>
    );
  }
}

export default QuickActions;
