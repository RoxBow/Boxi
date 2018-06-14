import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_newspaper.scss';
import React from 'react';
import { Row, Col, Icon } from 'antd';

class Newspaper extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { } = this.state;

    return (
      <div className="wrapper-newspaper">
        <div className="wrapper-newspaper-body">
            <h3>{this.props.name} - {this.props.price}</h3>
            <div className="wrapper-newspaper-description">
                <p>{this.props.description}</p>
            </div>
        </div>
        <div className="wrapper-newspaper-footer">
            <div className="wrapper-newspaper-add-remove">
                <a href="#"><span class="icon-add-remove"></span>Ajouter</a>
            </div>
            <div className="wrapper-newspaper-see-more">
                <a href="#">Voir plus<span class="icon-see-more"></span></a>
            </div>
        </div>
      </div>
    );
  }
}

export default Newspaper;
