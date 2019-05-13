import React from "react";

import MakePhotos from "../../helpers/MakePhotos";
import AboutPhoto from "../AboutPhoto";

import style from "./styles/styles.css";
import AboutPhotoTitle from "../AboutPhotoTitle";


const PhotosComponent = (state) => {
    const photosList = MakePhotos(state.photos);
    return <div className={style.table}> {
        photosList.map(photosRow => (
            <div className={style.row}>
                {
                    photosRow.map(photo => (
                        <div className={style.cell}>
                            <AboutPhotoTitle user={photo.user} date={photo.date}/>
                            <img className={style.image} src={photo.url} alt={"photo"}/>
                            <AboutPhoto name={photo.name} likes={photo.likes} id={photo.id} currentUserRating={photo.currentUserRating}/>
                        </div>
                    ))
                }
            </div>
        ))
    }
    </div>
};
export default PhotosComponent;