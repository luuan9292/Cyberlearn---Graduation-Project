import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Cart extends Component {

    render() {

        let { cart } = this.props;

        return (
            <section className="cart_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 pl-0">
                            <table className="cart__table text-center table">
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Course</th>
                                        <th>Price</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody className="cart__body">

                                    {this.props.children}

                                    <tr className="cart__footer">
                                        <td colSpan={3} className="cart__coupon text-left">
                                            <input type="text" placeholder="Coupon code" />
                                            <button className="blog__button">APPLY COUPON</button>
                                        </td>
                                        <td colSpan={3} className="cart__update text-right">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3 px-0">
                            <div className="cart__total">
                                <table className="table">
                                    <tbody className="table__total">
                                        <tr>
                                            <td colSpan={2}>
                                                <span className="total__header">Cart totals</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td className="amount">${Math.ceil(19.99 * cart.length)}.00</td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontWeight: 'bold' }}>Total</td>
                                            <td style={{ fontSize: '1.4rem' }} className="amount">${Math.ceil(19.99 * cart.length)}.00</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <Link to="/checkout">
                                                    <button className="add">PROCEED TO CHECKOUT</button>
                                                </Link>
                                                <Link to="/courses">
                                                    <button className="continue">CONTINUE SHOPPING</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
