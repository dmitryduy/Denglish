import React, {useEffect} from "react";

import {useDispatch} from "react-redux";

import "./index.css";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import firebase from "firebase";
import {setAuth} from "./reducers/authReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setAuth(user.email))
            }
        })
    }, []);
    return (
        <HashRouter>
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/registration' component={RegisterPage}/>
                <Route path='/' exact component={HomePage}/>
            </Switch>
        </HashRouter>
    )
}

export default App;
