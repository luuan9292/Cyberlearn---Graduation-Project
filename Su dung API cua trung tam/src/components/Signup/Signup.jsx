import React, { Component } from 'react'
import _ from "lodash";

import FormLoader from '../FormLoader/FormLoader';
import {signupRequest} from '../../store/actions'

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: true,    //an hien loader form
            taiKhoan: '',
            hoTen: '',
            soDT: '',
            email: '',
            matKhau: '',
            maNhom: 'GP01',
            maLoaiNguoiDung: 'HV'
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
        let user = _.omit(this.state, ["showLoader"]);

        signupRequest(user, () => {
            this.props.handleHideForm();
        });
    }

    //set thoi gian cho preloader
    componentDidMount() {
        this.setTime = setTimeout(() => {
            this.setState({
                showLoader: false
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.setTime)
    }

    /**----------------------------------------
     * Function: Kich hoat su kien tat form
     * Component: Signup
     ----------------------------------------**/
    handlClick = () => {
        this.props.handleHideForm()
    }

    render() {
        return (
            <section className="signup__component">

                {
                    this.state.showLoader ?

                        <FormLoader /> :

                        <div className="signup__wrapper">
                            <div className="signup__title">
                                <h6>Sign Up and Start Learning!</h6>
                                <div onClick={this.handlClick}><span className="lnr lnr-cross" /></div>
                            </div>
                            <div className="signup__form">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="text" name="taiKhoan" placeholder="Username" />
                                            <span><i className="fas fa-user-tag"></i></span>
                                        </div>
                                    </div>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="text" name="hoTen" placeholder="Full Name" />
                                            <span><i className="fas fa-user" /></span>
                                        </div>
                                    </div>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="text" name="soDT" placeholder="Phone Numbers" />
                                            <span><i className="fas fa-phone-square-alt"></i></span>
                                        </div>
                                    </div>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="text" name="email" placeholder="Email" />
                                            <span><i className="fas fa-envelope" /></span>
                                        </div>
                                    </div>
                                    <div className="form__wrapper">
                                        <div>
                                            <input onChange={this.onChange} type="password" name="matKhau" placeholder="Password" />
                                            <span><i className="fas fa-lock" /></span>
                                        </div>
                                    </div>
                                    <div className="check">
                                        <input type="checkbox" name="check" defaultChecked />
                                        Yes! I want to get the most out of Skilled by receiving emails with exclusive deals, personal
                                        recommendations and learning tips!
                                    </div>
                                    <button>Sign Up</button>
                                </form>
                                <div className="term">
                                    By signing up, you agree to our <a href="#1">Terms of Use and Privacy Policy.</a>
                                </div>
                                <div className="sign__in">
                                    Already have an account? <a href="#1">Sign In</a>
                                </div>
                            </div>
                        </div>
                }
            </section>
        )
    }
}
