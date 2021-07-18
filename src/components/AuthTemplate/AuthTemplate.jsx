import React from "react";

import styled from "styled-components";
import bgImage from "../../images/login-bg.jpg";

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


const AuthInner = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  max-width: 450px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 13px 0 rgba(0, 0, 0, .6);
`;
const Heading = styled.h1`
  font-size: 30px;
  opacity: .8;
  margin: 0 auto 20px;
  line-height: 50px;
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    content: '';
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background-color: #000;
    opacity: .7;
  }
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;


const AuthTemplate = ({head, children}) => {
    return (
        <AuthContainer>
            <AuthInner>
                <Heading>{head}</Heading>
                {children}
            </AuthInner>
        </AuthContainer>
    )
}

export default AuthTemplate;