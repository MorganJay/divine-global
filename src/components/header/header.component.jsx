import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import Logopng from '../../assets/img/logo.png';
import './header.component.styles.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      {/* <Logo className="logo" title="Home Page" /> */}
      <img src={Logopng} alt="Logo" title="Home Page" className="logo" width="80" height="59"/>
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
