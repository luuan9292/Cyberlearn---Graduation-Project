import * as type from '../../constants/actionType';

let initialState = "";

const display = (state = initialState, action) => {
    switch(action.type) {
        case type.SEARCH_USER:
            return action.payload;
        default: return state;
    }
}

export default display;