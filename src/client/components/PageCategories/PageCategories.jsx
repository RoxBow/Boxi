import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Header from '../Header/Header';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import { Row, Col } from 'antd';

class PageCategories extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
        <div>
            <Header />
            <Breadcrumb />
            <Products />
            <Footer />
        </div>
    );
  }
}

export default PageCategories;
