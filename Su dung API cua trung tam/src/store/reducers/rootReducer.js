import { combineReducers } from 'redux';

import courses from './courses';
import users from './users';
import display from './display';
import cart from './cart';
import courseEdit from './courseEdit';
import currentUser from './currentUser';

const rootReducer = combineReducers({
    courses,
    users,
    display,
    cart,
    courseEdit,
    currentUser
});

export default rootReducer;