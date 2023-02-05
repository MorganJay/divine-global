import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.actions';
import { selectUserLoading } from '../../redux/user/user.selectors';

import { SignUpContainer } from './sign-up.styles';

const SignUp = ({ signUpStart, loading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      signUpStart({ displayName, email, password });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
          label="Email Address"
          required
        />
        <FormInput
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          autoComplete="off"
          onChange={handleChange}
          label="Password"
          togglePassword={togglePassword}
          showPassword={showPassword}
          required
        />
        <FormInput
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          togglePassword={togglePassword}
          showPassword={showPassword}
          required
        />
        <Button type="submit" title="Sign up here" loading={loading} border>
          SIGN UP
        </Button>
      </form>
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
