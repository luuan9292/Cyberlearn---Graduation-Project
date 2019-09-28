import React, { Component } from 'react';
import { connect } from 'react-redux';

import Viewing from '../components/Viewing/Viewing';
import ViewingList from '../components/Viewing/ViewingList';
import SearchDetectList from '../components/Viewing/SearchDetectList';
import Course from '../components/Course/Course';
import { addToCart } from '../store/actions/cart';

class ViewingContainer extends Component {
    render() {

        let { courses } = this.props;

        return (

            <Viewing>

                <ViewingList>

                    {this.showViewingItem(courses)}

                </ViewingList>

                <SearchDetectList>

                    {this.showSearchDetectItem(courses)}

                </SearchDetectList>

            </Viewing>

        )
    }

    /**----------------------------------------
     * Function: Mapping Viewing Item
     * Component: Viewing
     ----------------------------------------**/
    showViewingItem = (courses) => {
        let result = [];

        if (courses && courses.length > 0) {
            for (let index = 0; index < 5; index++) {
                result.push(<Course key={index} course={courses[index]} handleAddCart={this.props.handleAddCart}/>)
            }
        }

        return result;
    }

    /**----------------------------------------
     * Function: Mapping SearchDetect Item
     * Component: Viewing
     ----------------------------------------**/
    showSearchDetectItem = (courses) => {
        let result = null;

        if (courses && courses.length > 0) {
            let filterCourses = courses.filter(course => course.danhMucKhoaHoc.tenDanhMucKhoaHoc === 'reactjs');

            result = filterCourses.map((course, index) => {
                return <Course key={index} course={course} handleAddCart={this.props.handleAddCart}/>
            })
        }

        return result;

    }
}

const mapStateToProps = state => {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAddCart: course => {
            dispatch(addToCart(course));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewingContainer);
