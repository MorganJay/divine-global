import React from 'react';
import ShowPasswordButton from '../button/password-button.styles';

import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  label,
  togglePassword,
  showPassword,
  ...otherProps
}) => (
  <div className="group">
    {otherProps.name.toLowerCase().includes('password') && otherProps.value ? (
      <ShowPasswordButton type="button" onClick={togglePassword}>
        {showPassword ? 'Hide' : 'Show'} Password
      </ShowPasswordButton>
    ) : null}

    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
