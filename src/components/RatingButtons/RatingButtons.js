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
                    this.props.photos.map(photo => {
                        if (photo.id === this.props.id) {
                            if (photo.currentUserRating === 0){
                                this.props.changeRationAction(this.props.id, 1);

                                this.refs.likeButton.setAttribute("class", style.selectedLike);
                                this.refs.dislikeButton.setAttribute("class", style.dislike);
                                this.refs.dislikeButton.setAttribute("disabled", "disabled");
                                this.refs.likeButton.removeAttribute("disabled");
                                return;
                            }
                            if (photo.currentUserRating === 1){
                                this.props.changeRationAction(this.props.id, -1);

                                this.refs.likeButton.setAttribute("class", style.like);
                                this.refs.dislikeButton.setAttribute("class", style.dislike);
                                this.refs.dislikeButton.removeAttribute("disabled");
                                this.refs.likeButton.removeAttribute("disabled");
                            }
                        }
                    });
            }} className={style.like}>+
            </button>


            <p className={style.text}>{this.props.photos.map(a => {
                if (a.id === this.props.id) {
                    likes = a.likes;
                    return a.likes;
                }
            })}</p>

            <button ref={"dislikeButton"} onClick={() => {
                console.log(this.props.photos);
                this.props.photos.map(photo => {
                    if (photo.id === this.props.id) {
                        console.log(photo);
                        if (photo.currentUserRating === 0){
                            this.props.changeRationAction(this.props.id, -1);
                            this.refs.dislikeButton.setAttribute("class", style.selectedDislike);
                            this.refs.likeButton.setAttribute("class", style.like);
                            this.refs.likeButton.setAttribute("disabled", "disabled");
                            this.refs.dislikeButton.removeAttribute("disabled");
                            return;
                        }
                        if (photo.currentUserRating === 1){
                            this.refs.likeButton.setAttribute("class", style.selectedLike);
                            this.refs.dislikeButton.setAttribute("class", style.dislike);
                            this.refs.dislikeButton.setAttribute("disabled", "disabled");
                            this.refs.likeButton.removeAttribute("disabled");
                            return;
                        }
                        if (photo.currentUserRating === -1){
                            this.props.changeRationAction(this.props.id, 1);

                            this.refs.likeButton.setAttribute("class", style.like);
                            this.refs.dislikeButton.setAttribute("class", style.dislike);
                            this.refs.dislikeButton.removeAttribute("disabled");
                            this.refs.likeButton.removeAttribute("disabled");

                        }
                    }
                });

            }} className={style.dislike}>-
            </button>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingButtonsComponent);