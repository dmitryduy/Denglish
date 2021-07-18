import React from "react";

import styled from "styled-components";

const LoginForm = styled.form`
display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const AuthForm = ({onSubmit, children}) => {
    return (
        <LoginForm onSubmit={onSubmit}>
            {children}
        </LoginForm>
    )
}

export default AuthForm;