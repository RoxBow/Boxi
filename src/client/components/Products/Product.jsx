import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_product.scss';
import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, price, isInCart, addProduct, removeProduct } = this.props;

    return (
      <div className="wrapper-product">
        <div className="wrapper-product-body">
          <h3>
            {title} - {price.toFixed(2)}€
          </h3>
          <div className="wrapper-product-description">
            <p>{description}</p>
          </div>
        </div>
        <div className="wrapper-product-footer">
          <div className="wrapper-product-add-remove">
            {isInCart ? (
              <button onClick={() => removeProduct(this.props)}>
                <span className="icon-add-remove" />
                Supprimer du panier
              </button>
            ) : (
              <button onClick={() => addProduct(this.props)}>
                <span className="icon-add-remove" />
                Ajouter au panier
              </button>
            )}
          </div>
          <div className="wrapper-product-see-more">
            <a href="#">
              Voir plus<span className="icon-see-more" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
