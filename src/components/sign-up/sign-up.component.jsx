import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignUpContainer } from "./sign-up.styles";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
    };
  }

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword, showPassword } =
      this.state;
    return (
      <SignUpContainer>
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email Address"
            required
          />
          <FormInput
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            togglePassword={this.togglePassword}
            showPassword={this.state.showPassword}
            required
          />
          <FormInput
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            togglePassword={this.togglePassword}
            showPassword={this.state.showPassword}
            required
          />
          <Button type="submit" border>
            SIGN UP
          </Button>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
