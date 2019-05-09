import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter, Route} from "react-router-dom";

import Reducer from "./reducers/Reducer";
import Main from "./components/Main";
import Header from "./components/Header";
import Registration from "./components/Registration";


const store = createStore(Reducer);

//store.dispatch(AddPhotoAction("kds", "http://localhost:9000/materials/pictt.jpg", 5));

console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path={""} component={Header}/>
                <Route exact path={"/registration"} component={Registration}/>
                <Route exact path={"/main"} component={Main}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);