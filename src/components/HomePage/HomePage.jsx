import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const HomePage = () => {
    const history = useHistory();
    const auth = useSelector(({auth}) => auth.auth);
    console.log(auth)
    if (!auth)
        history.push('/login');

    return (
        <>
            <Header/>
            <Sidebar/>
        </>
    )
}

export default HomePage;