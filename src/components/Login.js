import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../user/user-action";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
    if (!this.state.email || !this.state.password) {
      alert("Please, fill in e-mail and password to login");
      return;
    }
    console.log("WHAT IS THIS PROPS DISPATCH", this.props.dispatch);
    this.props.dispatch(
      login(this.state.email, this.state.password, this.props.history)
    );

    this.setState({ email: "", password: "" });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <h1>Enter your email and password to login</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInputs}
            />

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect()(Login);
