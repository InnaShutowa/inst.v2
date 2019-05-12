import React, {Component} from "react";
import style from "./styles/styles.css";
import RatingButtons from "../RatingButtons";


const AboutPhotoComponent = (obj) => (
    <div>
        <div className={style.name}>{obj.name}</div>
        <RatingButtons id={obj.id} likes={obj.likes}/>
    </div>
);

export default AboutPhotoComponent;