import React, { Component } from 'react';
import { connect } from 'react-redux';

import Courses from '../components/Courses/Courses';
import Course from '../components/Course/Course';
import Pagination from '../components/Pagination/Pagination';
import { displayCourses, addToCart, searchCourses } from '../store/actions';
import CoursesGrid from '../components/Courses/CoursesGrid';
import CoursesList from '../components/Courses/CoursesList';
import CoursesListItem from '../components/Courses/CoursesListItem';

class CoursesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 16
        }
    }

    render() {

        let { courses } = this.props;

        let { displayType, searchKeyword } = this.props.display;

        let { currentPage, itemsPerPage } = this.state;

        const indexOfLastItem = currentPage * itemsPerPage;// Chi so cua item cuoi cung
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;// Chi so item dau tien
        let currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);// Mang JSX chua Item hien tai cua trang

        return (

            <>

                <Courses handlelDisplay={this.props.handlelDisplay} handleSearch={this.props.handleSearch}>

                    {displayType === "grid"
                        ?
                        <CoursesGrid>
                            {this.showItem(currentItems, displayType, searchKeyword)}
                        </CoursesGrid>
                        :
                        <CoursesList>
                            {this.showItem(currentItems, displayType, searchKeyword)}
                        </CoursesList>
                    }

                </Courses>

                <Pagination JSXitems={courses} handlePagination={this.handlePagination} />

            </>

        )
    }


    /**----------------------------------------
     * Function: Get tham so page hien tai va item moi page
     * Component: Courses
     ----------------------------------------**/
    handlePagination = (currentPage, itemsPerPage) => {
        this.setState(prevState => {
            return {
                currentPage,
                itemsPerPage
            }
        })
    }
    /**----------------------------------------
     * Function: Mapping Courses Item theo kieu hien thi la grid hay list
     * Component: Courses
     ----------------------------------------**/
    showItem = (courses, displayType, searchKeyword) => {
        let result = null;
        let newArrCourses = [...courses];

        if (courses && courses.length > 0) {
            if(searchKeyword.length > 0) {//Filter search keyword
                newArrCourses = newArrCourses.filter(item => item.tenKhoaHoc.toLowerCase().indexOf(searchKeyword.toLowerCase().trim()) !== -1);
            }
            if (displayType === "grid") {
                result = newArrCourses.map((course, index) => {
                    return <Course course={course} index={index} key={index} handleAddCart={this.props.handleAddCart}/>
                })
            } else {
                result = newArrCourses.map((course, index) => {
                    return <CoursesListItem course={course} index={index} key={index} />
                })
            }
        }

        return result;
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses,
        display: state.display
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handlelDisplay: displayType => {
            dispatch(displayCourses(displayType));
        },
        handleAddCart: course => {
            dispatch(addToCart(course));
        },
        handleSearch: keyword => {
            dispatch(searchCourses(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
