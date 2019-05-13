import React from "react";
import RatingButtonsComponent from "./RatingButtons";

const RatingButton = (state) => {
    return <div>
        <RatingButtonsComponent id={state.id} likes={state.likes} currentUserRating={state.currentUserRating}/>
    </div>
};
export default RatingButton;