import 'antd/dist/antd.css';
import '../../styles/_cart.scss';
import React from 'react';
import CartConfirmation from './CartConfirmation';

class PageCompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <CartConfirmation />
      </div>
    );
  }
}

export default PageCompany;
