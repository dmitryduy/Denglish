import React from "react";

import styled from "styled-components";

const Label = styled.label`
  display: block;
  text-align: left;
  color: #a7b0b7;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AuthLabel = ({children, htmlFor}) => {
    return (
        <Label htmlFor={htmlFor}>{children}</Label>
    )
}

export default AuthLabel;