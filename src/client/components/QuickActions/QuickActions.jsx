import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_quick_actions.scss';
import React from 'react';
import { Row, Col } from 'antd';
import Title from '../Title/Title';
import QuickAction from './QuickAction';

class QuickActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // get list service
    this.props.fetchService();
  }

  render() {
    const { listService } = this.props;
    console.log(listService);

    return (
      <div className="wrapper-quick-actions container">
        <Title title="On vous suggère :" />
        <Row type="flex" justify="space-between">
          {listService && listService.map((service, i) => (
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
