import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import useForm from "./hooks/useForm";
import validate from "./hooks/validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <Form action="" onSubmit={handleSubmit}>
        <h1>
          Get Started with us today! Create your account by filling out the
          information below.
        </h1>
        <Input
          name="username"
          type="text"
          placeholder="Enter your username"
          label="Username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          name="email"
          type="emaill"
          placeholder="Enter your email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          name="password2"
          type="password"
          placeholder="Enter your password"
          label="Confirm Password"
          value={values.password2}
          onChange={handleChange}
          error={errors.password2}
        />
        <ButtonFormInput type="submit">Sign up</ButtonFormInput>
        <FormInputLogin>
          Already have an account? Login
          <a href="#">here</a>
        </FormInputLogin>
      </Form>
    </div>
  );
};

export default FormSignup;

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1rem;
    text-align: start;
    width: 80%;
    margin-bottom: 1rem;
    color: #fff;
  }
`;
const ButtonFormInput = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgb(39, 143, 255) 0%,
      rgb(12, 99, 250) 100%
    );
    transition: all 0.4s ease-out;
  }
`;
const FormInputLogin = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;

  a {
    text-decoration: none;
    color: #27cdff;
    font-weight: 600;
    margin-left: 5px;
  }
`;
