import React from "react";
import AboutPhotoTitleComponent from "./AboutPhotoTitle";

const AboutPhotoTitle = (obj) => {
    console.log(obj);
    return <div>
        <AboutPhotoTitleComponent date={obj.date} user={obj.user}/>
    </div>
};
export default AboutPhotoTitle;
