import React, { Component } from "react";
import style from "./styles.css";
import AboutPhotoComponent from "../AboutPhotoComponent/AboutPhotoComponent";
import MakePhotos from "../../functions/MakePhotos";

let arrr = [];

class Photos extends Component{
    render(){
        arrr = MakePhotos(this.props);
        return <div className={style.table}> {
            arrr.map(little => (
                <div className={style.row}>
                    {
                        little.map(photo => (
                            <div className={style.cell}>
                                <img className={style.image} src={photo.url} alt={"photo"}/>
                                <AboutPhotoComponent name={photo.name} likes={photo.likes} id={photo.id}/>
                            </div>
                        ))
                    }
                </div>
            ))
        }
        </div>
    }
}
export default Photos;