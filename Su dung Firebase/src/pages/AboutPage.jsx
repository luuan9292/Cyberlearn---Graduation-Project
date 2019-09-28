import React, { Component } from 'react'
import CatchScroll from '../components/CatchScroll/CatchScroll';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer/Footer';
import Fade from 'react-reveal/Fade';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Loader from '../components/Loader/Loader';
import About from '../components/About/About';

export default class AboutPage extends Component {
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
     * Component: CartPage
     ----------------------------------------**/
    showLoader = () => {
        if (this.state.showLoader) {
            return <Loader />
        }
        return (
            <Fade bottom>
            
                <About/>

            </Fade>
        )
    }
    render() {

        return (
            <>

                <CatchScroll />

                <HeaderContainer header="header pageheader" />

                {this.showLoader()}

                <Footer footer="footer footerpage" />

                <ScrollUpButton EasingType="linear" />

            </>
        )
    }
}
