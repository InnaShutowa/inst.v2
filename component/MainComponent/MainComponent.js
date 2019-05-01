import React, { Component } from "react";
import style from "./styles.css";
import Photos from "../Photos/Photos";


class MainComponent extends Component {
    render() {
        return <div>
                    <p className={style.font}>Популярное</p>
                    <div className={style.button}>
                        <button className={style.buttonUpDown}>↑ по возрастанию</button>
                        <button className={style.buttonChange}>перемешать</button>
                        <button className={style.buttonUpDown}>↓ по убыванию</button>
                        <br/>
                            {
                                Photos
                            }
                    </div>
                </div>
    }
}

export default MainComponent;