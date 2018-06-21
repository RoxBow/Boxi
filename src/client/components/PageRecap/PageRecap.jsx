import 'antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import TemplatePage from '../TemplatePage/TemplatePage';
import CartConfirmation from '../Cart/CartConfirmation';

const PageRecap = () => (
  <TemplatePage>
    <Breadcrumb />
    <CartConfirmation />
  </TemplatePage>
);

export default PageRecap;
