import React from "react";

import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #a7b0b7;
  outline-color: #00adb5;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const AuthInput = ({id, type, value, onInput}) => {
    return (
        <Input id={id} type={type} value={value} onInput={onInput} required/>
    )
}

export default AuthInput;