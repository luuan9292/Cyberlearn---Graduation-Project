import React, { Component } from 'react'
import { connect } from 'react-redux';
import CourseItem from '../components/CourseItem/CourseItem';
import { addToCart } from '../store/actions';


class CourseItemContainer extends Component {
    render() {

        let { courses, match } = this.props;

        let id = match.params.id;

        return (
            <>

                {this.showItem(courses, id)}

            </>
        )
    }

    /**----------------------------------------
     * Function: Find element co id tuong ung de render course item
     * Component: CourseItem
     ----------------------------------------**/
    showItem = (courses, id) => {
        let result = null;
        let thisItem = null;


        if (courses.length > 0) {
            thisItem = courses.find(course => {
                return course.maKhoaHoc === id;
            })
        } else {
            return
        }



        result = <CourseItem course={thisItem} id={id} handleAddCart={this.props.handleAddCart}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(CourseItemContainer);