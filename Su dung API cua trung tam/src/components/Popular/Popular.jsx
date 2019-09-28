import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Slider from "react-slick";


export default class Popular extends Component {
    render() {

        const settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            touchMove:false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };

        return (
            <section className="popular">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 popular__content">
                            <ul className="nav nav-pills">
                                <h3 className="title">Popular Courses</h3>
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#development">Development</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#design">Design</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#business">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#it">IT &amp; Sofware</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#science">Computer Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#marketing">Marketing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#photography">Photography</a>
                                </li>
                                <li className="viewall">
                                    <Link to="/courses">View All <span className="lnr lnr-arrow-right" /></Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane container active" id="development">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="design">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="business">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="it">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="science">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="marketing">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="photography">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 product__items">
                                            <Slider {...settings}>

                                                {this.props.children}


                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}