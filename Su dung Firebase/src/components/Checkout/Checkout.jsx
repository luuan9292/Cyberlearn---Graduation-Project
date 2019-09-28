import React, { Component } from 'react'

export default class Checkout extends Component {
    render() {

        let { cart } = this.props;

        return (
            <section className="checkout">
                <div className="row mr-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 checkout__list">
                                <h4>{`Your Items ( ${this.props.cart.length} )`}</h4>
                                <div className="cart__items">

                                    {this.props.children}

                                </div>
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 checkout__payment">
                                <h1>{`Total: $${Math.ceil(19.99 * cart.length)}`}</h1>
                                <div className="payment">
                                    <div className="card">
                                        <div className="card__header">
                                            <div className="card__radio">
                                                <input type="radio" id="cart" />
                                            </div>
                                            <div className="card__image">
                                                <span>New Payment Cart</span>
                                                <span><img src="/img/payment-option.png" alt="cart" /></span>
                                            </div>
                                        </div>
                                        <div className="card__body">
                                            <form>
                                                <input type="text" className="card__name" placeholder="Name on Card" disabled />
                                                <input type="text" className="card__number" placeholder="Card Number" disabled />
                                                <div className="code">
                                                    <select className="card__month" name="month" disabled>
                                                        <option value="1">MM</option>
                                                    </select>
                                                    <select className="card__year" name="year" disabled>
                                                        <option value="1">YY</option>
                                                    </select>
                                                    <input className="card__Code" type="text" placeholder="Security Code" disabled />
                                                </div>
                                                <div className="zip">
                                                    <select className="country" disabled>
                                                        <option value="1">VietNam</option>
                                                    </select>
                                                    <input className="zipcode" type="text" placeholder="Zip/Postal Code" disabled />
                                                </div>
                                                <div className="card__footer">
                                                    <button>Complete Payment</button>
                                                    <p>By completing your purchase you agree to these <span>Terms of Service.</span></p>
                                                    <div className="lock">
                                                        <i class="fas fa-lock"></i>
                                                        <span>Secure Connection</span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="paypal">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
