import React, { Component } from "react";
import ReactDOM from "react-dom";

import {RegistrationComponent} from "../component/RegistrationComponent/RegistrationComponent";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
<div>
        <Route exac path={"/registration"} component={RegistrationComponent}/>
</div>
    </BrowserRouter>,
    document.getElementById("registration")
);