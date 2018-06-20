import 'antd/dist/antd.css';
import '../../styles/_categories.scss';
import React from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'antd';
import Category from './Category';
import Title from '../Title/Title';
import { withRouter } from 'react-router';
import Loader from '../Loader/Loader';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCategory: [],
      isLoading: true
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

        if (listCategory) {
          _this.setState({
            listCategory,
            isLoading: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLoad(){
    console.log('bonjour');

    this.setState({
      isLoading: false
    });
  }

  render() {
    const { isLoading, listCategory } = this.state;
    const { typeService } = this.props.match.params;
    
    if (isLoading) return <Loader />;

    return (
      <div className="container wrapper-padding wrapper-composant-categories">
        <Title title="Sélectionnez les journaux que vous souhaitez recevoir :" />
        <Row gutter={96} type="flex" justify="space-between" className="wrapper-categories">
          {listCategory.map((category, i) => (
            <Col key={i} xs={24} sm={24} md={12} lg={8} xl={8}>
              <Category {...category} typeService={typeService} icon="smile-o" />
            </Col>
          ))}
        </Row>
        <Row type="flex" justify="space-between" className="wrapper-buttons-action">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Button
              className="btn-action btn-secondary"
              onClick={() => this.props.history.goBack()}
            >
              RETOUR
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Categories);
