import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, inverted, border, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : null} 
    ${isGoogleSignIn ? 'google-sign-in' : null} 
    ${border ? 'border' : null}
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
