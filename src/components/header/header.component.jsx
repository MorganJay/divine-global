import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/img/DIVINEGLOBAL-removebg-preview.png';
import './header.component.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img
        src={Logo}
        alt="Logo"
        title="Home Page"
        className="logo"
        width="100"
      />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
