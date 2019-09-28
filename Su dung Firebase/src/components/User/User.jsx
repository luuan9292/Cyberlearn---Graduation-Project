import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import _ from "lodash";

import Profile from './Profile';
import Certificates from './Certificates';
import Account from './Account';
import Edit from './Edit';
import { getUserDetail } from '../../store/actions/users';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: true,
            certificates: false,
            account: false,
            edit: false,
            userProfile: {}
        }
    }

    componentDidMount() {
        const taiKhoan = this.props.match.params.id;
        getUserDetail(taiKhoan , result => {
            this.setState(prevState => {
                return {
                    userProfile: result
                }
            })
        })
    }

    handleChangeMenu = (param) => {

        this.setState(state => {
            return {
                profile: false,
                certificates: false,
                account: false,
                edit: false,
                [param]: true
            }
        })
    }


    showMenu = () => {
        let { profile, certificates, account, edit } = this.state;

        if (profile) {
            return <Profile />
        } else if (certificates) {
            return <Certificates />
        } else if (account) {
            return <Account currentUser={this.props.currentUser}/>
        } else if (edit) {
            return <Edit />
        }
    }
    render() {

        if(_.isEmpty(this.props.currentUser)) {
            return <Redirect to="/" />
        }

        return (
            <section className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 pl-0 user__category">
                            <div className="user__avatar">
                                <img src="/img/avatar.png" alt="avatar" />
                            </div>
                            <div className="user__info">
                                <div className="fullname">{this.state.userProfile.taiKhoan}</div>
                                <div className="bio">Front-end Developer</div>
                            </div>
                            <div className="user__edit">
                                <button onClick={() => this.handleChangeMenu("profile")} className="profile__btn">MY PROFILE</button>
                                <div onClick={() => this.handleChangeMenu("certificates")} className={`edit__profile ${this.state.certificates ? 'active' : ''}`}><i className="fas fa-certificate" /> Certificates</div>
                                <div onClick={() => this.handleChangeMenu("account")} className={`edit__profile ${this.state.account ? 'active' : ''}`}><i className="fas fa-users-cog" /> Account</div>
                                <div onClick={() => this.handleChangeMenu("edit")} className={`edit__profile ${this.state.edit ? 'active' : ''}`}><i className="fas fa-cog" /> Edit Profile</div>
                            </div>
                        </div>
                        <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 pr-0 user__course">

                            {this.showMenu()}


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(User);

