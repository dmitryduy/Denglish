import React, {useRef, useState} from "react";

import styled from "styled-components";
import AuthForm from "../AuthForm/AuthForm";
import AuthLabel from "../AuthForm/AuthLabel/AuthLabel";
import AuthInput from "../AuthForm/AuthInput/AuthInput";
import AuthButton from "../AuthForm/AuthButton/AuthButton";
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import SwitchWayAuth from "../SwitchWayAuth/SwitchWayAuth";
import firebase from "firebase";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const FailedLogin = styled.div`
  background-color: rgba(226, 34, 46, .25);
  text-align: left;
  padding: 10px;
  margin: 0 0 20px;
  border-radius: 5px;
  display: none;
  color: #e2222e
`;

const RegisterPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const errorLabelRef = useRef();
    const auth = useSelector(({auth}) => auth.auth);

    if (auth) history.push('/');

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updatePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const register = (e) => {
        e.preventDefault();
        if (password !== passwordRepeat) {
            errorLabelRef.current.textContent = 'Пароли не совпадают';
            errorLabelRef.current.style.display = 'block';
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    errorLabelRef.current.textContent = 'Данный email уже существует';
                    errorLabelRef.current.style.display = 'block';
                }
            });
    }

    return (
        <AuthTemplate head='Регистрация'>
            <FailedLogin ref={errorLabelRef}/>
            <AuthForm onSubmit={register}>
                <AuthLabel htmlFor='email'>Твой email</AuthLabel>
                <AuthInput id='email' type='email' value={email} onInput={updateEmail} required/>
                <AuthLabel htmlFor='password'>Твой пароль</AuthLabel>
                <AuthInput id='password' type='password' value={password} onInput={updatePassword} required/>
                <AuthLabel htmlFor='password'>Подтвердить пароль</AuthLabel>
                <AuthInput id='password' type='password' value={passwordRepeat} onInput={updatePasswordRepeat} required/>
                <AuthButton type='submit'>Регистрация</AuthButton>
            </AuthForm>
            <SwitchWayAuth text='У тебя уже есть аккаунт?' buttonText='Войти' to='/login'/>
        </AuthTemplate>
    )
}

export default RegisterPage;