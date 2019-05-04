import React, { Component } from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route, withRouter} from "react-router-dom";

import RegistrationComponent from "../component/RegistrationComponent/RegistrationComponent";
import MainComponent from "../component/MainComponent/MainComponent";
import HeaderComponent from "../component/HeaderComponent/HeaderComponent";
import Reducer from "../reducers/Reducer";
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import AddPhotoAction from "../actions/AddPhotoAction";


const store = createStore(Reducer);


console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path={""} component={HeaderComponent}/>
                <Route exact path={"/registration"} component={withRouter(RegistrationComponent)}/>
                <Route exact path={"/main"} component={withRouter(MainComponent)}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);