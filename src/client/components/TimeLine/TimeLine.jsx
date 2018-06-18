import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_timeline.scss';
import React from 'react';
import axios from 'axios';
import { Timeline, Button } from 'antd';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';

class TimeLine extends React.Component {
  constructor() {
    super();

    this.state = {
      services: []
    };
  }

  componentDidMount() {
    const _this = this;

    axios
      .get('/user/getService')
      .then(res => {
        if (res.data.services) {
          const { services } = res.data;

          _this.setState({
            services
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { services } = this.state;

    return (
      <div className="wrapper-timeline">
        <Title title="Votre activité" />
        <Timeline>
          {services &&
            services.map(({ title, price }, i) => (
              <Timeline.Item key={i}>
                <p>Vous venez de commander :</p>
                <img src="../../images/icon-roses.png" alt="roses" />
                <div className="wrapper-content">
                  <p className="type-order">{title}</p>
                  <p className="price-order">{price.toFixed(2)}€</p>
                </div>
                <Link to="/">Voir plus</Link>
              </Timeline.Item>
            ))}
          <Button>Voir plus</Button>
        </Timeline>
      </div>
    );
  }
}

export default TimeLine;
