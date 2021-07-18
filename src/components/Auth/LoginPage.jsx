import React, {useRef, useState} from "react";

import styled from "styled-components";
import firebase from "firebase";

import bgImage from "../../images/login-bg.jpg"
import AuthForm from "../AuthForm/AuthForm";
import AuthLabel from "../AuthForm/AuthLabel/AuthLabel";
import AuthInput from "../AuthForm/AuthInput/AuthInput";
import AuthButton from "../AuthForm/AuthButton/AuthButton";
import AuthWayButton from "../AuthWayButton/AuthWayButton";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Login = styled.div`
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
  margin-bottom: 20px;
  line-height: 50px;
  position: relative;

  &::before {
    position: absolute;
    bottom: 0;
    content: '';
    width: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background-color: #000;
    opacity: .7;
  }
`;

const FailedLogin = styled.div`
  background-color: rgba(226, 34, 46, .25);
  text-align: left;
  padding: 10px;
  margin: 0 0 20px;
  border-radius: 5px;
  display: none;
  color: #e2222e
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const errorLabelRef = useRef();

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    errorLabelRef.current.style.display = 'block';
                }
            });
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <LoginContainer>
            <Login>
                <Heading>Войти</Heading>
                <FailedLogin ref={errorLabelRef}>Имя пользователя или пароль указаны неверно</FailedLogin>
                <AuthForm onSubmit={login}>
                    <AuthLabel htmlFor='email'>Твой email</AuthLabel>
                    <AuthInput id='email' type='email' value={email} onInput={updateEmail} required/>
                    <AuthLabel htmlFor='password'>Твой пароль</AuthLabel>
                    <AuthInput id='password' type='password' value={password} onInput={updatePassword} required/>
                    <AuthButton type='submit'>Войти</AuthButton>
                </AuthForm>
                <RegisterContainer>
                    <p>У тебя нет аккаунта?</p>
                    <AuthWayButton to='/registration'>Регистрация</AuthWayButton>
                </RegisterContainer>
            </Login>
        </LoginContainer>
    )
}

export default LoginPage;