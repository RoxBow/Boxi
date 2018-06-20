import 'antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Products from '../Products/ProductsContainer';
import Title from '../Title/Title';
import { Row, Col, Button } from 'antd';
import Loader from '../Loader/Loader';
import axios from 'axios';
import TemplatePage from '../TemplatePage/TemplatePage';

class PageProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const { typeService, categoryService } = this.props.match.params;
    const _this = this;

    axios
      .get('/service/getResultService', {
        params: {
          typeService,
          categoryService
        }
      })
      .then(res => {
        const { products } = res.data;
        if (products) {
          _this.setState({
            products,
            isLoading: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { isLoading, products } = this.state;

    if (isLoading) return <Loader />;

    return (
      <TemplatePage>
        <Breadcrumb />
        <div className="container wrapper-composant-products wrapper-padding">
          <Title title="Sélectionnez les journaux que vous souhaitez recevoir :" />
          <Products products={products} />
          <Row type="flex" justify="space-between" className="wrapper-buttons-action">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Button
                onClick={() => this.props.history.goBack()}
                className="btn-action btn-secondary"
              >
                Retour
              </Button>
            </Col>
          </Row>
        </div>
      </TemplatePage>
    );
  }
}

export default PageProducts;
