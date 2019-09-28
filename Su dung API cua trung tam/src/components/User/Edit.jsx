import React, { Component } from 'react'

export default class Edit extends Component {
    render() {
        return (
            <div class="edit__profile">
                <h1>Edit Profile</h1>
                <form class="info__form">
                    <div class="fullname">
                        <div class="row">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <div class="first__name">
                                    <label for="firstname">First Name:</label>
                                    <input type="text" name="firstname" placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">

                                <div class="last__name">
                                    <label for="firstname">Last Name:</label>
                                    <input type="text" name="lastname" placeholder="Enter Last Name" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position">
                        <label for="Position">Position:</label>
                        <input type="text" name="position" placeholder="Enter Position" />
                    </div>
                    <div class="bio">
                        <label for="bio">Bio:</label>
                        <textarea type="text" name="bio"
                            placeholder="Demo Biography of Demo Instructor"></textarea>
                    </div>
                    <div class="social__form">
                        <h2>Socials</h2>
                        <div>Add your social profiles links, they will be shown on your public profile.</div>
                        <div class="social__wrapper">
                            <div class="row">
                                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="facebook">
                                        <label for="facebook">FACEBOOK</label>
                                        <input type="text" name="facebook"
                                            placeholder="Enter your Facebook URL" />
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="twitter">
                                        <label for="twitter">TWITTER</label>
                                        <input type="text" name="twitter" placeholder="Enter your Twitter URL" />
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="instagram">
                                        <label for="instagram">INSTAGRAM</label>
                                        <input type="text" name="instagram"
                                            placeholder="Enter your Instagram URL" />
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div class="linkedin">
                                        <label for="linkedin">LINKEDIN</label>
                                        <input type="text" name="linkedin" placeholder="Enter your Linkein URL" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button class="change__btn">Change Profile</button>
                </form>
            </div>
        )
    }
}
