import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_product.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { title, description, price, isInCart, addProduct, removeProduct } = this.props;

      return (
      <div className="wrapper-product">
        <div className="wrapper-product-body">
            <h3>{title} - {price.toFixed(2)}€</h3>
            <div className="wrapper-product-description">
                <p>{description}</p>
            </div>
        </div>
        <div className="wrapper-product-footer">
            <div className="wrapper-product-add-remove">
                {isInCart ? (
                    <button onClick={() => removeProduct(this.props)}>
                        <span className="icon-add-remove"></span>
                        Supprimer du panier
                    </button>
                ) : (
                    <button onClick={() => addProduct(this.props)}>
                        <span className="icon-add-remove"></span>
                        Ajouter au panier
                    </button>
                )}
                <a href="#"><span className="icon-add-remove"></span>Ajouter</a>
            </div>
            <div className="wrapper-product-see-more">
                <a href="#">Voir plus<span className="icon-see-more"></span></a>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;
