import 'antd/dist/antd.css';
import '../../styles/_products.scss';
import React from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'antd';
import Product from './Product';
import Title from '../Title/Title';
import Loader from '../Loader/Loader'

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoading: true
    };

    this.checkProductInCart = this.checkProductInCart.bind(this);
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

  checkProductInCart(productId) {
    const { cart } = this.props;

    if (!cart) return;

    for (let i = 0, len = cart.length; i < len; i++) {
      if (cart[i].productId === productId) {
        return true;
      }
    }

    return false;
  }

  render() {
    const { removeProduct, buyProduct } = this.props;
    const { products, isLoading } = this.state;
    const _this = this;

    if (isLoading) return <Loader />;

    return (
      <div className="container wrapper-composant-products">
        <Title title="Sélectionnez les journaux que vous souhaitez recevoir :" />
        <Row gutter={96} type="flex" justify="space-between" className="wrapper-products">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            {products.map((product, i) => (
              <Product
                key={i}
                {...product}
                buyProduct={buyProduct}
                removeProduct={removeProduct}
                isInCart={_this.checkProductInCart(product.productId)}
              />
            ))}
          </Col>
        </Row>
        <Row type="flex" justify="space-between" className="wrapper-buttons-action">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Button className="btn-action btn-secondary">Retour</Button>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Button className="btn-action btn-primary">Valider</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Products;
