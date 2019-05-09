import React, { Component } from "react";
import style from "./styles/styles.css";
import RatingButtonsComponent from "../RatingButtons/RatingButtons";
import connect from "react-redux/es/connect/connect";
import {createStore} from "redux";
import Reducer from "../../reducers/Reducer";
import Provider from "react-redux/es/components/Provider";


const store = createStore(Reducer);

console.log(store.getState());

class AboutPhotoComponent extends Component {
    render() {
        return <div>
            <div className={style.name}>{this.props.name}</div>
                <RatingButtonsComponent id={this.props.id} likes={this.props.likes}/>
        </div>
    }
}

export default AboutPhotoComponent;