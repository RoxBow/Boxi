import React from 'react';
import { Link } from 'react-router-dom';

class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // get list service
    this.props.fetchService();
  }

  render() {
    const { listService } = this.props;

    return (
      <div style={{ border: '3px solid blue' }}>
        <h2>List service</h2>
        {listService && (
          <ul>
            {listService.map(({ name: nameService, path: pathToService }, i) => (
              <li key={i}>
                <Link to={`/service/${pathToService}`}>{nameService}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Services;
