import React, { Component } from "react";
import style from "./styles.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";



class HeaderComponent extends Component {
    render() {
        return <div>
                    <div className={style.inline}>
                        <p className={style.text}>Madgram</p>
                    </div>

                    <div className={style.links}>
                        <div className={style.link}><Link to={"/main"}>На главную</Link></div>
                        <a className={style.link} href={"http://localhost:9000/categoties"}>Категории</a>
                        <div className={style.link}>
                            <a className={style.internalLink} href={"http://localhost:9000/authorize"}>Войти</a> <br/>
                            <div className={style.internalLink}><Link to={"/registration"}>Регистрация</Link></div>
                        </div>
                    </div>

                </div>;
    }
}
export default HeaderComponent;