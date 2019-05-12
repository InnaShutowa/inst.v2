import * as types from '../constants/CHANGE_RATING_CONSTANT';
import {COUNT_PHOTOS_IN_MAIN_CONSTANT} from "../../../constants/ActionTypes";

function ChangeRatingAction(id, rating) {
    return {
        type: types.CHANGE_RATING_CONSTANT,
        id: id,
        rating: rating,
        count: COUNT_PHOTOS_IN_MAIN_CONSTANT
    };
}

export default ChangeRatingAction;