import React, { Component } from "react";
import style from "./styles/styles.css";
import AboutPhotoComponent from "../AboutPhoto/AboutPhoto";
import MakePhotos from "../../helpers/MakePhotos";
import connect from "react-redux/es/connect/connect";
import ChangeRatingAction from "../../actions/ChangeRatingAction";

let arrr = [];

const mapStateToProps = function(state){
    return {
        state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeRationAction: (id, a) => {
            console.log("лучше бы я была бомжом");
            dispatch(ChangeRatingAction(id, a));
        }
    }
};


class Photos extends Component{
    render(){

        this.props.changeRationAction(1,1);
        console.log("за что мне все это");
        console.log(mapStateToProps(this.props.state));

        console.log(this.props.photos);
        arrr = MakePhotos(this.props.photos);
        console.log("ssssas");
        console.log(arrr);
        return <div className={style.table}> {
            arrr.map(little => (
                <div className={style.row}>
                    {
                        little.map(photo => (
                            <div className={style.cell}>
                                <img className={style.image} src={photo.url} alt={"photo"}/>
                                <AboutPhotoComponent  name={photo.name} likes={photo.likes} id={photo.id}/>
                            </div>
                        ))
                    }
                </div>
            ))
        }
        </div>
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Photos);