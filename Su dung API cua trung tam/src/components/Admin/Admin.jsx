import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import _ from "lodash";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Users from "./Users";
import Register from "./Register";
import AdminLoader from "./AdminLoader/AdminLoader";
import { notify } from "../Notify/Notify";
import { setCurrentUser } from "../../store/actions";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboard: false,
            courses: true,
            users: false,
            register: false,
            utilities: false,
            rules: false,
            showLoader: true
        };
    }

    //set thoi gian cho preloader
    componentDidMount() {
        this.setTime = setTimeout(() => {
            this.setState({
                showLoader: false
            });
        }, 2500);
    }

    componentWillUnmount() {
        clearTimeout(this.setTime);
    }

    /**----------------------------------------
     * Function: xu li logout
     * Component: Header
     ----------------------------------------**/
     handleLogOut = () => {
        this.props.setCurrentUser({});
        localStorage.removeItem("user");
        notify("success", "Sign Out Successful");
    };

    handleChangeMenu = param => {
        this.setState(state => {
            return {
                dashboard: false,
                courses: false,
                users: false,
                utilities: false,
                register: false,
                rules: false,
                [param]: true
            };
        });
    };

    showMenu = () => {
        let { dashboard, courses, users, register } = this.state;

        if (dashboard) {
            return <Dashboard />;
        } else if (courses) {
            return <Courses />;
        } else if (users) {
            return <Users />;
        } else if (register) {
            return <Register />;
        }
    };
    render() {

        if(_.isEmpty(this.props.currentUser)) {
            return <Redirect to="/" />
        }

        return (
            <>
                {this.state.showLoader ? (
                    <AdminLoader />
                ) : (
                    <div className="container-fluid admin__panel px-0">
                        <div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                                <div className="admin__header">
                                    <nav className="navbar navbar-expand-md bg-dark px-4">
                                        <a className="navbar-brand" href="#1">
                                            <i className="fas fa-cogs"></i> Admin Panel
                                        </a>
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">
                                                    <i className="fas fa-home"></i> Home
                                                </Link>
                                            </li>
                                            <li className="nav-item" onClick={this.handleLogOut}>
                                                <a className="nav-link" href="#1">
                                                    <i className="fas fa-power-off"></i> SignOut
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="row admin__content px-0">
                            <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0">
                                <div className="admin__manager">
                                    <div className="title">
                                        <i className="fas fa-tools"></i> Management
                                    </div>
                                    <ul className="px-0">
                                        <li onClick={() => this.handleChangeMenu("dashboard")} className={this.state.dashboard ? "active" : ""}>
                                            <i className="fas fa-chart-line"></i> Dashboard
                                        </li>
                                        <li onClick={() => this.handleChangeMenu("courses")} className={this.state.courses ? "active" : ""}>
                                            <i className="fas fa-graduation-cap"></i> Courses
                                        </li>
                                        <li onClick={() => this.handleChangeMenu("users")} className={this.state.users ? "active" : ""}>
                                            <i className="fas fa-user-tag"></i> Users <span className="badge badge-danger">20</span>
                                        </li>
                                        <li onClick={() => this.handleChangeMenu("register")} className={this.state.register ? "active" : ""}>
                                            <i className="fas fa-pencil-ruler"></i> Register <span className="badge badge-danger">6</span>
                                        </li>
                                        <li onClick={() => this.handleChangeMenu("rules")} className={this.state.rules ? "active" : ""}>
                                            <i className="fas fa-gavel"></i> Rules
                                        </li>
                                        <li onClick={() => this.handleChangeMenu("utilities")} className={this.state.utilities ? "active" : ""}>
                                            <i className="fas fa-toolbox"></i> Utilities
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 admin__dashboard pl-4">
                                <div className="title">
                                    <i className="fas fa-user-shield"></i> My Dashboard
                                </div>

                                {this.showMenu()}
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        setCurrentUser: user => {
            dispatch(setCurrentUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
