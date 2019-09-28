import * as type from '../../constants/actionType';

let initialState = {
    displayType: "grid",
    searchKeyword: ''
};

const display = (state = initialState, action) => {
    switch(action.type) {
        case type.DISPLAY_COURSES:
            return {...state, displayType: action.payload};
        case type.SEARCH_COURSES:
            return {...state, searchKeyword: action.payload};
        default: return state;
    }
}

export default display;