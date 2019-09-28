import React from 'react'

export default function Footer(props) {

    let { footer } = props;

    return (
        <section className={footer}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 pl-0 about">
                        <h5>ABOUT US</h5>
                        <p>
                            Praesent quis risus nec mi feugiat vehicula. Sed nec feugiat arcu. Ut ligula metus, dapibus in sagittis lobortis, rhoncus nec libero.
                        </p>
                        <ul>
                            <li><span className="lnr lnr-map-marker" /> <span>Line 1</span></li>
                            <li><span className="lnr lnr-phone" /> <span>(123) 456 789</span></li>
                            <li><span className="lnr lnr-envelope" /> <span>email@example.com</span></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 pl-0 new">
                        <h5>NEW COURSES</h5>
                        <ul>
                            <li><i className="fas fa-caret-right" /> Branding like a professional in</li>
                            <li><i className="fas fa-caret-right" /> Become a Professional Graphic</li>
                            <li><i className="fas fa-caret-right" /> Sketch 3 from A to</li>
                            <li><i className="fas fa-caret-right" /> French for Beginners to Advanced</li>
                            <li><i className="fas fa-caret-right" /> Typography and Lettering for Logo</li>
                            <li><i className="fas fa-caret-right" /> Adobe InDesign CS6 Tutorial Beginners</li>
                            <li><i className="fas fa-caret-right" /> Sketch 3 from A to</li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 pl-0 working">
                        <h5>WORKING HOURS</h5>
                        <ul>
                            <li>
                                <span>Monday</span>
                                <span>9am - 6pm</span>
                            </li>
                            <li>
                                <span>Tuesday</span>
                                <span>9am - 6pm</span>
                            </li>
                            <li>
                                <span>Wednesday</span>
                                <span>9am - 6pm</span>
                            </li>
                            <li>
                                <span>Thursday</span>
                                <span>9am - 6pm</span>
                            </li>
                            <li>
                                <span>Friday</span>
                                <span>9am - 6pm</span>
                            </li>
                            <li>
                                <span>Saturday</span>
                                <span className="closed">Closed</span>
                            </li>
                            <li>
                                <span>Sunday</span>
                                <span className="closed">Closed</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 tags">
                        <h5>TAGS</h5>
                        <div className="tag">
                            <div>Business</div>
                            <div>Creative</div>
                            <div>Finance</div>
                            <div>Gaming</div>
                            <div>General</div>
                            <div>Graphic Design</div>
                            <div>Guitar</div>
                            <div>Hardware</div>
                            <div>Health</div>
                            <div>Management</div>
                            <div>Music</div>
                            <div>Travel</div>
                            <div>Operating Systems</div>
                            <div>Strategy</div>
                            <div>Travel</div>
                            <div>Web Development</div>
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 px-0">
                        © 2017 BoxShop. All Rights Reserved By Ryan Luu
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 px-0">
                        <img src="/img/payment.png" alt="payment" />
                    </div>
                </div>              
            </div>
        </section>

    )
}
