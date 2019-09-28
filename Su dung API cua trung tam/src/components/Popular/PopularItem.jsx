import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class PopularItem extends Component {
    render() {

        let { course } = this.props;

        return (

            <div className="product__item">
                <Link to={`/courses/${course.maKhoaHoc}`}>
                    <div className="item__img">
                        <img src={course.hinhAnh} alt="item" />
                        <div className="img__overlay" />
                        <div className="banner">
                            VERIFIED
                        </div>
                    </div>
                    <div className="item__info">
                        <h5>

                            {course.tenKhoaHoc.length > 40 ? course.tenKhoaHoc.substr(0, 40) + "..." : course.tenKhoaHoc}

                        </h5>
                        <h6>Jose Portilla</h6>
                    </div>
                    <div className="cart__footer">
                        <div className="left__shape"></div>
                        <div className="right__shape"></div>
                        <span>100% ONLINE</span>
                        <div className="shape__image">
                            <img src="/img/popularicon.jpg" alt="popular"/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
