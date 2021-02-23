import React from 'react';

import './button.styles.scss';

const Button = ({
  children,
  isGoogleSignIn,
  inverted,
  border,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    ${border ? 'border' : ''}
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
