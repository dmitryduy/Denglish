import React from "react";


import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import {Redirect, Route, Switch} from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import HomePage from "../HomePage/HomePage";


const Routes = () => {
    const [user] = useAuthState(firebase.auth());
    return (
        user ?
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Redirect to path='/'/>
            </Switch>
            :
            <Switch>
                <Route path='/login' component={LoginPage}/>
                <Route path='/registration' component={RegisterPage}/>
                <Redirect to='/login'/>
            </Switch>
    )
}

export default Routes;