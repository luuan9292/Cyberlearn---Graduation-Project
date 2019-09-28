import React, { Component } from 'react'

export default class CheckoutItem extends Component {
    
    render() {

        let { course } = this.props;

        return (
            <div className="row cart__item">
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 item__thumb  pr-0">
                    <img src={course.hinhAnh} alt="cart-item" />
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 item__info">
                    <h6>{course.tenKhoaHoc.length > 50 ? course.tenKhoaHoc.substr(0, 50) + "..." : course.tenKhoaHoc}</h6>
                    <p>by <span>Jose Portilla</span> <span>Head of Data Science, Pierian Data Inc.</span></p>
                    <h5>$19.99</h5>
                </div>
            </div>
        )
    }
}
