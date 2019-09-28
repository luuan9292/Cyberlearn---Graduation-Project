import { combineReducers } from 'redux';

import courses from './courses';
import users from './users';
import display from './display';
import cart from './cart';
import courseEdit from './courseEdit';
import currentUser from './currentUser';
import displayUser from './displayUser';

const rootReducer = combineReducers({
    courses,
    users,
    display,
    cart,
    courseEdit,
    currentUser,
    displayUser
});

export default rootReducer;