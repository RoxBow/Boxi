import '../../../styles/_form.scss';
import React from 'react';
import { Field } from 'redux-form';
import Input from '../Input';
import InputText from '../../InputText/InputText';
import { Row, Col } from 'antd';
import axios from 'axios';

class FormSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { emailId } = this.props.match.params;
    
    axios
      .get('/user/getEmailSignup', {
        params: {
          emailId
        }
      })
      .then(res => {
        const { email } = res.data;
        this.props.initialize({ email });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { signUp, submitting, email } = this.props;

    return (
      

      <Row className="wrapper-page-sign-up" style={{height:"100%"}}>
        <Col xs={24} sm={24} md={24} lg={10} xl={10} className="wrapper-part-left">
          <img src="../../images/boxi-logo-white.svg" alt="logo Boxi" />
          <div className="wrapper-header">
            <h2>BOXI</h2>
            <img src="../../images/illu-boxi-fleurs.svg" alt="logo Boxi" />
            <p>La conciergerie en boîte</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14} className="wrapper-part-right">
          <h3>Bienvenue sur Boxi</h3>
          <p className="sous-titre">Choisissez votre mot de passe.</p>
          <form onSubmit={e => signUp(e)}>
            <Field name="email" type="email" label="Email" component={InputText} value={email} disabled />
            <Field name="password" type="password" component={InputText} label="Password" />
            <button className="btn-action btn-primary" type="submit" disabled={submitting}>
              Valider
            </button>
          </form>
        </Col>
      </Row>
    );
  }
}

export default FormSignUp;
