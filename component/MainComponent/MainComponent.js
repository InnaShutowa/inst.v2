import React, { Component } from "react";
import style from "./styles.css";
import Photos from "../Photos/Photos";
import {connect} from "react-redux";

const mapStateToProps = function(state){
    return {
        photos: state.photos,
        photosById: state.photosById
    }
};

class MainComponent extends Component {
    render() {
        return <div>
                    <div className={style.category}>
                        <div className={style.font}><button className={style.button}>Популярное</button></div>
                        <a className={style.font}>|</a>
                        <div className={style.font}><button className={style.button}>Новое</button></div>
                    </div>

                    <div className={style.photo}>
                        <Photos photos = {this.props.photosById}/>
                    </div>
                </div>
    }
}

export default  connect(mapStateToProps) (MainComponent);