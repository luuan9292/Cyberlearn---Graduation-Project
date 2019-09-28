import React from 'react'
import { Link } from 'react-router-dom';

export default function SearchBarItem(props) {

    let { course } = props;

    return (
        <Link to={`/courses/${course.maKhoaHoc}`}>
            <div className="search__form__item">
                <div className="search__image">
                    <img src={course.hinhAnh} alt="course" />
                </div>
                <div className="form__info">
                    <h6>{course.tenKhoaHoc.length > 25 ? course.tenKhoaHoc.substr(0, 25) + "..." : course.tenKhoaHoc}</h6>
                    <p>{course.moTa.length > 100 ? course.moTa.substr(0, 100) + "..." : course.moTa}</p>
                </div>
            </div>
        </Link>
    )
}
