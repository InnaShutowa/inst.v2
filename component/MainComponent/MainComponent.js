import React, { Component } from "react";
import style from "./styles.css";
import Photos from "../Photos/Photos";
import {Link} from "react-router-dom";


class MainComponent extends Component {
    render() {
        return <div>
                    <div className={style.category}>
                        <div className={style.font}><button className={style.button}>Популярное</button></div>
                        <a className={style.font}>|</a>
                        <div className={style.font}><button className={style.button}> Новое </button></div>
                    </div>

                    <div>
                        {
                            Photos
                        }
                    </div>
                </div>
    }
}

export default MainComponent;