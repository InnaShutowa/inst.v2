import React, { Component } from "react";
import style from "../styles/main.css";
import {Link} from "react-router-dom";
export class HeaderComponent extends Component {
    render() {
        return <div className={style.inline}>
            <div className={style.blocks}><Link to={"/main"}>На главную</Link></div>
            <a className={style.blocks} href={"http://localhost:9000/categoties"}>Категории</a>
            <div className={style.blocks}>
                <a className={style.links} href={"http://localhost:9000/authorize"}>Войти</a> <br/>
                <Link to={"/registration"}>Регистрация</Link>
            </div>

        </div>;
    }
}
