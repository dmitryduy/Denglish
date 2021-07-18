import React from "react";

import styled from "styled-components";

const Button = styled.button`
  background-color: #00adb5;
  padding: 10px 50px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: .4s;
  margin: 0 auto;

  &:hover {
    opacity: .7;
  }
  @media (max-width: 600px) {
    padding: 10px 30px;
    font-size: 16px;
  }
`;

const AuthButton = ({children}) => {
    return (
        <Button type='submit'>{children}</Button>
    )
}

export default AuthButton;