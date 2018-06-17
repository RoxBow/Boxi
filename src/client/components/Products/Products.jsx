import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_products.scss';
import React from 'react';
import axios from 'axios';
import {Row, Col, Button} from 'antd';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.checkProductInCart = this.checkProductInCart.bind(this);
        this.payService = this.payService.bind(this);
    }

    componentDidMount() {
        const {typeService, categoryService} = this.props.match.params;
        const _this = this;

        axios
            .get('/service/getResultService', {
                params: {
                    typeService,
                    categoryService
                }
            })
            .then(res => {
                const {products} = res.data;

                _this.setState({
                    products
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    checkProductInCart(productId) {
        const {cart} = this.props;

        if (!cart) {
            return;
        }

        for (let i = 0, len = cart.length; i < len; i++) {
            if (cart[i].productId === productId) {
                return true;
            }
        }

        return false;
    }

    payService() {
        axios
            .post('/cart/paymentService')
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        const {addProduct, removeProduct} = this.props;
        const {products} = this.state;
        const _this = this;

        return (
            <div>
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                        {products.map((product, i) => (
                            <Product
                                key={i}
                                {...product}
                                addProduct={addProduct}
                                removeProduct={removeProduct}
                                isInCart={_this.checkProductInCart(product.productId)}
                            />
                        ))}
                    </Col>
                </Row>
                <button onClick={this.payService}>Payer services
                </button>
            </div>
        );
    }
}

export default Products;
