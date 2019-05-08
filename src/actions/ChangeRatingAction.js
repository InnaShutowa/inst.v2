import * as types from '../constants/ActionTypes';

function ChangeRatingAction(id, rating) {
console.log("sdasd");
    return {
        type: types.ChangeRatingConstant,
        id,
        rating,
    };
}

export default ChangeRatingAction;