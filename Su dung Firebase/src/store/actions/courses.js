import * as type from "../../constants/actionType";
import { firestore } from "../../services/firebase";

import { notify } from "../../components/Notify/Notify";

export const getCoursesRequest = () => {
    return dispatch => {
        firestore
            .collection("courses")
            .get()
            .then(snapshot => {
                let coursesData = [];
                snapshot.docs.forEach(doc => {
                    if (doc && doc.exists) {
                        let course = doc.data();
                        let maKhoaHoc = doc.id;
                        coursesData.push({ ...course, maKhoaHoc });
                    }
                });
                dispatch(getCourses(coursesData));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const getCourses = coursesData => {
    return {
        type: type.GET_COURSES,
        payload: coursesData
    };
};

export const addCourseRequest = course => {
    return dispatch => {
        firestore
            .collection("courses")
            .add(course)
            .then(snapshop => {
                let maKhoaHoc = snapshop.id;
                course = {...course, maKhoaHoc};
                dispatch(addCourse(course));
                notify("success", "Add Course Successful");
            })
            .catch(error => {
                console.log(error);
                notify("error", "Something went wrong!");
            });
    };
};

export const addCourse = course => {
    return {
        type: type.ADD_COURSE,
        payload: course
    };
};

export const deleteCourseRequest = maKhoaHoc => {
    return dispatch => {
        firestore
            .collection("courses")
            .doc(maKhoaHoc)
            .delete()
            .then(() => {
                dispatch(deleteCourse(maKhoaHoc));
                notify("success", "Delete Successful");
            })
            .catch(err => {
                console.log(err);
                notify("error", "Something went wrong!");
            });
    };
};

export const deleteCourse = maKhoaHoc => {
    return {
        type: type.DELETE_COURSE,
        payload: maKhoaHoc
    };
};

export const showEditCourse = course => {
    return {
        type: type.EDIT_COURSE,
        payload: course
    };
};

export const updateCourseRequest = course => {
    return dispatch => {
        firestore
            .collection("courses")
            .doc(course.maKhoaHoc)
            .update(course)
            .then(res => {
                dispatch(updateCourse(course));
                notify("success", "Update Successful");
            })
            .catch(err => {
                console.log(err);
                notify("error", "Something went wrong!");
            });
    };
};

export const updateCourse = course => {
    return {
        type: type.UPDATE_COURSE,
        payload: course
    };
};

export const displayCourses = displayType => {
    return {
        type: type.DISPLAY_COURSES,
        payload: displayType
    };
};

export const searchCourses = keyword => {
    return {
        type: type.SEARCH_COURSES,
        payload: keyword
    };
};
