import React from 'react';

import Spinner from '../loader/spinner.component';

import { ButtonContainer } from './button.styles';

const Button = ({ loading, children, ...props }) => (
  <ButtonContainer disabled={loading} {...props}>
    {loading ? <Spinner /> : children}
  </ButtonContainer>
);

export default Button;
