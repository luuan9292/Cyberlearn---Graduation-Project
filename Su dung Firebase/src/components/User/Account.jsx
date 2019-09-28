import React, { Component } from 'react'

export default class Account extends Component {
    render() {

        let {currentUser} = this.props

        return (
            <div className="account">
                <h1>My Account</h1>
                <form>
                    <div className="email">
                        <h4>Your email address is: <span>{currentUser.email}</span></h4>
                    </div>
                    <div className="password">
                        <label htmlFor="current">Password:</label>
                        <input type="password" name="current" placeholder="Enter Current Password" />
                        <input type="password" name="new" placeholder="Enter New Password" />
                        <input type="password" name="retype" placeholder="Re-type new Password" />
                    </div>
                    <button className="change__btn">Change Password</button>
                </form>
            </div>
        )
    }
}
