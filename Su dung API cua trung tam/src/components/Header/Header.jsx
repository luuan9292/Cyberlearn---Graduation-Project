import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import { notify } from "../Notify/Notify";

import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSignin: false, //an hien sign in form
            isShowSignup: false //an hien sign up form
        };
    }

    /**----------------------------------------
     * Function: Hien Signin form
     * Component: Header
     ----------------------------------------**/
    handleShowSignin = () => {
        this.setState(prevState => {
            return {
                isShowSignin: true
            };
        });
    };

    /**----------------------------------------
     * Function: Hien Signup form
     * Component: Header
     ----------------------------------------**/
    handleShowSignup = () => {
        this.setState(prevState => {
            return {
                isShowSignup: true
            };
        });
    };

    /**----------------------------------------
     * Function: Kich hoat su kien tat form
     * Component: Header
     ----------------------------------------**/
    handleHideForm = () => {
        this.setState(prevState => {
            return {
                isShowSignin: false,
                isShowSignup: false
            };
        });
    };

    /**----------------------------------------
     * Function: xu li logout
     * Component: Header
     ----------------------------------------**/
    handleLogOut = () => {
        this.props.setCurrentUser({});
        localStorage.removeItem("user");
        notify("success", "Sign Out Successful");
    };

    /**----------------------------------------
     * Function: xu ly an hien nut sigin signout
     * Component: Header
     ----------------------------------------**/
    handleLogin = currentUser => {
        if (_.isEmpty(currentUser)) {
            return (
                <>
                    <div className="login">
                        <button onClick={this.handleShowSignin}>Log In</button>
                    </div>
                    <div className="signup">
                        <button onClick={this.handleShowSignup}>Sign Up</button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="noti">
                        <span className="lnr lnr-alarm"></span>
                        <span className="noti__quantity">5</span>
                    </div>

                        <div className="user">
                    <Link to={`/user/${this.props.currentUser.taiKhoan}`}>

                            <div className="user__avatar">
                                <img src="/img/avatar.png" alt="" />
                            </div>
                    </Link>

                            <div className="logout__btn" onClick={this.handleLogOut}>
                                <span className="lnr lnr-power-switch"></span>
                            </div>
                        </div>
                </>
            );
        }
    };
    render() {
        let { header, cart, setCurrentUser, currentUser } = this.props;

        return (
            <header className={header}>
                {this.state.isShowSignin ? <Signin handleHideForm={this.handleHideForm} setCurrentUser={setCurrentUser} /> : ""}

                {this.state.isShowSignup ? <Signup handleHideForm={this.handleHideForm} /> : ""}

                <div className="row top__bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 logo">
                                <Link to="/">
                                    <img src={header === "header" ? "/img/logo.png" : "/img/logo2.png"} alt="logo" />
                                </Link>
                            </div>
                            <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 top__contact">
                                <div className="top__shortcode">
                                    <div className="top__icon">
                                        <span className="lnr lnr-clock" />
                                    </div>
                                    <div className="top__info">
                                        <p className="subtitle">Saturday - Sunday CLOSED</p>
                                        <h6 className="title">Mon - Fri 8.00 - 18.00</h6>
                                        <p className="description">Call us</p>
                                    </div>
                                </div>
                                <div className="top__shortcode">
                                    <div className="top__icon">
                                        <span className="lnr lnr-earth" />
                                    </div>
                                    <div className="top__info">
                                        <p className="subtitle">Over</p>
                                        <h6 className="title">120,000</h6>
                                        <p className="description">Worldwide</p>
                                    </div>
                                </div>
                                <div className="social">
                                    <i className="fab fa-twitter" />
                                    <i className="fab fa-facebook-f" />
                                    <i className="fab fa-instagram" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottom__bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 menu__left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <NavLink activeClassName="true" exact className="nav-link" to="/">
                                            HOME
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="true" className="nav-link" to="/courses">
                                            COURSES
                                        </NavLink>
                                        <div className="submenu__wrapper">
                                            <div className="submenu">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sub__menu">
                                                        <ul>
                                                            <Link to="/notfoundpage">
                                                                <li>Menu Test 1</li>
                                                            </Link>
                                                            <Link to="/notfoundpage">
                                                                <li>Menu Test 2</li>
                                                            </Link>
                                                            <Link to="/notfoundpage">
                                                                <li>Menu Test 3</li>
                                                            </Link>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="true" className="nav-link" to="/blog">
                                            BLOG
                                        </NavLink>
                                        <div className="submenu__wrapper">
                                            <div className="submenu">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sub__menu">
                                                        <ul>
                                                            <Link to="/notfoundpage">
                                                                <li>Menu Test 1</li>
                                                            </Link>
                                                            <Link to="/notfoundpage">
                                                                <li>Menu Test 2</li>
                                                            </Link>
                                                            <Link to="/notfoundpage">
                                                                <li>Menu Test 3</li>
                                                            </Link>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="true" className="nav-link" to="/events">
                                            EVENTS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="true" className="nav-link" to="/about">
                                            ABOUT
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 menu__right">
                                {!_.isEmpty(currentUser) ? 
                                (
                                    <Link to="/admin">
                                        <div className="admin__panel">
                                            <span className="lnr lnr-cog"></span>
                                        </div>
                                    </Link>
                                ) : 
                                (
                                    ""
                                )
                                }

                                <div className="cart">
                                    <i className="lnr lnr-cart" />
                                    <span className="cart__quantity">{cart.length}</span>
                                </div>
                                <div className="cart__wrapper">
                                    <div className="cart__list">
                                        <div className="cart__items">{this.props.children}</div>
                                        <div className="row cart__payout">
                                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                <div className="total">
                                                    <h5>
                                                        Total:{" "}
                                                        <span>
                                                            ${Math.ceil(19.99 * cart.length)}
                                                            .00
                                                        </span>
                                                    </h5>
                                                </div>
                                                <Link to="/cart">
                                                    <button className="btn__payout">Go to Cart</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {this.handleLogin(currentUser)}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
