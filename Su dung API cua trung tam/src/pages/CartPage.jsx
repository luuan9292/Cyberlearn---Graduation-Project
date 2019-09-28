import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CartContainer from '../containers/CartContainer';
import Related from '../components/Related/Related';
import Loader from '../components/Loader/Loader';

import Fade from 'react-reveal/Fade';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import CatchScroll from '../components/CatchScroll/CatchScroll';

export default class CartPage extends Component {
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
            
                <CartContainer />

                <Related />
                
            </Fade>
        )
    }
    render() {

        let {match} = this.props;

        return (
            <>

                <CatchScroll />

                <HeaderContainer header="header pageheader" />

                <Breadcrumb match={match} name="Cart"/>

                {this.showLoader()}

                <Footer footer="footer footerpage" />

                <ScrollUpButton EasingType="linear"/>

            </>
        )
    }

}
