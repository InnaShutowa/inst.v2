import React, { Component } from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route, withRouter} from "react-router-dom";

import RegistrationComponent from "../component/RegistrationComponent/RegistrationComponent";
import MainComponent from "../component/MainComponent/MainComponent";
import HeaderComponent from "../component/HeaderComponent/HeaderComponent";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path={""} component={HeaderComponent}/>
            <Route exact path={"/registration"} component={withRouter(RegistrationComponent)}/>
            <Route exact path={"/main"} component={withRouter(MainComponent)}/>
        </div>

    </BrowserRouter>,
    document.getElementById("root")
);