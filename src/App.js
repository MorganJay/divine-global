import { connect } from 'react-redux';
import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/signIn"
            render={() =>
              this.props.currentUser ? (
                null
              // <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
