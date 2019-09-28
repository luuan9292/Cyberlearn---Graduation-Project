import React from 'react'

export default function About() {
    return (
        <>
            <section className="about__header">
                <div className="container-fluid header__wrapper">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 banner">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 about__meta meta__purple">
                            <div className="meta__icon">
                                <i class="fas fa-book"></i>
                            </div>
                            <div className="meta__info">
                                <h2>Learn</h2>
                                <h3>at your pace</h3>
                                <p>Courses for all levels cover technical skills, creative techniques, business strategies, and more. We have collected.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 about__meta meta__red">
                            <div className="meta__icon">
                                <i class="fas fa-door-open"></i>
                            </div>
                            <div className="meta__info">
                                <h2>Explore</h2>
                                <h3>courses</h3>
                                <p>Sign up and find out for yourself why so many people are taking and recommending this course. I genuinely believe.</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 about__meta meta__orange">
                            <div className="meta__icon">
                                <i class="fas fa-play-circle"></i>
                            </div>
                            <div className="meta__info">
                                <h2>Enroll</h2>
                                <h3>in courses</h3>
                                <p>Get unlimited access to 2,000 of Udemy’s top courses for your team. Teach what you love. Udemy gives you the tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about__us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="contact_content">
                                <h4>WHO ARE WE ?</h4>
                                <blockquote className="blockquote">Our grantees and partners generosity truth, prevention nutrition
                                  involvement Ford Foundation. Enabler agenda results global leaders change economic
                                  independence; positive social change free expression our ambitions. Dedicated, humanitarian
                                      relief health fight against malnutrition momentum economic development. Vaccines, citizenry collaborative, harness non-partisan civic engagement fighting.</blockquote>
                                <button className="contact__btn">CONTACT US NOW</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="./img/about.png" alt="about" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="certification">
                <div className="container certification__wrapper">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="certi__title">
                                <h3>HOW OUR CLASSES WORK</h3>
                                <p>Share your work to collaborate with our vibrant</p>
                            </div>
                            <div className="row certi__content">
                                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 certi__item">
                                    <h6>1. Become a Member</h6>
                                    <p>Watch classes on your own schedule, anytime, anywhere.</p>
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 certi__item">
                                    <h6>2. Learn By Doing</h6>
                                    <p>Lessons are bite-sized with most classes under an hour.</p>
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 certi__item">
                                    <h6>3. Engage with a Community</h6>
                                    <p>Create projects and build a portfolio of work.</p>
                                </div>
                                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 certi__item">
                                    <h6>4. Take a Course</h6>
                                    <p>Enroll in online classes taught by creators from around the world.</p>
                                </div>
                            </div>
                            <div className="certi__button">
                                <button className="certi__btn">VIEW ALL COURSES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="container text-center">
                    <h4>MEET OUR TEAM</h4>
                    <div className="row">
                        <div className="col-md-4 pl-0 pr-3">
                            <div className="team__item">
                                <div className="team__image">
                                    <img src="./img/team-member-5.jpg" alt="team-member" />
                                    <div className="team__social">
                                        <i className="fab fa-facebook-f" />
                                        <i className="fab fa-twitter" />
                                        <i className="fab fa-google-plus-g" />
                                        <i className="fab fa-pinterest-p" />
                                        <i className="fab fa-instagram" />
                                    </div>
                                </div>
                                <div className="team__content">
                                    <h5>MR. STORMIT</h5>
                                    <p>CEO of theme-sky</p>
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation. Enabler agenda results global leaders.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2">
                            <div className="team__item">
                                <div className="team__image">
                                    <img src="./img/team-member-3.jpg" alt="team-member" />
                                    <div className="team__social">
                                        <i className="fab fa-facebook-f" />
                                        <i className="fab fa-twitter" />
                                        <i className="fab fa-google-plus-g" />
                                        <i className="fab fa-pinterest-p" />
                                        <i className="fab fa-instagram" />
                                    </div>
                                </div>
                                <div className="team__content">
                                    <h5>MR. KING</h5>
                                    <p>Developer</p>
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation. Enabler agenda results global leaders.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pr-0 pl-3">
                            <div className="team__item">
                                <div className="team__image">
                                    <img src="./img/team-member-6.jpg" alt="team-member" />
                                    <div className="team__social">
                                        <i className="fab fa-facebook-f" />
                                        <i className="fab fa-twitter" />
                                        <i className="fab fa-google-plus-g" />
                                        <i className="fab fa-pinterest-p" />
                                        <i className="fab fa-instagram" />
                                    </div>
                                </div>
                                <div className="team__content">
                                    <h5>MS. JENNY</h5>
                                    <p>Developer</p>
                                    <p>Our grantees and partners generosity truth, prevention nutrition involvement Ford Foundation. Enabler agenda results global leaders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
