import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_products.scss';
import React from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'antd';
import Product from './Product';

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
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

    render() {
        const { products } = this.state;

        return (
            <div>
                <Row gutter={32}>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                        {products.map((product, i) => <Product key={i} {...product} />)}
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={24} md={12} lg={24} xl={24}>
                        <Button>RETOUR</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Products;
