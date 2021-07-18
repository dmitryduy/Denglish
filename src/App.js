import React from "react";

import {HashRouter} from "react-router-dom";
import firebase from "firebase";
import {useAuthState} from "react-firebase-hooks/auth";

import "./index.css";
import Routes from "./components/Routes/Routes";
import Loading from "./components/Loading/Loading";

function App() {
    const [, loading] = useAuthState(firebase.auth());

    if (loading) return <Loading/>

    return (
        <HashRouter>
            <Routes/>
        </HashRouter>
    )
}

export default App;
