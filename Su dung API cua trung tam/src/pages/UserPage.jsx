import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer/Footer';
import User from '../components/User/User';
import Loader from '../components/Loader/Loader';

import Fade from 'react-reveal/Fade';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import CatchScroll from '../components/CatchScroll/CatchScroll';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export default class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoader: true
        }
    }

    //set thoi gian cho preloader
    componentDidMount() {
        this.setTime = setTimeout(() => {
            this.setState({
                showLoader: false
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.setTime)
    }

    /**----------------------------------------
     * Function: An hien loader
     * Component: UserPage
     ----------------------------------------**/
    showLoader = (match) => {
        if (this.state.showLoader) {
            return <Loader />
        }
        return (
            <Fade bottom>
                
                <User  match={match} />

            </Fade>
        )
    }

    render() {

        let {match} = this.props;
        
        return (
            <>

                <CatchScroll />

                <HeaderContainer header="header pageheader" />

                <Breadcrumb match={match} name="User"/>

                {this.showLoader(match)}

                <Footer footer="footer footerpage" />

                <ScrollUpButton EasingType="linear"/>

            </>
        )
    }
}
