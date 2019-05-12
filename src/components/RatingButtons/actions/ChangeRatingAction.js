import * as types from '../constants/CHANGE_RATING_CONSTANT';

function ChangeRatingAction(id, rating) {
    return {
        type: types.CHANGE_RATING_CONSTANT,
        id,
        rating,
    };
}

export default ChangeRatingAction;