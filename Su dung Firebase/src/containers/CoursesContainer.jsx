import React, { Component } from 'react';
import { connect } from 'react-redux';

import Courses from '../components/Courses/Courses';
import Course from '../components/Course/Course';
import Pagination from '../components/Pagination/Pagination';
import {  addToCart } from '../store/actions/cart';
import { displayCourses, searchCourses } from '../store/actions/courses';

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

    componentDidUpdate(prevProps, prevState) {
        if(this.props.display.searchKeyword.length > 0 && this.state.currentPage !== 1) {
            this.setState({
                currentPage: 1
            })
        }
    }

    render() {

        let { courses } = this.props;

        let { displayType, searchKeyword } = this.props.display;

        let { currentPage, itemsPerPage } = this.state;

        if(searchKeyword && searchKeyword.length > 0) {//Filter search keyword
            
            courses = courses.filter(item => item.tenKhoaHoc.toLowerCase().indexOf(searchKeyword.toLowerCase().trim()) !== -1);

        }
        const indexOfLastItem = currentPage * itemsPerPage;// Chi so cua item cuoi cung
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;// Chi so item dau tien
        let currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);// Mang JSX chua Item hien tai cua trang

       

        return (

            <>

                <Courses handlelDisplay={this.props.handlelDisplay} handleSearch={this.props.handleSearch}>

                    {displayType === "grid"
                        ?
                        <CoursesGrid>
                            {this.showItem(currentItems, displayType)}
                        </CoursesGrid>
                        :
                        <CoursesList>
                            {this.showItem(currentItems, displayType)}
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
    showItem = (courses, displayType) => {
        let result = null;

        if (courses && courses.length > 0) {
            if (displayType === "grid") {
                result = courses.map((course, index) => {
                    return <Course course={course} index={index} key={index} handleAddCart={this.props.handleAddCart}/>
                })
            } else {
                result = courses.map((course, index) => {
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
