import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './src/client/App';
import thunk from 'redux-thunk';
import rootReducer from './src/client/redux/index';
import axios from 'axios';
import { setAuthentication } from './src/client/redux/User/action';
import { updateCart } from './src/client/redux/Cart/action';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

axios
  .get('/user/checkAuthentication')
  .then(res => {
    const { isAuthenticated } = res.data;
    const { listProduct, totalPrice } = res.data.cart;

    store.dispatch(setAuthentication(isAuthenticated));
    store.dispatch(updateCart(listProduct, totalPrice));
  })
  .catch(err => {
    console.log(err);
  });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
