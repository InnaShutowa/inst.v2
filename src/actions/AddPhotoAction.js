import * as types from '../constants/ActionTypes';

function AddPhotoAction(name, url, likes) {
    return {
        type: types.AddPhotoConstant,
        name,
        url,
        likes
    };
}

export default AddPhotoAction;