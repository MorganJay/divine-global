import { connect } from 'react-redux';
import React, { Fragment, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { Routes, Route, Navigate } from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.scss';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => { 
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signIn"
          element={
            currentUser ? <Navigate to="/" replace /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);