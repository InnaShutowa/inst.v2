import React, {Component} from "react";
import {connect} from "react-redux";

import Photos from "../Photos";

import style from "./styles.css"
import OrderByAction from "../../store/photos/actions/OrderByAction";
import OrderByDescAction from "../../store/photos/actions/OrderByDescAction";


const mapStateToProps = function (state) {
    return {
        state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        orderByDescAction: () => {
            dispatch(OrderByDescAction());
        },
        orderByAction: () => {
            dispatch(OrderByAction());
        }
    }
};
let buff = 0;

class Main extends Component {
    render() {
        if (buff === 0) {
            this.props.orderByDescAction();
            buff = 1;
        }

        return <div>
            <div className={style.category}>
                <div className={style.font}>
                    <button ref={"popular"}
                            onClick={() => {
                                this.props.orderByDescAction();
                                this.refs.popular.setAttribute("class", style.selectedButton);
                                this.refs.news.setAttribute("class", style.button);
                                // ставим активной кнопку "по убыванию"
                                this.refs.buttonOrderByDesc.setAttribute("class", style.selectedFontLink);
                                this.refs.buttonOrderBy.setAttribute("class", style.fontLink);
                                this.refs.buttonOrderByDesc.setAttribute("disabled", "disabled");
                                this.refs.buttonOrderBy.removeAttribute("disabled");

                            }} className={style.selectedButton}>Популярное
                    </button>
                </div>
                <a className={style.font}>|</a>
                <div className={style.font}>
                    <button ref={"news"} onClick={() => {
                        this.refs.news.setAttribute("class", style.selectedButton);
                        this.refs.popular.setAttribute("class", style.button);
                    }
                    } className={style.button}>Новое
                    </button>
                </div>
                <div className={style.links}>
                    <button onClick={() => {
                        this.refs.buttonOrderByDesc.setAttribute("class", style.selectedFontLink);
                        this.refs.buttonOrderBy.setAttribute("class", style.fontLink);
                        this.refs.buttonOrderByDesc.setAttribute("disabled", "disabled");
                        this.refs.buttonOrderBy.removeAttribute("disabled");
                        this.props.orderByDescAction();

                    }} ref={"buttonOrderByDesc"} className={style.selectedFontLink}>По убыванию
                    </button>
                    <a className={style.fontLink}>|</a>
                    <button onClick={() => {
                        this.refs.buttonOrderByDesc.setAttribute("class", style.fontLink);
                        this.refs.buttonOrderBy.setAttribute("class", style.selectedFontLink);
                        this.refs.buttonOrderBy.setAttribute("disabled", "disabled");
                        this.refs.buttonOrderByDesc.removeAttribute("disabled");
                        this.props.orderByAction();
                    }} ref={"buttonOrderBy"} className={style.fontLink}>По возрастанию
                    </button>
                </div>
            </div>

            <div className={style.photo}>
                c
                <Photos photos={this.props.state.photos}/>
            </div>
        </div>
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);