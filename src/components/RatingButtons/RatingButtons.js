import React, { Component } from "react";
import style from "./styles/styles.css";
import ChangeRatingAction from "../../actions/ChangeRatingAction";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = function(state){
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



class RatingButtons extends Component{

    render(){
        return <div className={style.elms}>
                    <button ref={"likeButton"} onClick={()=>{
                        if (this.refs.likeButton.getAttribute("disabled")!=="disabled"){
                            this.props.changeRationAction(this.props.id,1);
                        }


                        this.refs.likeButton.setAttribute("disabled", "disabled");
                        this.refs.dislikeButton.setAttribute("disabled", "disabled");
                    }} className={style.like}>+</button>
                    <p className={style.text}>{this.props.photos.map(a=>{
                        if (a.id===this.props.id){
                            return a.likes;
                        }
                    })}</p>
                    <button ref={"dislikeButton"} onClick={()=>this.props.changeRationAction(this.props.id,-1)} className={style.dislike}>-</button>
                </div>
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (RatingButtons);