import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/DIVINE GLOBAL.gif';
import './header.component.styles.scss';

const Header = () => (
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
    </div>
  </div>
);

export default Header;
