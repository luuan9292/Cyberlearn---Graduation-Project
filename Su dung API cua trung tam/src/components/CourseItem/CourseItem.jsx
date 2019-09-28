import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CourseItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showGoCart: false
        }
    }

    /**----------------------------------------
     * Function: Xac dinh khoa hoc da add vao cart chua
     * Component: CourseItem
     ----------------------------------------**/
    static getDerivedStateFromProps = (prevProps, nextState) => {
        let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];
        let index = cart.findIndex(item => {
            return item.maKhoaHoc === prevProps.course.maKhoaHoc;
        });
        if (index !== -1) {
            nextState.showGoCart = true
        }
        return null;
    }

    /**----------------------------------------
     * Function: Kich hoat dispatch add cart
     * Component: CourseContainer, HeaderContainer,ViewingContainer
     ----------------------------------------**/
    onAdd = (course) => {
        this.props.handleAddCart(course)
    }

    render() {

        let { course } = this.props;

        return (
            <section className="item__content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 pl-0 content">
                            <div className="content__title">
                                <h1>{course.tenKhoaHoc}</h1>
                                <div className="intro__title pl-0">
                                    <div className="teacher px-0">
                                        <img src="/img/teacher3.jpg" alt="intro" />
                                        <div className="teacher__name">
                                            <div>Teacher</div>
                                            <div>Robert Richards</div>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <span className="lnr lnr-layers" />
                                        <div className="category__name">
                                            <div>Category</div>
                                            <div>Apache, Computer Science, PHP, CSS, JS</div>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <i className="far fa-star" />
                                        <span>3.5 </span>
                                        <div>500 reviews</div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>
                                    {course.moTa}
                                </p>
                            </div>
                            <div className="knowledge">
                                <h5>What you'll learn</h5>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                        <ul>
                                            <li><i className="fas fa-check" /> Learn to use Python professionally, learning both
                  Python 2 and Python 3!</li>
                                            <li><i className="fas fa-check" /> Learn advanced Python features, like the
                  collections module and how to work with timestamps!</li>
                                            <li><i className="fas fa-check" /> Understand complex topics, like decorators.</li>
                                            <li><i className="fas fa-check" /> Get an understanding of how to create GUIs in the
                  Jupyter Notebook system!</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                        <ul>
                                            <li><i className="fas fa-check" /> Create games with Python, like Tic Tac Toe and
                  Blackjack!</li>
                                            <li><i className="fas fa-check" /> Learn to use Object Oriented Programming with
                  classes!</li>
                                            <li><i className="fas fa-check" /> Understand how to use both the Jupyter Notebook and
                  create .py files</li>
                                            <li><i className="fas fa-check" /> Build a complete understanding of Python! from the
                  ground up!</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="course__section">
                                <h5>Course content</h5>
                                <div className="sections">
                                    <div className="section__item">
                                        <div className="section__header">
                                            <div>
                                                SECTION 1: INTRODUCTION
                  <span>Preview</span>
                                            </div>
                                        </div>
                                        <div className="section__entry">
                                            <div className="gap" />
                                            <div className="lessons">
                                                <div className="lessons__header">
                                                    <div>Lessons</div>
                                                    <ul>
                                                        <li><i className="fas fa-play-circle" /> How to obtain your Certificate of
                                                          Completion for this course
                        <span><i className="far fa-clock" /> 15:32</span>
                                                        </li>
                                                        <li><i className="fas fa-play-circle" /> Working Files – Download These
                                                          First
                        <span><i className="far fa-clock" /> 14:24</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section__item">
                                        <div className="section__header">
                                            <div>
                                                SECTION 2: WORKSPACE AND PREFERENCES
                  <span>Preview</span>
                                            </div>
                                        </div>
                                        <div className="section__entry">
                                            <div className="gap" />
                                            <div className="lessons">
                                                <div className="lessons__header">
                                                    <div>Lessons</div>
                                                    <ul>
                                                        <li><i className="fas fa-play-circle" /> Get In Total Control Of The
                                                          Control Panel
                        <span><i className="far fa-clock" /> 15:32</span>
                                                        </li>
                                                        <li><i className="fas fa-play-circle" /> The Magic Of Auto Recovery
                        <span><i className="far fa-clock" /> 15:32</span>
                                                        </li>
                                                        <li><i className="fas fa-play-circle" /> Customize The Workspace
                        <span><i className="far fa-clock" /> 15:32</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section__item">
                                        <div className="section__header">
                                            <div>SECTION 3: LAYOUT</div>
                                        </div>
                                        <div className="section__entry">
                                            <div className="gap" />
                                            <div className="lessons">
                                                <div className="lessons__header">
                                                    <div>Lessons</div>
                                                    <ul>
                                                        <li><i className="fas fa-play-circle" /> Outside-The-Box Thinking With
                                                          Grids
                        <span><i className="far fa-clock" /> 15:32</span>
                                                        </li>
                                                        <li><i className="fas fa-play-circle" /> Creating Saving And Opening
                                                          Documents
                        <span><i className="far fa-clock" /> 15:32</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 pr-0 sidebar">
                            <div className="sidebar__info">
                                <div className="info__img">

                                    <img src={course.hinhAnh} alt="item" />

                                </div>
                                <div className="info__inner">
                                    <div className="wishlist">
                                        <div className="add__list">
                                            <div className="heart">
                                                <i className="lnr lnr-heart" />
                                            </div>
                                            <span>Add to Wishlist</span>
                                        </div>
                                        <span className="price">$19.99</span>
                                    </div>
                                    {
                                        this.state.showGoCart ?
                                            <Link to="/cart">
                                                <button className="go_cart">GO TO CART</button>
                                            </Link>
                                            :
                                            <button className="add" onClick={() => this.onAdd(course)}>ADD TO CART</button>
                                    }
                                    <button className="buy">BUY NOW</button>
                                    <ul className="meta">
                                        <li>
                                            <div>Enrolled: <span> 3 students</span></div>
                                            <i className="lnr lnr-users" />
                                        </li>
                                        <li>
                                            <div>Duration: <span> 6 hours</span></div>
                                            <i className="lnr lnr-clock" />
                                        </li>
                                        <li>
                                            <div>Lectures: <span> 6</span></div>
                                            <i className="lnr lnr-bullhorn" />
                                        </li>
                                        <li>
                                            <div>Video: <span> 3 hours</span></div>
                                            <i className="lnr lnr-film-play" />
                                        </li>
                                        <li>
                                            <div>Level: <span> 3 Beginner</span></div>
                                            <i className="lnr lnr-sort-amount-asc" />
                                        </li>
                                    </ul>
                                    <div className="coupon">
                                        <input type="text" placeholder="Enter Coupon" />
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__try">
                                <h5>Training 5 or more people?</h5>
                                <p>Get your team access to 3,500+ top Skilled courses anytime, anywhere.</p>
                                <a href="#1">Try Skilled for Business</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
