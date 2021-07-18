import React from "react";

import styled from "styled-components";

const Label = styled.label`
  display: block;
  text-align: left;
  color: #a7b0b7;
  margin-bottom: 10px;
`;

const AuthLabel = ({children, htmlFor}) => {
    return (
        <Label htmlFor={htmlFor}>{children}</Label>
    )
}

export default AuthLabel;