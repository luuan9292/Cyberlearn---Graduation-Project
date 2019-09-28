import React, { Component } from 'react'

export default class Edit extends Component {
    render() {
        return (
            <div className="edit__profile">
                <h1>Edit Profile</h1>
                <form className="info__form">
                    <div className="fullname">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <div className="first__name">
                                    <label htmlFor="firstname">First Name:</label>
                                    <input type="text" name="firstname" placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">

                                <div className="last__name">
                                    <label htmlFor="firstname">Last Name:</label>
                                    <input type="text" name="lastname" placeholder="Enter Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position">
                        <label htmlFor="Position">Position:</label>
                        <input type="text" name="position" placeholder="Enter Position" />
                    </div>
                    <div className="bio">
                        <label htmlFor="bio">Bio:</label>
                        <textarea type="text" name="bio"
                            placeholder="Demo Biography of Demo Instructor"></textarea>
                    </div>
                    <div className="social__htmlForm">
                        <h2>Socials</h2>
                        <div>Add your social profiles links, they will be shown on your public profile.</div>
                        <div className="social__wrapper">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="facebook">
                                        <label htmlFor="facebook">FACEBOOK</label>
                                        <input type="text" name="facebook"
                                            placeholder="Enter your Facebook URL" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="twitter">
                                        <label htmlFor="twitter">TWITTER</label>
                                        <input type="text" name="twitter" placeholder="Enter your Twitter URL" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="instagram">
                                        <label htmlFor="instagram">INSTAGRAM</label>
                                        <input type="text" name="instagram"
                                            placeholder="Enter your Instagram URL" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="linkedin">
                                        <label htmlFor="linkedin">LINKEDIN</label>
                                        <input type="text" name="linkedin" placeholder="Enter your Linkein URL" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="change__btn">Change Profile</button>
                </form>
            </div>
        )
    }
}
