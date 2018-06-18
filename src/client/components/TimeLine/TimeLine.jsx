import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_timeline.scss';
import React from 'react';
import { Row, Col, Timeline, Button } from 'antd';
import { Link } from 'react-router-dom'
import Title from '../Title/Title';

class TimeLine extends React.Component {
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
            <Timeline.Item>
                <p>Le 18 juin à 10h00, vous avez commandé :</p>
                <img src="../../images/icon-burger.png" alt="burger" />
                <div className="wrapper-content">
                    <p className="type-order">Burger</p>
                    <p className="price-order">9.99€</p>
                </div>
                <Link to='/details-commande'>Voir plus</Link>
            </Timeline.Item>
            <Timeline.Item>
                <p>Le 11 juin à 14h00, vous avez déposé :</p>
                <img src="../../images/icon-box-small.png" alt="box" />
                <div className="wrapper-content">
                    <p className="type-order">Colis</p>
                    <p className="price-order">5.99€</p>
                </div>
                <Link to='/details-commande'>Voir plus</Link>
            </Timeline.Item>
            <Button><Link to="/see-more">Voir plus</Link></Button>
        </Timeline>
      </div>
    );
  }
}

export default TimeLine;
