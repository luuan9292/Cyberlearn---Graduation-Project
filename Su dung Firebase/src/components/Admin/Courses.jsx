import React, { Component } from "react";
import { connect } from "react-redux";

import CourseItem from "./CourseItem";
import CourseModal from "./CourseModal";
import { addCourseRequest, deleteCourseRequest, showEditCourse, updateCourseRequest, searchCourses } from "../../store/actions/courses";

class Courses extends Component {
    
    render() {
        let { courses, courseEdit, addCourseRequest, updateCourseRequest, showEditCourse, searchCourses, display, currentUser } = this.props;

        return (
            <>
                <CourseModal
                    addCourseRequest={addCourseRequest}
                    courseEdit={courseEdit}
                    updateCourseRequest={updateCourseRequest}
                    showEditCourse={showEditCourse}
                    searchCourses={searchCourses}
                    currentUser={currentUser}
                />

                <table className="table table-striped table__courses">
                    <thead>
                        <tr>
                            <th>
                                Name<i className="fas fa-sort-amount-up"></i>
                            </th>
                            <th>Created by</th>
                            <th>Published at</th>
                            <th>Displayed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.showCoursesItem(courses, display.searchKeyword)}</tbody>
                </table>
            </>
        );
    }

    /**----------------------------------------
     * Function: Mapping Viewing Item
     * Component: Courses
     ----------------------------------------**/
    showCoursesItem = (courses, searchKeyword) => {
        let result = [];
        if (courses.length > 0) {
            if (searchKeyword.length > 0 && searchKeyword.length !== "") {
                courses = courses.filter(course => course.tenKhoaHoc.toLowerCase().indexOf(searchKeyword.toLowerCase().trim()) !== -1);
            }

            for (let index = courses.length - 1; index >= 0; index--) {
                result.push(<CourseItem key={index} course={courses[index]} deleteCourseRequest={this.props.deleteCourseRequest} showEditCourse={this.props.showEditCourse} currentUser={this.props.currentUser}/>);
            }
        }
        return result;
    };
}

const mapStateToProps = state => {
    return {
        courses: state.courses,
        courseEdit: state.courseEdit,
        display: state.display,
        currentUser: state.currentUser
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addCourseRequest: course => {
            dispatch(addCourseRequest(course));
        },
        deleteCourseRequest: maKhoaHoc => {
            dispatch(deleteCourseRequest(maKhoaHoc));
        },
        showEditCourse: course => {
            dispatch(showEditCourse(course));
        },
        updateCourseRequest: course => {
            dispatch(updateCourseRequest(course));
        },
        searchCourses: keyword => {
            dispatch(searchCourses(keyword));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Courses);
