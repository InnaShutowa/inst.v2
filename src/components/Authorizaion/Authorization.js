import React, {Component} from "react";
import styles from "./styles.css"

class Authorization extends Component {
    render() {
        return <div className={styles.mainForm}>
            <div className={styles.title}>Авторизация</div>
            <div className={styles.margin}></div>
            <form>
                <input className={styles.input} type="text" placeholder="Введите ник" /> <br/>
                <input className={styles.input} type="password" placeholder="Введите пароль" /><br/>
                <input className={styles.button} type="submit" value="finish" />
            </form>
        </div>;
    }
}

export default Authorization;