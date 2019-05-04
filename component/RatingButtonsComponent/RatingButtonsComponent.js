import React, { Component } from "react";
import style from "./styles.css";
import RatingLikeButtonComponent from "../RatingLikeButtonComponent/RatingLikeButtonComponent";

class RatingButtonsComponent extends Component{
    render(){
        return <div className={style.elms}>
                    <RatingLikeButtonComponent id={this.props.id}/>
                    <h className={style.text}>{this.props.likes}</h>
                    <button className={style.dislike}>-</button>
                </div>
    }
}

export default RatingButtonsComponent;