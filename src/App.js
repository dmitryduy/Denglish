import React, {useState} from "react";

import {Provider} from "react-redux";

import "./index.css";
import {store} from "./redux";
import LoginPage from "./components/Auth/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
    const [login, setLogin] = useState(false);

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/registration' component={RegisterPage}/>
                    <Route path='/' exact>
                        {login ? <HomePage/>: <Redirect to='/login'/>}
                    </Route>
                </Switch>
            </Provider>
        </BrowserRouter>
    )
}

export default App;
