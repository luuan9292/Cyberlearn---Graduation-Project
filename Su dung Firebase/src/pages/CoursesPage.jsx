import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Stat from '../components/Stat/Stat';
import SearchBarContainer from '../containers/SearchBarContainer';
import CoursesContainer from '../containers/CoursesContainer';
import Footer from '../components/Footer/Footer';

import Loader from '../components/Loader/Loader';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import CatchScroll from '../components/CatchScroll/CatchScroll';


export default class CoursesPage extends Component {

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
     * Component: CoursesPage
     ----------------------------------------**/
    showLoader = (history) => {
        if (this.state.showLoader) {
            return <Loader />
        }
        return (
            <>
            
                <Stat />

                <SearchBarContainer history={history}/>

                <CoursesContainer/>
                
            </>
        )
    }

    render() {

        let {history, match} = this.props;

        return (
            <>

                <CatchScroll />

                <HeaderContainer header="header pageheader" />

                <Breadcrumb match={match} name="Courses"/>

                {this.showLoader(history)}

                <Footer footer="footer footerpage" />

                <ScrollUpButton EasingType="linear"/>

            </>
        )
    }
}
