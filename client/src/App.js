import { connect } from 'react-redux';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
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

Sentry.init({
  dsn: 'https://81aaf43527b44db49cd28623929399b8@o578526.ingest.sentry.io/4504639988695040',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Sentry.ErrorBoundary
      fallback={
        <h1>
          An error occurred please hold on as our engineers are checking it 💪
        </h1>
      }
    >
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route
            path="/checkout/*"
            element={
              currentUser ? <CheckoutPage /> : <Navigate to="/signIn" replace />
            }
          />
          <Route
            path="/signIn"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </Fragment>
    </Sentry.ErrorBoundary>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
