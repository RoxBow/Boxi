import '../../styles/_test.scss';
import React from 'react';

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      hello: 'Hello'
    };
  }

  render() {
    const { hello } = this.state;

    return <p>{hello} Vincent</p>;
  }
}

export default Test;
