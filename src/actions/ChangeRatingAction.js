import * as types from '../constants/ActionTypes';

function ChangeRatingAction(id, rating) {
    return {
        type: types.CHANGE_RATING_CONSTANT,
        id,
        rating,
    };
}

export default ChangeRatingAction;