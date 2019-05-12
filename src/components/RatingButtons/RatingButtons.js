import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";

import ChangeRatingAction from "./actions/ChangeRatingAction";

import style from "./styles/styles.css";

const mapStateToProps = function (state) {
    return {
        photos: state.photos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeRationAction: (id, a) => {
            dispatch(ChangeRatingAction(id, a));
        }
    }
};

let likes = 0;
let likeBuf = 1;
let dislikeBuf = -1;

class RatingButtonsComponent extends Component {
    render() {
        return <div className={style.elms}>
            <button ref={"likeButton"} onClick={() => {

                if (this.refs.likeButton.getAttribute("disabled") !== "disabled") {

                    this.props.changeRationAction(this.props.id, likeBuf);
                    if (likeBuf > 0) {
                        this.refs.likeButton.setAttribute("class", style.selectedLike);
                        this.refs.dislikeButton.setAttribute("disabled", "disabled");
                    } else {
                        this.refs.likeButton.setAttribute("class", style.like);
                        this.refs.dislikeButton.removeAttribute("disabled");

                    }
                    likeBuf = likeBuf * -1;
                }
            }} className={style.like}>+
            </button>


            <p className={style.text}>{this.props.photos.map(a => {
                if (a.id === this.props.id) {
                    likes = a.likes;
                    return a.likes;
                }
            })}</p>
            <button ref={"dislikeButton"} onClick={() => {
                if (this.refs.dislikeButton.getAttribute("disabled") !== "disabled" && likes > 0) {
                    this.props.changeRationAction(this.props.id, dislikeBuf);
                    if (dislikeBuf < 0) {
                        this.refs.dislikeButton.setAttribute("class", style.selectedDislike);
                        this.refs.likeButton.setAttribute("disabled", "disabled");
                    } else {
                        this.refs.dislikeButton.setAttribute("class", style.dislike);
                        this.refs.likeButton.removeAttribute("disabled");
                    }
                    dislikeBuf = dislikeBuf * -1;
                }
            }} className={style.dislike}>-
            </button>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingButtonsComponent);