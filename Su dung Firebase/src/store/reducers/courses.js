import * as type from '../../constants/actionType';
import data from "../../services/data.json";

let initialState = data;

const courses = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_COURSES:
            const newCourses = [...state, ...action.payload]
            return newCourses;

        case type.ADD_COURSE:
            return [...state, action.payload];

        case type.DELETE_COURSE:
            return state.filter(course => course.maKhoaHoc !== action.payload);

        case type.UPDATE_COURSE:
            const index = state.findIndex(course => course.maKhoaHoc === action.payload.maKhoaHoc);
            const newState = [...state];
            newState[index] = action.payload;
            return newState

        default: return state;
    }
};

export default courses;