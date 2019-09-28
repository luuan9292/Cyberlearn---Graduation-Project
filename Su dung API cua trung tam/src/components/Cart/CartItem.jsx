import React, { Component } from 'react'

export default class CartItem extends Component {

    onDeleteCart = id => {
        this.props.handleDeleteCart(id);
    }

    render() {

        let { course } = this.props;

        return (
            <tr className="cart__item">
                <td className="cart__thumbnail">
                    <div><img src={course.hinhAnh} alt="cart" /></div>
                </td>
                <td className="cart__name">
                    <div>{course.tenKhoaHoc.length > 50 ? course.tenKhoaHoc.substr(0, 50) + "..." : course.tenKhoaHoc}</div>
                    <div>By Jonas Schmedtmann, Web Developer, Designer...</div>
                </td>
                <td className="cart__price">
                    <div className="amount">$19.90 <i className="fas fa-tag"></i></div>
                    <div className="oldamount">$199.90</div>
                </td>
                <td className="cart__remove">
                    <div onClick={() => this.onDeleteCart(course.maKhoaHoc)} className="btn__remove">
                        <a href="#1" className="remove"><i className="fas fa-times" /></a>
                    </div>
                </td>
            </tr>
        )
    }
}
