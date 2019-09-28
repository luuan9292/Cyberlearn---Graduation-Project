import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Item extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showGoCart: false
        }
    }

    /**----------------------------------------
     * Function: Kich hoat dispatch add cart
     * Component: CourseContainer, HeaderContainer,ViewingContainer
     ----------------------------------------**/
    onAdd = (course) => {
        this.props.handleAddCart(course);
        this.setState({
            showGoCart: true
        })
    }

    /**----------------------------------------
     * Function: Xac dinh khoa hoc da add vao cart chua
     * Component: Course
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

    render() {

        let { course } = this.props;

        return (
            <div className="product__item">
                <Link to={`/courses/${course.maKhoaHoc}`}>
                    <div className="item__img">
                        <img src={course.hinhAnh} alt="item" />
                        <div className="img__overlay" />
                    </div>
                    <div className="item__info">
                        <h5>

                            {course.tenKhoaHoc.length > 45 ? course.tenKhoaHoc.substr(0, 45) + "..." : course.tenKhoaHoc}

                        </h5>
                        <h6>Jose Portilla</h6>
                        <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                            <span className="score">3.5 <span className="reviews">(176,466)</span></span>
                        </div>
                        <div className="price">
                            <span className="old__price">$199.99</span>
                            <span className="price">$19.99 <i className="fas fa-tag"></i></span>
                        </div>
                    </div>
                </Link>
                <span className="best__seller">BEST</span>
                <div className="sub__info">
                    <div className="info__content">
                        <div className="teacher">
                            <img src="/img/teacher.jpg" alt="teacher" />
                            <h6>George Richards</h6>
                        </div>
                        <h5>{course.tenKhoaHoc.length > 45 ? course.tenKhoaHoc.substr(0, 45) + "..." : course.tenKhoaHoc}</h5>
                        <p>

                            {course.moTa.length > 200 ? course.moTa.substr(0, 200) + "..." : course.moTa}

                        </p>
                        <div className="meta">
                            <div><i className="fas fa-signal" /> Advanced</div>
                            <div><i className="fas fa-list-ul" /> 6 Lectures</div>
                            <div><i className="far fa-clock" /> 6 Hours</div>
                        </div>
                        {
                            this.state.showGoCart ?
                                <Link to="/cart">
                                    <button className="go_cart">GO TO CART</button>
                                </Link>
                                :
                                <button onClick={() => this.onAdd(course)} className="add__cart">ADD TO CART</button>
                        }
                        <div className="wishlist">
                            <div className="add__list">
                                <div className="heart">
                                    <i className="lnr lnr-heart" />
                                </div>
                                <span>Add to Wishlist</span>
                            </div>
                            <span className="price">$19.99</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
