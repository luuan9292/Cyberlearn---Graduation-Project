import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import _ from "lodash";
import { setCurrentUser } from "../../store/actions";
import { notify } from "../Notify/Notify";

class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSignin: false, //an hien sign in form
            isShowSignup: false //an hien sign up form
        };
    }

    /**----------------------------------------
     * Function: Hien Signin form
     * Component: SubMenu
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
     * Component: SubMenu
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
     * Component: SubMenu
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
     * Component: SubMenu
     ----------------------------------------**/
    handleLogOut = () => {
        this.props.setCurrentUser({});
        localStorage.removeItem("user");
        notify("success", "Sign Out Successful");
    };

    /**----------------------------------------
     * Function: xu ly an hien nut sigin signout
     * Component: SubMenu
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

                    <Link to="/user">
                        <div className="user">
                            <div className="user__avatar">
                                <img src="/img/avatar.png" alt="" />
                            </div>
                            <div className="logout__btn" onClick={this.handleLogOut}>
                                <span className="lnr lnr-power-switch"></span>
                            </div>
                        </div>
                    </Link>
                </>
            );
        }
    };

    render() {
        return (
            <section className="scroll__menu">
                {this.state.isShowSignin ? <Signin handleHideForm={this.handleHideForm} setCurrentUser={this.props.setCurrentUser} /> : ""}

                {this.state.isShowSignup ? <Signup handleHideForm={this.handleHideForm} /> : ""}
                <div className="row">
                    <div className="container">
                        <div className="row scroll__menu__wrapper">
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 logo">
                                <Link to="/">
                                    <img src="/img/logo2.png" alt="logo" />
                                </Link>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 sub_nav">
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
                            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 d-flex menu__right">
                                {!_.isEmpty(this.props.currentUser) ? (
                                    <Link to="/admin">
                                        <div className="admin__panel">
                                            <span className="lnr lnr-cog"></span>
                                        </div>
                                    </Link>
                                ) : (
                                    ""
                                )}

                                <div className="cart">
                                    <i className="lnr lnr-cart" />
                                    <span className="cart__quantity">5</span>
                                </div>
                                <div className="cart__wrapper">
                                    <div className="cart__list">
                                        <div className="cart__items">{this.props.children}</div>
                                        <div className="row cart__payout">
                                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                <div className="total">
                                                    <h5>Total: 5</h5>
                                                </div>
                                                <Link to="/cart">
                                                    <button className="btn__payout">Go to Cart</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {this.handleLogin(this.props.currentUser)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        setCurrentUser: user => {
            dispatch(setCurrentUser(user));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubMenu);
