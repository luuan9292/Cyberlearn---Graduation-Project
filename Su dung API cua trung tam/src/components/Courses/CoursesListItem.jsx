import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CoursesListItem extends Component {
    render() {

        let { course } = this.props;

        return (
            <Link to={`/courses/${course.maKhoaHoc}`}>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 coursesList__item">
                    <div className="list__img">
                        <img src={course.hinhAnh} alt="list" />
                        <span className="best__seller">BEST</span>
                    </div>
                    <div className="list__info">
                        <h3>{course.tenKhoaHoc.length > 50 ? course.tenKhoaHoc.substr(0, 50) + "..." : course.tenKhoaHoc}</h3>
                        <h6>by aislin 7 lessons Graphic Design, Music</h6>
                        <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                        </div>
                        <p>{course.moTa.length > 300 ? course.moTa.substr(0, 300) + "..." : course.moTa}</p>
                    </div>
                </div>
            </Link>
        )
    }
}
