import React, { Component } from "react";
import style from "./styles.css";
import RatingLikeButtonComponent from "../RatingLikeButtonComponent/RatingLikeButtonComponent";

class RatingButtonsComponent extends Component{
    render(){
        return <div className={style.elms}>
                    <RatingLikeButtonComponent id={this.props.id}/>
                    <p className={style.text}>{this.props.likes}</p>
                    <button className={style.dislike}>-</button>
                </div>
    }
}

export default RatingButtonsComponent;