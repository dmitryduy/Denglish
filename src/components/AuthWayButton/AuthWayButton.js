import React from "react";

import styled from "styled-components";
import {Link} from "react-router-dom";

const Button = styled(Link)`
  border-radius: 20px;
  color: #00adb5;
  cursor: pointer;
  transition: .4s;
  border: 2px solid #00adb5;
  padding: 5px 20px;
  &:hover {
    opacity: .7;
  }
`;

const AuthWayButton = ({children, to}) => {
    return (
        <Button to={to}>{children}</Button>
    )
}

export default AuthWayButton;
