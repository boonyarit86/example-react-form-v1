import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <FormInputs>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <FormInput
        id={props.name}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <p>{props.error}</p>}
    </FormInputs>
  );
};

export default Input;

const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;

  &::placeholder {
    color: #595959;
    font-size: 12px;
  }
`;
const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;
