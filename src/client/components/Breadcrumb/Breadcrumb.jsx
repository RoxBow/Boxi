import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_breadcrumb.scss';
import React from 'react';

class Breadcrumb extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container wrapper-breadcrumb">
        <h2>Hello Charles,</h2>
        {/* Au clic sur le texte ci-dessous, le panier s'ouvre */}
        <p>Vous voulez recevoir des journaux de la catégorie de <span>Sports</span></p>
      </div>
    );
  }
}

export default Breadcrumb;
