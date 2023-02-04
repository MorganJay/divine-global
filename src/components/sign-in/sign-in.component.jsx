import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
  }

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, showPassword } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email Address"
            required
          />

          <FormInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            togglePassword={this.togglePassword}
            showPassword={this.state.showPassword}
            required
          />

          <ButtonsContainer>
            <Button type="submit" border>
              SIGN IN
            </Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
