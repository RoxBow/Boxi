import React from 'react';
import '../../styles/_title.scss';

class Title extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div>
          <h2 className="composant-title">{this.props.title}</h2>
      </div>
    );
  }
}

export default Title;
