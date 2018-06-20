import 'antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import TemplatePage from '../TemplatePage/TemplatePage';
import CartConfirmationPage from '../Cart/CartConfirmationPage';

const PageRecap = () => (
  <TemplatePage>
    <Breadcrumb />
    <CartConfirmationPage />
  </TemplatePage>
);

export default PageRecap;
