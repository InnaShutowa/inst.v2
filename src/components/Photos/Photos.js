import React from "react";

import AboutPhotoComponent from "../AboutPhoto/AboutPhoto";
import MakePhotos from "../../helpers/MakePhotos";

import style from "./styles/styles.css";


const PhotosComponent = (state) => {
    const photosList = MakePhotos(state.photos);
    return <div className={style.table}> {
        photosList.map(photosRow => (
            <div className={style.row}>
                {
                    photosRow.map(photo => (
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
};
export default PhotosComponent;