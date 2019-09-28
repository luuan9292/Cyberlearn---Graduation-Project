import React, { Component } from 'react'
import { connect } from 'react-redux';

import CourseItem from './CourseItem';
import CourseModal from './CourseModal';
import { deleteCourse, editCourse, updateCourse, searchCourses, addCourseRequest} from '../../store/actions';

class Courses extends Component {
    render() {

        let { courses, courseEdit, display } = this.props;

        return (
            <>
                <CourseModal 
                            addCourseRequest={this.props.addCourseRequest} 
                            courseEdit={courseEdit} 
                            updateCourse={this.props.updateCourse} 
                            showEditCourse={this.props.showEditCourse}
                            searchCourses={this.props.searchCourses}
                />

                <table className="table table-striped table__courses">
                    <thead>
                        <tr>
                            <th>ID <i className="fas fa-sort-amount-up"></i></th>
                            <th>Name<i className="fas fa-sort-amount-up"></i></th>
                            <th>Created by</th>
                            <th>Published at</th>
                            <th>Displayed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.showCoursesItem(courses, display.searchKeyword)}

                    </tbody>
                </table>
            </>
        )
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
                result.push(<CourseItem key={index} course={courses[index]} deleteCourse={this.props.deleteCourse} showEditCourse={this.props.showEditCourse}/>)
            }
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses,
        courseEdit: state.courseEdit,
        display: state.display
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addCourseRequest: course => {
            dispatch(addCourseRequest(course));
        },
        deleteCourse: maKhoaHoc => {
            dispatch(deleteCourse(maKhoaHoc));
        },
        showEditCourse: course => {
            dispatch(editCourse(course))
        },
        updateCourse: course => {
            dispatch(updateCourse(course))
        },
        searchCourses: keyword => {
            dispatch(searchCourses(keyword))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
