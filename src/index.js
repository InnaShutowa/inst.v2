import React, { Component } from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {HeaderComponent} from "../component/header.component";
import {RegistrationComponent} from "../component/registration.component";
import {MainComponent} from "../component/main.component";

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