import 'antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Header from '../Header/Header';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Categories from '../Categories/Categories';
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
            <Categories />
            <Footer />
        </div>
    );
  }
}

export default PageCategories;
