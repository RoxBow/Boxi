import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_categories.scss';
import React from 'react';
import { Row, Col, Button } from 'antd';
import Category from './Category';
import axios from 'axios';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCategory: []
    };
  }

  componentDidMount() {
    const { typeService } = this.props.match.params;
    const _this = this;

    axios
      .get('/service/getListCategory', {
        params: {
          typeService
        }
      })
      .then(res => {
        const { listCategory } = res.data;

        _this.setState({
          listCategory
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { listCategory } = this.state;
    const { typeService } = this.props.match.params;

    return (
      <div>
        <h2>Quel type de journaux souhaitez-vous recevoir ?</h2>
        <Row gutter={32} type="flex" justify="space-between">
          {listCategory.map((category, i) => (
            <Col xs={24} sm={24} md={12} lg={7} xl={7} key={i}>
              <Category {...category} typeService={typeService} icon="smile-o" />
            </Col>
          ))}
        </Row>
        <Row type="flex" justify="space-between" className="wrapper-buttons-action">
          <Col xs={24} sm={24} md={12} lg={7} xl={7}>
            <Button onClick={() => this.props.history.goBack()}>RETOUR</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Categories;
