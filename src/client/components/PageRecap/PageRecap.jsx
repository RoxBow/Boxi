import 'antd/dist/antd.css';
import '../../styles/_page-categories.scss';
import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import TemplatePage from '../TemplatePage/TemplatePage';

const PageRecap = () => (
  <TemplatePage>
    <Breadcrumb />
    <div>Page recap</div>
  </TemplatePage>
);

export default PageRecap;
