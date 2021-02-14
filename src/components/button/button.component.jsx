import React from 'react';

import './button.styles.scss';

const Button = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default Button;
