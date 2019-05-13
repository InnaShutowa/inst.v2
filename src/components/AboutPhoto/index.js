import React from "react";
import AboutPhotoComponent from "./AboutPhoto";

const AboutPhoto = (obj) => {
    console.log(obj);
    return <div>
        <AboutPhotoComponent likes={obj.likes} name={obj.name} currentUserRating={obj.currentUserRating} id={obj.id}/>
    </div>
};
export default AboutPhoto;
