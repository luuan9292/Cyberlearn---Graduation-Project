import * as type from '../../constants/actionType';

let initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_USER:
            return [...state, action.payload];
        case type.GET_USERS:
            return action.payload;
        default: return state;
    }
};

export default users;