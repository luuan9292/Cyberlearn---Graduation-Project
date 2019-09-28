import React, { Component } from 'react'
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar/SearchBar';
import SearchBarItem from '../components/SearchBar/SearchBarItem';
import { searchCourses } from '../store/actions/courses';


class SearchBarContainer extends Component {
    render() {

        let { courses, history } = this.props;

        let { searchKeyword } = this.props.display;

        return (
            <SearchBar handleSearch={this.props.handleSearch} history={history} searchKeyword={searchKeyword}>

                {this.showSearchItem(courses, searchKeyword)}

            </SearchBar>
        )
    }

    /**----------------------------------------
    * Function: Mapping va filter SearchItem
    * Component: SearchBar
    ----------------------------------------**/
    showSearchItem = (courses, searchKeyword) => {
        let result = null;
        if (courses.length > 0) {

            if (searchKeyword.length > 0 && searchKeyword.length !== "") {  //Filter search keyword
                courses = courses.filter(course => course.tenKhoaHoc.toLowerCase().indexOf(searchKeyword.toLowerCase().trim()) !== -1);

                result = courses.map((course, index) => <SearchBarItem course={course} key={index} />)
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
        handleSearch: keyword => {
            dispatch(searchCourses(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);