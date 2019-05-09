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
            console.log("лучше бы я была бомжом");
            console.log(id);
            dispatch(ChangeRatingAction(id, a));

        }
    }
};



class RatingButtons extends Component{

    render(){
        return <div className={style.elms}>
                    <button onClick={()=>this.props.changeRationAction(this.props.id,1)} className={style.like}>+</button>
                    <p className={style.text}>{this.props.photos.map(a=>{
                        if (a.id===this.props.id){
                            console.log("да что за жесть");
                            console.log(a);
                            return a.likes;
                        }
                    })}</p>
                    <button className={style.dislike}>-</button>
                </div>
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (RatingButtons);