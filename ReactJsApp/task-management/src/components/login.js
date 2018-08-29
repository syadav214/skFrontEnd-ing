import React from 'react';
import {
  FormGroup,
  Form,
  Col,
  ControlLabel,
  Checkbox,
  Button,
  FormControl
} from 'react-bootstrap';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    let formStyle = {
      width: '50%'
    };

    return (
      <div>
        <Form horizontal style={formStyle}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Login;
