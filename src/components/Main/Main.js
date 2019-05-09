import React, { Component } from "react";
import {connect} from "react-redux";

import Photos from "../Photos/Photos";
import ChangeRatingAction from "../../actions/ChangeRatingAction";

import style from "./styles/styles.css";


const mapStateToProps = function(state){
    return {
        state
    };
};



class MainComponent extends Component {
    render() {
        console.log(this.props.state);
        console.log("помогите");
        return <div>
                    <div className={style.category}>
                        <div className={style.font}><button className={style.button}>Популярное</button></div>
                        <a className={style.font}>|</a>
                        <div className={style.font}><button className={style.button}>Новое</button></div>
                    </div>

                    <div className={style.photo}>
                        <Photos photos = {this.props.state}/>
                    </div>
                </div>
    }
}


export default connect(mapStateToProps) (MainComponent);