import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { selectUserLoading } from '../../redux/user/user.selectors';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart, loading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const togglePassword = () => setShowPassword(!showPassword);

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          title="Enter email address"
          value={email}
          handleChange={handleChange}
          label="Email Address"
          required
        />

        <FormInput
          type={showPassword ? 'text' : 'password'}
          name="password"
          title="Enter your password"
          value={password}
          handleChange={handleChange}
          label="Password"
          togglePassword={togglePassword}
          showPassword={showPassword}
          required
        />

        <ButtonsContainer>
          <Button
            type="submit"
            title="Sign in with email"
            loading={loading}
            border
          >
            SIGN IN
          </Button>
          <Button
            type="button"
            title="Sign in with Google account"
            loading={loading}
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
