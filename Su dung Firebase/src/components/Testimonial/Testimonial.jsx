import React from 'react'

export default function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testi__top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 testi__left pl-0">
                            <div className="testi__wrapper">
                                <div className="testi__img">
                                    <img src="/img/quote1.png" alt="testi" />
                                </div>
                                <div className="testi__info">
                                    <h6>LEARN WHAT YOU WANT</h6>
                                    <p><i className="fas fa-quote-left" /> Had the privilege of working with this great
                                      team
                                      in Kiev &amp; I am impressed with their
                progress. With more than 10K courses, this team is going places. <i className="fas fa-quote-right" /></p>
                                    <h6>- RAN CARROLL, Skilled Student</h6>
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 testi__right pr-0">
                            <div className="testi__wrapper">
                                <div className="testi__img">
                                    <img src="/img/quote2.png" alt="testi" />
                                </div>
                                <div className="testi__info">
                                    <h6>LEARN WHAT YOU WANT</h6>
                                    <p><i className="fas fa-quote-left" /> Had the privilege of working with this great
                                      team
                                      in Kiev &amp; I am impressed with their
                progress. With more than 10K courses, this team is going places. <i className="fas fa-quote-right" /></p>
                                    <h6>- CRISS JAM</h6>
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testi__bot">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 bot__left px-0">
                            <div className="bot__wrapper">
                                <div className="bot__icon">
                                    <span className="lnr lnr-laptop-phone" />
                                </div>
                                <div className="bot__info">
                                    <h6>2000+ PEOPLE ALREADY JOINED OUR CLUB</h6>
                                    <p>Subscribe now and receive weekly newsletter with educational materials, new
                                      courses,
                interesting posts, popular books and much more!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 bot__right px-0">
                            <button>LEARN MORE ABOUT US</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
