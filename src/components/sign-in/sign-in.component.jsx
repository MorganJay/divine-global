import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false
    };
  }

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, showPassword } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email Address"
            placeholder="Email"
            required
          />

          <FormInput
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            placeholder="Password"
            togglePassword={this.togglePassword}
            showPassword={this.state.showPassword}
            required
          />

          <div className="buttons">
            <Button type="submit" border>
              SIGN IN
            </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
