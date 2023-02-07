import React from 'react';

import Spinner from '../loader/spinner.component';

import { ButtonContainer } from './button.styles';

const Button = ({ loading, children, type = 'button', ...props }) => (
  <ButtonContainer type={type} disabled={loading} {...props}>
    {loading ? <Spinner /> : children}
  </ButtonContainer>
);

export default Button;
