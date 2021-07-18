import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import "./index.css";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import firebase from "firebase";
import {setAuth} from "./reducers/authReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user.email) {
                dispatch(setAuth(user.email))
            }
        })
    }, []);
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/registration' component={RegisterPage}/>
                <Route path='/' exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
