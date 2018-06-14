import '../../../../node_modules/antd/dist/antd.css';
import '../../styles/_test.scss';
import React from 'react';
import { Row, Col, Button, Icon, Avatar, Modal, DatePicker } from 'antd';
import locale from 'antd/lib/locale-provider/fr_FR';
import 'moment/src/locale/fr';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const confirm = Modal.confirm;

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      hello: 'Hello',
      visible: false
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { hello } = this.state;

    return (
      <main>
        <div>
          <Row>
            <Col className="colElement" xs={24} sm={24} md={12} lg={8} xl={8}>
              <Icon type="right-circle" />
              <Button type="primary" className="btnCustom">Click me !</Button>
              <Button type="primary" onClick={this.showModal}>Open</Button>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <p>Some contents...</p>
              </Modal>
            </Col>
            <Col className="colElement" xs={24} sm={24} md={12} lg={8} xl={8}>
              <Button type="danger" icon="download" size={'large'}>Download</Button>
              <Avatar size={'large'}>BENDO</Avatar>
              <DatePicker locale={locale} />
            </Col>
            <Col className="colElement" xs={24} sm={24} md={12} lg={8} xl={8}>
              <Button type="dashed" loading={true} size={'small'}>Test</Button>
              <Avatar shape="square" size="large" icon="user" style={{background:'#ff0000'}} />
            </Col>
          </Row>
        </div>
      </main>
    );
  }
}

export default Test;
