import React, { Component } from "react";
import style from "./styles.css";
import RatingButtonsComponent from "../RatingButtonsComponent/RatingButtonsComponent";


class AboutPhotoComponent extends Component {
    render() {
        return <div>
            <div className={style.name}>{this.props.name}</div>

           <RatingButtonsComponent id={this.props.id} likes={this.props.likes}/>

        </div>
    }
}

export default AboutPhotoComponent;