import 'antd/dist/antd.css';
import '../../styles/_cart.scss';
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import CartConfirmation from './CartConfirmation';
import Footer from '../Footer/Footer';

class PageCompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <CartConfirmation />
        <Footer />
      </div>
    );
  }
}

export default PageCompany;
