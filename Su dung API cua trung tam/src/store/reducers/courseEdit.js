import * as type from '../../constants/actionType';

const initialState = {};

const courseEdit = (state = initialState, action) => {
    switch (action.type) {
    case type.EDIT_COURSE:
        return action.payload;

    default:
        return state;
    }
}

export default courseEdit