import React, { Component } from "react";
import style from "./styles.css";
import Photos from "../Photos/Photos";
import {connect} from "react-redux";
import AddPhotoAction from "../../actions/AddPhotoAction";

const mapStateToProps = state=> ({
    photos: state.photos
});



class MainComponent extends Component {

    render() {
        console.log(this.props.photos);
        return <div>
                    <div className={style.category}>
                        <div className={style.font}><button className={style.button}>Популярное</button></div>
                        <a className={style.font}>|</a>
                        <div className={style.font}><button className={style.button}>Новое</button></div>
                    </div>

                    <div className={style.photo}>
                        <Photos photos = {this.props.photos}/>
                    </div>
                </div>
    }
}

export default connect(mapStateToProps) (MainComponent);