import 'antd/dist/antd.css';
import '../../styles/_plan.scss';
import React from 'react';
import { Select } from 'antd';
import InputRadio from '../InputRadio/InputRadio';


class Plan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper-plan">
        <div className="wrapper-day">
            <p>À partir de</p>
            <InputRadio dayOne="Demain" dayTwo="Lundi prochain"/>
        </div>
        <div className="wrapper-hours">
            <p>Horaire</p>
            <Select defaultValue="9:00 - 12:00" style={{ width: 224 }}>
                <Option value="9:00 - 12:00">9:00 - 12:00</Option>
                <Option value="12:00 - 15:00">12:00 - 15:00</Option>
                <Option value="15:00 - 18:00">15:00 - 18:00</Option>
            </Select>
        </div>
      </div>
    );
  }
}

export default Plan;
