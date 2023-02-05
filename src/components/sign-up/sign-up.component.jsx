import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signUpStart } from '../../redux/user/user.actions';
import { selectUserLoading } from '../../redux/user/user.selectors';

import { SignUpContainer } from './sign-up.styles';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
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

    const { signUpStart } = this.props;

    try {
      signUpStart({ displayName, email, password });
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
    const { loading } = this.props;
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
            autoComplete="off"
            value={email}
            onChange={this.handleChange}
            label="Email Address"
            required
          />
          <FormInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            autoComplete="off"
            onChange={this.handleChange}
            label="Password"
            togglePassword={this.togglePassword}
            showPassword={showPassword}
            required
          />
          <FormInput
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            togglePassword={this.togglePassword}
            showPassword={showPassword}
            required
          />
          <Button type="submit" title="Sign up here" loading={loading} border>
            SIGN UP
          </Button>
        </form>
      </SignUpContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
