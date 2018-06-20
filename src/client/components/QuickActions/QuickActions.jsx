import 'antd/dist/antd.css';
import '../../styles/_quick_actions.scss';
import React from 'react';
import { Row, Col } from 'antd';
import Title from '../Title/Title';
import QuickAction from './QuickAction';
import Loader from '../Loader/Loader';

class QuickActions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // get list service
    this.props.fetchService();
  }

  render() {
    const { listService } = this.props;
    
    if (typeof listService === 'undefined' || listService.length === 0) return <Loader />;

    return (
      <div className="wrapper-quick-actions container wrapper-padding">
        <Title title="On vous suggère :" />
        <Row type="flex" justify="space-between">
          {listService.map((service, i) => (
            <Col xs={24} sm={24} md={7} lg={7} xl={7} key={i}>
              <QuickAction icon="grapes" {...service} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default QuickActions;
