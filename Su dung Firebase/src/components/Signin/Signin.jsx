import React, { Component } from 'react'
import _ from "lodash";

import FormLoader from '../FormLoader/FormLoader';
import { signinRequest } from '../../store/actions/users';

export default class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,   //an hien loader form
            taiKhoan: '',
            matKhau: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = e => {

        e.preventDefault();

        //Xoa key showloader ra khoi, chi lay cac chi tiet ve user
        let user = _.omit(this.state, ["showLoader"])

        signinRequest(user, result => {
            this.props.handleHideForm();
        })
    }

    //set thoi gian cho preloader
    componentDidMount() {
        this.setTime = setTimeout(() => {
            this.setState({
                showLoader: false
            })
        }, 2000)
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentWillUnmount() {
        clearTimeout(this.setTime);
        document.removeEventListener("keydown", this.escFunction, false);
    }

    /**----------------------------------------
     * Function: Kich hoat su kien tat form
     * Component: Signin
     ----------------------------------------**/
    handlClick = () => {
        this.props.handleHideForm()
    }

    handleKeyDown = e => {
        if(e.keyCode === 27) {
            this.props.handleHideForm()
        }
    }

    render() {

        return (
            <section className="signin__component">

                {
                    this.state.showLoader ?

                        <FormLoader /> :

                        <div className="signin__wrapper">
                            <div className="singin__title">
                                <h6>Log In to Your Skilled Account!</h6>
                                <div onClick={this.handlClick}><span className="lnr lnr-cross" /></div>
                            </div>
                            <div className="sigin__form">
                                <div className="facebook__signin fg__sigin">
                                    <i className="fab fa-facebook-f" />
                                    Continue with Facebook
                                </div>
                                <div className="google__signin fg__sigin">
                                    <span className="google__icon">
                                        <img src="/img/googleicon.png" alt="icon" />
                                    </span>
                                    Continue with Google
                                </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="email" name="email" placeholder="Email" />
                                            <span><i className="fas fa-envelope" /></span>
                                        </div>
                                    </div>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="password" name="matKhau" placeholder="Password" />
                                            <span><i className="fas fa-lock" /></span>
                                        </div>
                                    </div>
                                    <button>Sign In</button>
                                </form>
                                <div className="forgot">
                                    or <a href="#1">Forgot Password</a>
                                </div>
                                <div className="sign__up">
                                    Don't have an account? <a href="#1">Sign up</a>
                                </div>
                            </div>
                        </div>
                }
            </section>
        )
    }
}
