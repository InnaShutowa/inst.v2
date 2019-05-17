import React from "react";
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter, Route} from "react-router-dom";


import Reducer from "../../store/photos/PhotosReducer";
import Header from "../Header";
import Registration from "../Registration";
import Main from "../Main";


const store = createStore(Reducer);


const App = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path={""} component={Header}/>
                <Route exact path={"/registration"} component={Registration}/>
                <Route exact path={"/main"} component={Main}/>
            </div>
        </BrowserRouter>
    </Provider>;
};

export default App;