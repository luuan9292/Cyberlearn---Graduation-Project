import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer';
import Search from '../components/Search/Search';
import Feature from '../components/Feature/Feature';
import PopularContainer from '../containers/PopularContainer';
import ViewingContainer from '../containers/ViewingContainer';
import Countdown from '../components/Countdown/Countdown';
import Teacher from '../components/Teacher/Teacher';
import Offer from '../components/Offer/Offer';
import OurBlog from '../components/OurBlog/OurBlog';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer';

import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import CatchScroll from '../components/CatchScroll/CatchScroll';

export default class HomePage extends Component {

    

    render() {

        let { history } = this.props;

        return (
            <div className="wrapper">

                <CatchScroll />

                <HeaderContainer header="header" />

                <Search history={history} />

                <Feature />

                <PopularContainer />

                <ViewingContainer />

                <Countdown />

                <Teacher />

                <Offer />

                <OurBlog />

                <Testimonial />

                <Footer footer="footer" />

                <ScrollUpButton EasingType="linear" />

            </div>

        )
    }
}