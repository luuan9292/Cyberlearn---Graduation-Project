import * as type from '../../constants/actionType';

let initialState = {};

const currentUser = (state = initialState, action) => {
    switch(action.type) {
        case type.SET__CURRENT__USER:
            return action.payload;
        default: return state;
    }
};

export default currentUser;