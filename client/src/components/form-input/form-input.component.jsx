import React from "react";

import ShowPasswordButton from "../button/password-button.styles";
import { Label, FormGroup, FormInputContainer } from "./form-input.styles";

const FormInput = ({
  handleChange,
  label,
  togglePassword,
  showPassword,
  ...otherProps
}) => (
  <FormGroup>
    {otherProps.name.toLowerCase().includes("password") && otherProps.value ? (
      <ShowPasswordButton type="button" onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} Password
      </ShowPasswordButton>
    ) : null}

    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <Label shrink={!!otherProps.value.length}>{label}</Label> : null}
  </FormGroup>
);

export default FormInput;
