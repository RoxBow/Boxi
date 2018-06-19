import 'antd/dist/antd.css';
import '../../styles/_input-text.scss';
import React from 'react';

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper-input-text">
        <input type="text" placeholder={ this.props.label } />
        <span>{ this.props.label }</span>
      </div>
    );
  }
}

export default InputText;
