import * as types from '../constants/ActionTypes';
import {COUNT_PHOTOS_IN_MAIN_CONSTANT} from "../constants/ActionTypes";

function OrderByAction() {
    return {
        type: types.ORDER_BY_CONSTANT,
        count: COUNT_PHOTOS_IN_MAIN_CONSTANT
    };
}

export default OrderByAction;