import 'antd/dist/antd.css';
import '../../styles/_input-radio.scss';
import React from 'react';

class InputRadio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper-radio">
        <input type="radio" id="radio1" name="radios" value={ this.props.dayOne } defaultChecked />
        <label htmlFor="radio1">{ this.props.dayOne }</label>

        <input type="radio" id="radio2" name="radios" value={ this.props.dayTwo } />
        <label htmlFor="radio2">{ this.props.dayTwo }</label>
      </div>
    );
  }
}

export default InputRadio;
