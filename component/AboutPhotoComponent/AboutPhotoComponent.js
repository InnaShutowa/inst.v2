import React, { Component } from "react";
import style from "./styles.css";


class AboutPhotoComponent extends Component {
    render() {
        return <div>
            <div className={style.name}>{this.props.name}</div>

            <div className={style.elms}>
                <button className={style.like}>+</button>
                <h className={style.text}>{this.props.likes}</h>
                <button className={style.dislike}>-</button>
            </div>

        </div>
    }
}

export default AboutPhotoComponent;