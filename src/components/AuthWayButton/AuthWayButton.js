import React from "react";

import styled from "styled-components";

const Button = styled.a`
  border-radius: 20px;
  color: #00adb5;
  cursor: pointer;
  transition: .4s;
  border: 2px solid #00adb5;
  padding: 5px 20px;
  &:hover {
    opacity: .7;
  }
  @media (max-width: 600px) {
    padding: 5px 10px;
    border-radius: 10px;
  }
`;

const AuthWayButton = ({children, to}) => {
    return <Button href={to}>{children}</Button>;
}

export default AuthWayButton;
