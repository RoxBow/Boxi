import 'antd/dist/antd.css';
import '../../styles/_breadcrumb.scss';
import React from 'react';
import { withRouter } from 'react-router';

const Breadcrumb = props => {
  const { typeService, categoryService } = props.match.params;
  
  return (
    <div className="container wrapper-breadcrumb wrapper-padding">
      <h2>Hello Charles,</h2>
      <p>
        Vous voulez recevoir des {typeService}
        {categoryService && ' de la catégorie de '}
        {categoryService && <span>{categoryService}</span>}
      </p>
    </div>
  );
};

export default withRouter(Breadcrumb);
