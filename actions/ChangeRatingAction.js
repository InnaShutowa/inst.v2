import * as types from '../constants/ActionTypes';

function ChangeRatingAction(id, rating) {

    return {
        type: types.ChangeRatingConstant,
        id,
        rating,
    };
}

export default ChangeRatingAction;