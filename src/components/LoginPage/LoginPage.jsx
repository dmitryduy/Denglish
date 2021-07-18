import React, {useReducer, useRef, useState} from "react";

import styled from "styled-components";
import firebase from "firebase";
import {useHistory} from 'react-router-dom';

import AuthForm from "../AuthForm/AuthForm";
import AuthLabel from "../AuthForm/AuthLabel/AuthLabel";
import AuthInput from "../AuthForm/AuthInput/AuthInput";
import AuthButton from "../AuthForm/AuthButton/AuthButton";
import AuthTemplate from "../AuthTemplate/AuthTemplate";
import SwitchWayAuth from "../SwitchWayAuth/SwitchWayAuth";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../reducers/authReducer";
import AuthCheckBox from "../AuthForm/AuthCheckBox/AuthCheckBox";

const FailedLogin = styled.div`
  background-color: rgba(226, 34, 46, .25);
  text-align: left;
  padding: 10px;
  margin: 0 0 20px;
  border-radius: 5px;
  display: none;
  color: #e2222e
`;



const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [remember, setRemember] = useState(false);
    const errorLabelRef = useRef();
    const dispatch = useDispatch();
    const auth = useSelector(({auth}) => auth.auth);
    if (auth)
        history.push('/');

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(data => {
                dispatch(setAuth(data.user.email));
                history.push('/');
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    errorLabelRef.current.textContent = 'Неверный пароль';
                    errorLabelRef.current.style.display = 'block';
                }
                if (error.code === 'auth/user-not-found') {
                    errorLabelRef.current.textContent = 'Имя пользователя или пароль указаны неверно';
                    errorLabelRef.current.style.display = 'block';
                }
                if (error.code === 'auth/too-many-requests') {
                    errorLabelRef.current.textContent = 'Слишком много запросов. Повторите попытку позже';
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

    const updateRemember = () => {
        setRemember(prev => !prev);
    }
    return (
        <AuthTemplate head='Войти'>
            <FailedLogin ref={errorLabelRef}/>
            <AuthForm onSubmit={login}>
                <AuthLabel htmlFor='email'>Твой email</AuthLabel>
                <AuthInput id='email' type='email' value={email} onInput={updateEmail}/>
                <AuthLabel htmlFor='password'>Твой пароль</AuthLabel>
                <AuthInput id='password' type='password' value={password} onInput={updatePassword}/>
                <AuthCheckBox checked={remember} onInput={updateRemember}/>
                <AuthButton type='submit'>Войти</AuthButton>
            </AuthForm>
            <SwitchWayAuth text='У тебя нет аккаунта?' buttonText='Регистрация' to='/registration'/>
        </AuthTemplate>
    )
}

export default LoginPage;