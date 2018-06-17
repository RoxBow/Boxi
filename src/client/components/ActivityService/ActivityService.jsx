import React from 'react';
import axios from 'axios';

class ActivityService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      services: []
    };
  }

  componentDidMount() {
    const _this = this;

    axios
      .get('/user/getService')
      .then(res => {
        const { services } = res.data;

        _this.setState({
          services
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { services } = this.state;

    return (
      <div style={{ borderTop: '2px solid', margin: '20px 0 0 0' }}>
        <h2>My service(s)</h2>
        <ul>
          {services && services.map((service, i) => (
            <li key={i}>
              <p>{service.title}</p>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ActivityService;
