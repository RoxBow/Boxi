import React from 'react';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/Footer';
import Cart from '../Cart/CartContainer';
import { connect } from 'react-redux';

const TemplatePage = ({ children, isCartOpen }) => (
  <div>
    <Header />
    {isCartOpen && <Cart />}
    {children}
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  isCartOpen: state.cart.isOpen
});

export default connect(mapStateToProps)(TemplatePage);
