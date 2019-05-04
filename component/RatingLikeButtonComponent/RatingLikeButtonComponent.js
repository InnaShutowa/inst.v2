import React, { Component } from "react";
import style from "./styles.css";
import {createStore} from "redux";
import Reducer from "../../reducers/Reducer";
import {ChangeRatingConstant} from "../../constants/ActionTypes";
import ChangeRatingAction from "../../actions/ChangeRatingAction";

const store = createStore(Reducer);


function HandlerClick(){
    //store.dispatch(ChangeRatingAction(id, 1));
    console.log("ну и что за");
    ///console.log(id);
}

class RatingLikeButtonComponent extends Component{
    render(){
        return <button onClick={HandlerClick} className={style.like}>+</button>;
    }
}

export default RatingLikeButtonComponent;