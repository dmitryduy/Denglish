import React from "react";

import {Provider} from "react-redux";

import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import {store} from "./redux";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Sidebar/>
        </Provider>
    )
}

export default App;
