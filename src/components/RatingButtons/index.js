import React from "react";
import RatingButtonsComponent from "./RatingButtons";

const RatingButton = (state) => {
    console.log(state);
    return <div>
        <RatingButtonsComponent id={state.id} likes={state.likes}/>
    </div>
};
export default RatingButton;