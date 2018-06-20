import 'antd/dist/antd.css';
import '../../styles/_plan.scss';
import React from 'react';
import { Select } from 'antd';
import InputRadio from '../InputRadio/InputRadio';

const Plan = () => (
  <div className="wrapper-plan">
    <div className="wrapper-day">
      <p>À partir de</p>
      <InputRadio dayOne="Demain" dayTwo="Lundi prochain" />
    </div>
    <div className="wrapper-hours">
      <p>Horaire</p>
      <Select style={{ width: 224 }}>
        <Option value="9:00 - 12:00">9:00 - 12:00</Option>
        <Option value="12:00 - 15:00">12:00 - 15:00</Option>
        <Option value="15:00 - 18:00">15:00 - 18:00</Option>
      </Select>
    </div>
  </div>
);

export default Plan;
